import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Tambahkan ini
import { getGradient } from '../utils/colors';
const aplikasi = JSON.parse(localStorage.getItem('aplikasi'));

function PrivateTrip() {
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

    return (
        <section className="container-fluid p-0 position-relative">
            <div className="container my-5 position-relative" style={{ zIndex: 1 }}>
                <h3 className="text-center fw-bold mb-4">PILIHAN PAKET PRIVATE TRIP HALOPAHAWANG</h3>
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
                                    <Link
                                        to="/wisata/detail-wisata" // ✅ Ganti sesuai route detail kamu
                                        className="btn text-white"
                                        style={{ background: getGradient(aplikasi) }}
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
    );
}

export default PrivateTrip;
