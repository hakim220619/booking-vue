import React from 'react';
import { Link } from 'react-router-dom';
import { getGradient } from '../utils/colors';

const Footer = () => {
    const aplikasi = JSON.parse(localStorage.getItem('aplikasi'));
    const textColor = aplikasi?.first_text_color || '#ffffff';

    const withProtocol = (url) => {
        if (!url) return '';
        return url.startsWith('http') ? url : `https://${url}`;
    };

    const socialLinks = [
        {
            key: 'fb',
            label: 'Facebook',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_(2019).svg',
        },
        {
            key: 'ig',
            label: 'Instagram',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
        },
        {
            key: 'wa',
            label: 'WhatsApp',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
            isWhatsapp: true,
        },
        {
            key: 'tiktok',
            label: 'TikTok',
            icon: 'https://static.vecteezy.com/system/resources/previews/023/986/492/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png',
        },
    ];

    return (
        <footer
            className="footer mt-5 p-4"
            style={{
                background: '#254D70',
                fontSize: '0.9rem',
                color: textColor,
            }}
        >
            <div
                className="container"
                style={{
                    maxWidth: 1900,
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                }}
            >
                {/* Office di kiri */}
                <div style={{ flex: 1, minWidth: 280, textAlign: 'left' }}>
                    <h6 style={{ fontWeight: '700', marginBottom: '0.8rem', color: textColor }}>Office</h6>
                    <p style={{ margin: '4px 0' }}>{aplikasi?.address || '-'}</p>
                    <p style={{ margin: '4px 0' }}>
                        Whatsapp:{' '}
                        <a
                            href={`https://wa.me/${aplikasi?.contact?.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: textColor }}
                        >
                            {aplikasi?.contact}
                        </a>
                    </p>
                    <p style={{ margin: '4px 0' }}>
                        Email:{' '}
                        <a href={`mailto:${aplikasi?.email}`} style={{ color: textColor }}>
                            {aplikasi?.email}
                        </a>
                    </p>
                </div>

                {/* Social Media di kanan */}
                <div style={{ flex: 'none', minWidth: 200, marginLeft: 'auto', textAlign: 'right' }}>
                    <h6 style={{ color: textColor, fontWeight: '700', marginBottom: '1rem' }}>
                        Follow Us
                    </h6>
                    <div style={{ display: 'flex', gap: 15, justifyContent: 'flex-end' }}>
                        {socialLinks.map((item) => {
                            const value = aplikasi?.[item.key];
                            if (!value) return null;

                            const href = item.isWhatsapp
                                ? `https://wa.me/${value.replace(/\D/g, '')}`
                                : withProtocol(value);

                            return (
                                <a
                                    key={item.key}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={item.label}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        width={32}
                                        height={32}
                                        style={{ transition: 'filter 0.2s' }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.filter = 'brightness(1)')
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.filter = 'brightness(0.85)')
                                        }
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: 30,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.8rem',
                    color: textColor,
                }}
            >
                <div>
                    &copy; {new Date().getFullYear()} Kitaliburan.id. All rights reserved.
                </div>

                <div style={{ textAlign: 'right' }}>
                    <Link to="/about" style={{ margin: '0 8px', color: textColor, textDecoration: 'none' }}>
                        About Us
                    </Link>
                    |
                    <Link to="/contact" style={{ margin: '0 8px', color: textColor, textDecoration: 'none' }}>
                        Contact Us
                    </Link>
                    |
                    <Link to="/terms" style={{ margin: '0 8px', color: textColor, textDecoration: 'none' }}>
                        Syarat & Ketentuan
                    </Link>
                    |
                    <Link to="/gallery" style={{ margin: '0 8px', color: textColor, textDecoration: 'none' }}>
                        Gallery
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
