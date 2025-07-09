import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TestimonialSection from './Testimonial';
import { Link } from 'react-router-dom';
import formatPrice from '../components/formatPrice';
import { getGradient } from '../utils/colors';

const aplikasi = JSON.parse(localStorage.getItem('aplikasi'));

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
        <>
            <section className="container-fluid p-0 position-relative">
                {/* Carousel */}
                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {sliderImages.map((img, idx) => (
                            <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                                <img
                                    src={img}
                                    alt={`Slide ${idx + 1}`}
                                    className="d-block w-100"
                                    style={{ maxHeight: '100vh', objectFit: 'cover', transition: 'opacity 1s ease-in-out' }}
                                />
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Paket Wisata */}
                <div className="container my-5 position-relative fade-in" style={{ zIndex: 1 }}>
                    <h3 className="text-center fw-bold mb-4">Pilihan Paket Wisata KitaLiburan.id</h3>
                    <div className="row g-4 justify-content-center">
                        {packages.map((pkg, index) => (
                            <div key={index} className="col-12 col-md-4 col-lg-3">
                                <div
                                    className="shadow-sm border p-3 h-100 d-flex flex-column justify-content-between hover-card"
                                    style={{
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                >
                                    <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                                        <img
                                            src={pkg.img}
                                            alt={pkg.title}
                                            width="100%"
                                            height="150"
                                            style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                            className="hover-zoom"
                                        />
                                    </div>
                                    <h6 className="text-center mt-3 fw-bold">{pkg.title}</h6>
                                    <div className="d-flex border-top mt-3 pt-3 align-items-center">
                                        <div className="flex-grow-1 text-center">
                                            <small>Harga Mulai</small>
                                            <h5 className="fw-bold mb-0">{formatPrice(pkg.price)}</h5>
                                        </div>
                                        <Link
                                            to="/wisata/detail-wisata"
                                            className="btn text-white"
                                            style={{
                                                background: aplikasi?.first_color,
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            Klik DETAIL
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialSection />
        </>
    );
}

export default HeroSection;
