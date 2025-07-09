import React, { useEffect, useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../utils/axios';
import { getGradient } from '../utils/colors';
function Header() {
    const [openMenu, setOpenMenu] = useState({});
    const [menus, setMenus] = useState([]);
    const menuRef = useRef(null);
    const collapseRef = useRef(null);

    useEffect(() => {
        api.get('/menus')
            .then(res => {
                const fetchedMenus = res.data.data;
                console.log(fetchedMenus);

                setMenus(fetchedMenus);
                const initialDropdownState = {};
                fetchedMenus.forEach(menu => {
                    initialDropdownState[menu.key] = false;
                });
                setOpenMenu(initialDropdownState);
            })
            .catch(err => console.error('Failed to load menus:', err));
    }, []);

    useEffect(() => {
        api.get('/aplikasi')
            .then(res => {
                localStorage.setItem('aplikasi', JSON.stringify(res.data.data));
            })
            .catch(err => console.error(err));
    }, []);

    const aplikasi = JSON.parse(localStorage.getItem('aplikasi'));

    const withProtocol = (url) => {
        if (!url) return '';
        return url.startsWith('http') ? url : `https://${url}`;
    };

    const toggleDropdown = (key) => {
        setOpenMenu((prev) => {
            const newState = {};
            Object.keys(prev).forEach(k => {
                newState[k] = k === key ? !prev[k] : false;
            });
            return newState;
        });
    };

    const closeAllMenus = () => {
        const closedMenus = {};
        Object.keys(openMenu).forEach(key => {
            closedMenus[key] = false;
        });
        setOpenMenu(closedMenus);
    };

    const closeCollapse = () => {
        if (collapseRef.current && collapseRef.current.classList.contains('show')) {
            collapseRef.current.classList.remove('show');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openMenu]);

    return (
        <>
            {/* Top Bar */}
            {/* <div
                className="py-2 px-4 d-flex justify-content-between align-items-center"
                style={{
                    fontSize: '14px',
                    backgroundColor: aplikasi?.first_color || '#ffc107',
                    color: aplikasi?.second_text_color,
                }}
            >
                <div>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {aplikasi?.address || 'Alamat tidak tersedia'}
                </div>
                <div style={{ display: 'flex', gap: 15 }}>
                    {aplikasi?.fb && (
                        <a href={withProtocol(aplikasi.fb)} target="_blank" rel="noreferrer" aria-label="Facebook">
                            <FaFacebookF color={aplikasi?.second_text_color} />
                        </a>
                    )}
                    {aplikasi?.ig && (
                        <a href={withProtocol(aplikasi.ig)} target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FaInstagram color={aplikasi?.second_text_color} />
                        </a>
                    )}
                    {aplikasi?.twiter && (
                        <a href={withProtocol(aplikasi.twiter)} target="_blank" rel="noreferrer" aria-label="Twitter">
                            <FaTwitter color={aplikasi?.second_text_color} />
                        </a>
                    )}
                </div>
            </div> */}

            {/* Navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1020, // pastikan di atas konten
                }}
            >

                <div className="container">
                    <Link
                        className="navbar-brand fw-bold fs-3 text-warning"
                        to="/"
                        onClick={() => {
                            closeAllMenus();
                            closeCollapse();
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/logo1.png`}
                            alt="KITALiburan Logo"
                            style={{ height: '60px', width: '160px', objectFit: 'cover' }}
                        />
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
                        <ul className="navbar-nav ms-auto align-items-center" ref={menuRef}>
                            {menus.map(menu => (
                                <li key={menu.key} className="nav-item mx-2 position-relative">
                                    {menu.url === null ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(menu.key)}
                                                className="nav-link btn btn-link text-decoration-none"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {menu.label}
                                            </button>

                                            {openMenu[menu.key] && menu.items.length > 0 && (
                                                <ul
                                                    className="dropdown-menu show position-absolute"
                                                    style={{
                                                        top: '100%',
                                                        left: 0,
                                                        backgroundColor: 'white',
                                                        minWidth: '220px',
                                                        boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)',
                                                    }}
                                                >
                                                    {menu.items.map((item, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                className="dropdown-item"
                                                                to={`/${item.url}`}
                                                                onClick={() => {
                                                                    closeAllMenus();
                                                                    closeCollapse();
                                                                }}
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            className="nav-link"
                                            to={`/${menu.url}`}
                                            onClick={() => {
                                                closeAllMenus();
                                                closeCollapse();
                                            }}
                                        >
                                            {menu.label}
                                        </Link>
                                    )}
                                </li>
                            ))}

                            <li className="nav-item mx-2">
                                <a
                                    href={`https://wa.me/${aplikasi?.contact?.replace(/\D/g, '')}`}
                                    className="btn d-flex align-items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: aplikasi?.first_color,
                                        color: aplikasi?.first_text_color || '#ffffff',
                                        border: 'none',
                                    }}
                                    onClick={() => {
                                        closeAllMenus();
                                        closeCollapse();
                                    }}
                                >
                                    <FaWhatsapp size={20} className="me-2" /> Hubungi Kami!
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
