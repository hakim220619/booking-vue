import React, { useState } from 'react';
import formatPrice from './formatPrice';

const Template2 = ({ title, description, tripInfo, price, onBooking }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const aplikasi = JSON.parse(localStorage.getItem('aplikasi'));

    const borderColor = '#ccc';
    const borderStyle = { border: `0.5px solid ${borderColor}` };

    const allImages = [
        'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67816403-9cb659271a4c20ab394936a2006c631d.jpeg',
        'https://ik.imagekit.io/tvlk/blog/2020/12/Sam-poo-kong.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
        'https://ik.imagekit.io/tvlk/blog/2020/12/Lawang-Sewu.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
        'https://ik.imagekit.io/tvlk/blog/2020/12/Train-Ambarawa.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
        'https://ik.imagekit.io/tvlk/blog/2020/12/Sidomukti.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
        'https://ik.imagekit.io/tvlk/blog/2023/10/shutterstock_549935758.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
    ];

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container my-4">
            {/* Judul dan Deskripsi */}
            <div className="mb-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center fw-bold text-uppercase">{title}</h4>
                        <p className="card-text mt-3" style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Wrapper Card */}
            <div className="card" style={borderStyle}>
                <div className="card-body p-0">
                    <div className="row g-0" style={{ minHeight: '220px' }}>
                        {/* Gambar */}
                        <div className="col-md-6" style={{ borderRight: `0.5px solid ${borderColor}` }}>
                            <div className="d-flex flex-column h-100">
                                <div style={{ height: '160px' }}>
                                    <img
                                        src={allImages[0]}
                                        alt="Preview"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                        onClick={() => setShowModal(true)}
                                    />
                                </div>
                                <div className="row g-0 text-center" style={{ height: '60px' }}>
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="col" style={{ height: '175%' }}>
                                            <div style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    src={allImages[i + 1]}
                                                    alt={`Gallery ${i + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShowModal(true)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Detail */}
                        <div className="col-md-6 position-relative p-3">
                            <h6 className="fw-bold">OPEN TRIP | {tripInfo.title}</h6>
                            <ul className="list-unstyled mt-3" style={{ fontSize: '0.95rem' }}>
                                {tripInfo.details.map((item, idx) => (
                                    <li key={idx}>
                                        • <b>{item.label}</b> : {item.value}
                                    </li>
                                ))}
                            </ul>
                            <div
                                className="position-absolute top-0 end-0 text-center"
                                style={{
                                    border: `0.5px solid ${borderColor}`,
                                    // backgroundColor: aplikasi?.second_color,
                                    padding: '10px 15px',
                                    fontWeight: 'bold',
                                    minWidth: '110px'
                                }}
                            >
                                <div>Harga</div>
                                <div>
                                    Rp <span style={{ fontSize: '1.3em' }}>{formatPrice(price)}</span>
                                </div>
                                <button
                                    className="btn btn-sm mt-2"
                                    onClick={onBooking}
                                    style={{
                                        backgroundColor: aplikasi?.main_color || aplikasi?.first_color,
                                        color: aplikasi?.first_text_color || '#ffffff',
                                        border: 'none',
                                    }}
                                >
                                    BOOKING
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Galeri */}
            {
                showModal && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            zIndex: 1050,
                            overflowY: 'auto',
                            padding: 20,
                        }}
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="bg-white rounded p-4"
                            style={{ width: '90%', maxWidth: 900 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Galeri Foto</h5>
                                <button className="btn btn-sm btn-danger" onClick={() => setShowModal(false)}>
                                    ✕ Tutup
                                </button>
                            </div>
                            <div className="row">
                                {allImages.map((img, i) => (
                                    <div key={i} className="col-md-4 mb-3">
                                        <img
                                            src={img}
                                            alt={`foto-${i}`}
                                            className="img-fluid rounded"
                                            style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                                            onClick={() => setSelectedIndex(i)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Fullscreen View + Navigasi */}
            {
                selectedIndex !== null && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1100 }}
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
                            onClick={handlePrev}
                            style={{ zIndex: 1200 }}
                        >
                            ❮
                        </button>

                        <img
                            src={allImages[selectedIndex]}
                            alt="fullscreen"
                            className="img-fluid"
                            style={{ maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain' }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
                            onClick={handleNext}
                            style={{ zIndex: 1200 }}
                        >
                            ❯
                        </button>

                        <button
                            className="btn btn-danger position-absolute top-0 end-0 m-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(null);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default Template2;
