import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeroSection() {
    const packages = [
        {
            title: 'Pulau Pahawang 1 Hari',
            price: 'Rp 130.000',
            img: 'https://picsum.photos/300/400?random=1',
        },
        {
            title: 'Pulau Wayang + Teluk Hantu 1 Hari',
            price: 'Rp 330.000',
            img: 'https://picsum.photos/300/400?random=2',
        },
        {
            title: 'Pulau Tegal Mas 1 Hari',
            price: 'Rp 0.000',
            img: 'https://picsum.photos/300/400?random=3',
        },
        {
            title: 'Pulau Pahawang 2D1N',
            price: 'Rp 330.000',
            img: 'https://picsum.photos/300/400?random=4',
        },
        {
            title: 'Pulau Wayang + Pahawang 2D1N',
            price: 'Rp 0.000',
            img: 'https://picsum.photos/300/400?random=5',
        },
        {
            title: 'Pulau Tegal Mas 2D1N',
            price: 'Rp 0.000',
            img: 'https://picsum.photos/300/400?random=6',
        },
        {
            title: 'Pulau Wayang + Pahawang 2D1N',
            price: 'Rp 0.000',
            img: 'https://picsum.photos/300/400?random=7',
        },
        {
            title: 'Pulau Tegal Mas 2D1N',
            price: 'Rp 0.000',
            img: 'https://picsum.photos/300/400?random=8',
        },
    ];

    const sliderImages = [
        "https://www.zazatourjogja.com/images/slider/slider-1-85.png",
        "https://fcviktoria.cz/foto/fansMUcl.png",
        "https://www.designyourway.net/blog/wp-content/uploads/2024/04/chelsea-logo.jpg"
    ];

    return (
        <section className="container-fluid p-0 position-relative">
            {/* Carousel Gambar */}
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {sliderImages.map((img, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                            <img
                                src={img}
                                alt={`Slide ${idx + 1}`}
                                className="d-block w-100"
                                style={{ height: 'auto', maxHeight: '100vh', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>

                {/* Tombol navigasi */}
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Paket wisata cards */}
            <div className="container my-5 position-relative" style={{ zIndex: 1 }}>
                <h3 className="text-center fw-bold mb-4">PILIHAN PAKET WISATA KITAlIBURAN.id</h3>
                <div className="row g-4 justify-content-center">
                    {packages.map((pkg, index) => (
                        <div key={index} className="col-12 col-md-4 col-lg-3">
                            <div className="border p-3 h-100 d-flex flex-column justify-content-between">
                                <img
                                    src={pkg.img}
                                    alt={pkg.title}
                                    width="100%"
                                    height="150"
                                    style={{ objectFit: 'cover' }}
                                />
                                <h6 className="text-center mt-3 fw-bold">{pkg.title}</h6>
                                <div className="d-flex border-top mt-3 pt-3 align-items-center">
                                    <div className="flex-grow-1 text-center">
                                        <small>Harga Mulai</small>
                                        <h5 className="fw-bold mb-0">{pkg.price}</h5>
                                    </div>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: '#b6df41', fontWeight: 'bold' }}
                                    >
                                        Klik DETAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
