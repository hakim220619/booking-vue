import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
    { key: 'harga', label: '💰 Harga' },
    { key: 'itinerary', label: '🗺️ Itinerary' },
    { key: 'fasilitas', label: '🏨 Fasilitas Penginapan' },
    { key: 'syarat', label: '📄 Term & Condition' },
    { key: 'booking', label: '📩 BOOKING' },
];

const aplikasi = JSON.parse(localStorage.getItem('aplikasi'));

const PulauPahawang1D = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const allImages = [
        ...Array.from({ length: 1 }).map(() =>
            "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67816403-9cb659271a4c20ab394936a2006c631d.jpeg"
        ),
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

    const renderContent = () => {
        switch (activeTab) {
            case 'harga':
                return (
                    <div>
                        <h4 className="fw-bold mb-3">Harga Paket Per Orang</h4>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover text-center align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Jumlah Peserta</th>
                                        <th>Weekday</th>
                                        <th>Weekend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5].map((pax, index) => (
                                        <tr key={index}>
                                            <td>{pax} Pax</td>
                                            <td>{(500000 - pax * 10000).toLocaleString('id-ID')}</td>
                                            <td>{(520000 - pax * 10000).toLocaleString('id-ID')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-3">
                            <h6 className="fw-semibold">📌 NOTE:</h6>
                            <ul>
                                <li>Harga per orang, tergantung jumlah peserta.</li>
                                <li>Homestay AC tersedia untuk maksimal 25 pax.</li>
                                <li>Tidak berlaku untuk libur Natal, Tahun Baru, dan Hari Raya.</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'itinerary':
                return <p>🗓️ Itinerary perjalanan akan ditampilkan di sini.</p>;
            case 'fasilitas':
                return (
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="text-success fw-semibold mb-2">✅ Include</h6>
                            <ul>
                                <li>Perahu wisata, penginapan, makan, air mineral</li>
                                <li>Kelapa muda, pemandu, dokumentasi</li>
                                <li>Tiket masuk, snorkeling gear, life jacket</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h6 className="text-danger fw-semibold mb-2">❌ Exclude</h6>
                            <ul>
                                <li>Biaya pribadi</li>
                                <li>BBQ, drone, upgrade kapal</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'syarat':
                return <p>📄 Syarat dan ketentuan akan ditampilkan di sini.</p>;
            case 'booking':
                return <p>📩 Formulir atau cara booking akan ditampilkan di sini.</p>;
            default:
                return <p>👈 Silakan pilih salah satu menu di samping.</p>;
        }
    };

    return (
        <div className="container my-5">
            {/* GALLERY */}
            <div className="row g-2 mb-4">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="mb-1">
                    <ol className="breadcrumb justify-content-left">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-secondary">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/wisata" className="text-decoration-none text-secondary">Wisata</Link>
                        </li>
                        <li className="breadcrumb-item active text-dark fw-semibold" aria-current="page">
                            Pulau
                        </li>
                    </ol>
                </nav>

                <div className="col-md-8">
                    <img
                        src={allImages[0]}
                        className="img-fluid rounded w-100"
                        alt="Main View"
                        style={{ height: '310px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-4">
                    <div className="row g-2">
                        {allImages.slice(0, 6).map((src, index) => (
                            <div className="col-4" key={index}>
                                <div className="position-relative">
                                    <img
                                        src={src}
                                        className="img-fluid rounded w-100"
                                        style={{ height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                                        alt={`Gallery ${index}`}
                                        onClick={() => setSelectedIndex(index)}
                                    />
                                    {index === 5 && (
                                        <div
                                            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundColor: 'rgba(0,0,0,0.4)',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.9rem',
                                                borderRadius: '0.375rem',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => setShowModal(true)}
                                        >
                                            📷 Lihat Semua
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TITLE */}
            <div className="bg-white p-4 rounded shadow-sm mb-4">
                <h2 className="fw-bold">Trip Pulau Pahawang 1 Hari</h2>
                <div className="d-flex align-items-center text-warning my-2">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="text-muted ms-2">4.9 (320 reviews)</span>
                </div>
                <p className="text-secondary">
                    Nikmati perjalanan sehari penuh ke Pulau Pahawang yang mempesona! Snorkeling, pantai berpasir putih, dan keindahan bawah laut Lampung menanti Anda.
                </p>
                <div className="text-muted d-flex align-items-center">
                    <FaMapMarkerAlt className="me-2" /> Pulau Pahawang, Lampung
                </div>
            </div>

            {/* MENU & CONTENT */}
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        <div className="list-group-item fw-bold">Deskripsi</div>
                        {MENU_ITEMS.map((item) => (
                            <button
                                key={item.key}
                                className={`list-group-item list-group-item-action fw-semibold ${activeTab === item.key ? 'text-white' : 'text-dark'}`}
                                style={{
                                    backgroundColor: activeTab === item.key ? '#FFA500' : 'transparent',

                                }}
                                onClick={() => setActiveTab(item.key)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="p-3 border rounded bg-white shadow-sm">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* MODAL GALLERY */}
            {
                showModal && (
                    <div
                        className="modal fade show"
                        style={{
                            display: 'block',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1050,
                            overflowY: 'auto',
                            padding: '2rem',
                        }}
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="modal-dialog modal-lg"
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '90%', margin: 'auto' }}
                        >
                            <div className="modal-content p-3" style={{ backgroundColor: '#fff', borderRadius: '1rem' }}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="modal-title">Galeri Foto</h5>
                                    <button className="btn btn-sm btn-danger" onClick={() => setShowModal(false)}>Tutup</button>
                                </div>
                                <div className="row">
                                    {allImages.map((img, i) => (
                                        <div className="col-md-4 mb-3" key={i}>
                                            <img
                                                src={img}
                                                alt={`foto-${i}`}
                                                className="img-fluid rounded w-100"
                                                style={{ objectFit: 'cover', height: '200px', cursor: 'zoom-in' }}
                                                onClick={() => setSelectedIndex(i)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* FULLSCREEN IMAGE VIEW */}
            {
                selectedIndex !== null && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000 }}
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="position-absolute top-50 start-0 translate-middle-y btn btn-light btn-sm"
                            style={{ zIndex: 2100 }}
                            onClick={handlePrev}
                        >
                            ❮
                        </button>

                        <img
                            src={allImages[selectedIndex]}
                            alt="Full View"
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                objectFit: 'contain',
                                borderRadius: '0.5rem',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            className="position-absolute top-50 end-0 translate-middle-y btn btn-light btn-sm"
                            style={{ zIndex: 2100 }}
                            onClick={handleNext}
                        >
                            ❯
                        </button>

                        <button
                            className="position-absolute top-0 end-0 m-4 btn btn-danger btn-sm"
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

export default PulauPahawang1D;
