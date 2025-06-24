import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Header() {
    // State untuk dropdown menu
    const [openMenu, setOpenMenu] = useState({
        privateTrip: false,
        openTrip: false,
        paketOverland: false,
        studyTour: false,
        rental: false,
    });

    // Toggle fungsi untuk setiap menu dropdown
    const toggleDropdown = (menuName) => {
        setOpenMenu((prev) => {
            const newState = {};
            // Set semua menu ke false kecuali yang dipilih
            Object.keys(prev).forEach(key => {
                newState[key] = key === menuName ? !prev[key] : false;
            });
            return newState;
        });
    };


    return (
        <>
            {/* Navbar top orange bar */}
            <div className="bg-warning text-white py-2 px-4 d-flex justify-content-between align-items-center" style={{ fontSize: '14px' }}>
                <div>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Jl. Ratu Dibalau Gg.Cempaka 7 Way Kandis, Tj Senang, Bandar Lampung
                </div>
                <div>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white me-3"><FaFacebookF /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white me-3"><FaInstagram /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white"><FaTwitter /></a>
                </div>
            </div>

            {/* Navbar main */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3 text-warning" href="/">
                        KITA<span className="text-primary">Liburan</span>
                    </a>
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">

                            {/* HOME */}
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">HOME</a>
                            </li>

                            {/* PRIVATE TRIP */}
                            <li className="nav-item mx-2 position-relative">
                                <button
                                    onClick={() => toggleDropdown('privateTrip')}
                                    className="nav-link btn btn-link text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    aria-expanded={openMenu.privateTrip}
                                    aria-haspopup="true"
                                >
                                    PRIVATE TRIP
                                </button>
                                {openMenu.privateTrip && (
                                    <ul
                                        className="dropdown-menu show position-absolute"
                                        style={{ top: '100%', left: 0, backgroundColor: 'white', minWidth: '220px', boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)' }}
                                    >
                                        <li><a className="dropdown-item" href="#">Pulau Pahawang 1D</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Wayang 1D</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Tegal Mas 1D</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Pahawang 2D1N</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Wayang + Pahawang 2D1N</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Tegal Mas 2D1N</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Pahawang 3D2N</a></li>
                                    </ul>
                                )}
                            </li>

                            {/* OPEN TRIP */}
                            <li className="nav-item mx-2 position-relative">
                                <button
                                    onClick={() => toggleDropdown('openTrip')}
                                    className="nav-link btn btn-link text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    aria-expanded={openMenu.openTrip}
                                    aria-haspopup="true"
                                >
                                    OPEN TRIP
                                </button>
                                {openMenu.openTrip && (
                                    <ul
                                        className="dropdown-menu show position-absolute"
                                        style={{ top: '100%', left: 0, backgroundColor: 'white', minWidth: '220px', boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)' }}
                                    >
                                        <li><a className="dropdown-item" href="#">Pulau Pahawang 1 Hari</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Wayang 1 Hari</a></li>
                                        <li><a className="dropdown-item" href="#">Pulau Pahawang 2D1N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogja - Bandung 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Bali - Yogyakarta 8D</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Bali - Bromo - Yogyakarta 9D</a></li>
                                        {/* Bisa ditambah sesuai kebutuhan */}
                                    </ul>
                                )}
                            </li>

                            {/* PAKET OVERLAND */}
                            <li className="nav-item mx-2 position-relative">
                                <button
                                    onClick={() => toggleDropdown('paketOverland')}
                                    className="nav-link btn btn-link text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    aria-expanded={openMenu.paketOverland}
                                    aria-haspopup="true"
                                >
                                    PAKET OVERLAND
                                </button>
                                {openMenu.paketOverland && (
                                    <ul
                                        className="dropdown-menu show position-absolute"
                                        style={{ top: '100%', left: 0, backgroundColor: 'white', minWidth: '240px', boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)' }}
                                    >
                                        <li><a className="dropdown-item" href="#">Lampung - Bandung 4D3N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Bandung 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Yogyakarta 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Yogyakarta - Bandung 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Yogyakarta - Jakarta 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Yogyakarta - Bandung 6D5N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Bromo - Malang - Jogja 7D</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Malang - Jogja 7D6N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Malang - Bromo 7D6N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogja - Bandung 6D5N</a></li>
                                    </ul>
                                )}
                            </li>

                            {/* STUDY TOUR */}
                            <li className="nav-item mx-2 position-relative">
                                <button
                                    onClick={() => toggleDropdown('studyTour')}
                                    className="nav-link btn btn-link text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    aria-expanded={openMenu.studyTour}
                                    aria-haspopup="true"
                                >
                                    STUDY TOUR
                                </button>
                                {openMenu.studyTour && (
                                    <ul
                                        className="dropdown-menu show position-absolute"
                                        style={{ top: '100%', left: 0, backgroundColor: 'white', minWidth: '260px', boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)' }}
                                    >
                                        <li><a className="dropdown-item" href="#">Lampung City Tour 2D1N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jakarta 3D2N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Bandung - Jakarta 4D3N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogjakarta 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogja - Bandung 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogja - Jakarta 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogja - Bandung 6D5N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Jogja - Jakarta 5D4N</a></li>
                                        <li><a className="dropdown-item" href="#">Lampung - Bromo - Malang - Jogja 7D</a></li>
                                    </ul>
                                )}
                            </li>

                            {/* RENTAL */}
                            <li className="nav-item mx-2 position-relative">
                                <button
                                    onClick={() => toggleDropdown('rental')}
                                    className="nav-link btn btn-link text-decoration-none"
                                    style={{ cursor: 'pointer' }}
                                    aria-expanded={openMenu.rental}
                                    aria-haspopup="true"
                                >
                                    RENTAL
                                </button>
                                {openMenu.rental && (
                                    <ul
                                        className="dropdown-menu show position-absolute"
                                        style={{ top: '100%', left: 0, backgroundColor: 'white', minWidth: '180px', boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)' }}
                                    >
                                        <li><a className="dropdown-item" href="#">Sewa Perahu</a></li>
                                        <li><a className="dropdown-item" href="#">Sewa Penginapan</a></li>
                                        <li><a className="dropdown-item" href="#">Sewa Mobil</a></li>
                                        <li><a className="dropdown-item" href="#">Sewa Bus Pariwisata</a></li>
                                        <li><a className="dropdown-item" href="#">Sewa Pemandu Wisata</a></li>
                                    </ul>
                                )}
                            </li>

                            {/* Tombol Hubungi Kami */}
                            <li className="nav-item mx-2">
                                <a href="https://wa.me/yourwhatsappnumber" className="btn btn-warning d-flex align-items-center" style={{ color: 'white' }}>
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
