import React from 'react';
import TestimonialCard from '../components/testimoniCard';
const testimonials = [
    {
        id: 1,
        title: 'Banyak Pilihan',
        description:
            'KitaLiburan.id menyediakan banyak pilihan paket wisata Open Trip, Private Trip, Paket Overland, Study Tour hingga penyewaan kendaraan maupun penginapan.',
    },
    {
        id: 2,
        title: 'Harga Terjangkau & Fleksibel',
        description:
            'Liburan seru gak harus mahal, harga yang kami tawarkan sangat terjangkau dan juga fleksibel yang dapat disesuaikan dengan budget kamu guys..',
    },
    {
        id: 3,
        title: 'Tim Profesional & Ramah',
        description:
            'Pelayanan dari tim KitaLiburan sangat ramah, sabar menjelaskan itinerary dan membantu semua kebutuhan peserta selama perjalanan.',
    },
    {
        id: 4,
        title: 'Destinasi Unik & Menarik',
        description:
            'Setiap destinasi yang ditawarkan benar-benar menarik dan berbeda dari yang lain. Cocok banget buat yang suka eksplor tempat baru!',
    },
    {
        id: 5,
        title: 'Cocok Untuk Semua Kalangan',
        description:
            'Mulai dari solo traveler, pasangan, hingga rombongan keluarga atau kantor, semuanya bisa menikmati layanan KitaLiburan tanpa ribet.',
    },
    {
        id: 6,
        title: 'Booking Mudah & Cepat',
        description:
            'Proses booking sangat mudah dan cepat. Admin fast response dan semua info lengkap langsung dikasih lewat WhatsApp.',
    },
];


const TestimonialSection = () => (
    <section
        className="py-5 text-center"
        style={{

            color: '#333',
            position: 'relative',
        }}
    >
        <small className="text-uppercase" style={{ letterSpacing: '2px', color: '#555' }}>KITA LIBURAN</small>
        <h2 className="my-3 fw-bold">Apa Kata Mereka Tentang KitaLiburan Tour Lampung?</h2>
        <p className="mx-auto mb-5" style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.6' }}>
            Ratusan pelanggan puas telah merasakan serunya liburan bersama Kitaliburan Tour. Simak cerita dan pengalaman mereka selama menjelajahi Jogja dan destinasi lainnya bersama layanan terbaik kami.
        </p>

        <div
            className="container"
            style={{
                overflowX: 'auto',
                paddingBottom: '1rem',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
            }}
        >
            <div
                className="d-flex"
                style={{
                    gap: '1rem',
                    flexWrap: 'nowrap',
                    minWidth: 'max-content',
                    padding: '0 1rem',
                }}
            >
                {testimonials.map(t => (
                    <div
                        key={t.id}
                        style={{
                            flex: '0 0 300px',
                            minWidth: '300px',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        <TestimonialCard testimonial={t} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialSection;
