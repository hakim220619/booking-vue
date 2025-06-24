import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Mimi Yami',
        role: 'Customer',
        text: 'Trimakasih kitaliburan sdh kasih pelayanan yg sangat baik selama liburan kita sekeluarga, Admin ramah dan membantu sekali. Paketnya komplit, dan...',
        avatar: 'https://i.pravatar.cc/45?img=1',
        rating: 5,
    },
    {
        id: 2,
        name: 'Kusuma Grafika',
        role: 'Customer',
        text: 'Thanks a lot buat Kitaliburan Tour n Team. Trip kami di Bali, Jogja dan Bandung menjadi sangat mengesankan. Waiting for our next trip... Sukses buat kitaliburan Tour.',
        avatar: 'https://i.pravatar.cc/45?img=2',
        rating: 5,
    },
    {
        id: 3,
        name: 'Asep Reza',
        role: 'Customer',
        text: 'Pelayanan bagus, baik dan ramah sekali waktu saya ke jogja. Disana jadi pengalaman sangat berkesan saya dan istri saya, waktu honeymoon di jogja.',
        avatar: 'https://i.pravatar.cc/45?img=3',
        rating: 5,
    },
    {
        id: 3,
        name: 'Asep Reza',
        role: 'Customer',
        text: 'Pelayanan bagus, baik dan ramah sekali waktu saya ke jogja. Disana jadi pengalaman sangat berkesan saya dan istri saya, waktu honeymoon di jogja.',
        avatar: 'https://i.pravatar.cc/45?img=3',
        rating: 5,
    },
    {
        id: 3,
        name: 'Asep Reza',
        role: 'Customer',
        text: 'Pelayanan bagus, baik dan ramah sekali waktu saya ke jogja. Disana jadi pengalaman sangat berkesan saya dan istri saya, waktu honeymoon di jogja.',
        avatar: 'https://i.pravatar.cc/45?img=3',
        rating: 5,
    },
    {
        id: 3,
        name: 'Asep Reza',
        role: 'Customer',
        text: 'Pelayanan bagus, baik dan ramah sekali waktu saya ke jogja. Disana jadi pengalaman sangat berkesan saya dan istri saya, waktu honeymoon di jogja.',
        avatar: 'https://i.pravatar.cc/45?img=3',
        rating: 5,
    },
];

const StarRating = ({ count }) => {
    return (
        <div className="text-warning">
            {Array(count)
                .fill(0)
                .map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => (
    <div className="card shadow-sm p-3 mb-4" style={{ borderRadius: '20px', backgroundColor: '#e7ecf2', minHeight: '300px' }}>
        <div style={{
            position: 'absolute',
            top: '4px',
            left: '20px',
            backgroundColor: '#234e87',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            color: '#fff',
            fontSize: '28px',
            lineHeight: '44px',
            textAlign: 'center',
            fontWeight: 'bold',
            userSelect: 'none'
        }}>
            “
        </div>
        <br></br>
        <p className="mt-4" style={{ minHeight: '130px', overflowY: 'auto' }}>{testimonial.text}</p>
        <StarRating count={testimonial.rating} />
        <div className="d-flex align-items-center mt-3">
            <img src={testimonial.avatar} alt={testimonial.name} className="rounded-circle me-3" width={45} height={45} style={{ border: '2px solid #f79633', objectFit: 'cover' }} />
            <div>
                <strong>{testimonial.name}</strong><br />
                <small className="text-muted">{testimonial.role}</small>
            </div>
        </div>
    </div>
);

const TestimonialSection = () => (
    <>

        <section
            className="py-5 text-center"
            style={{
                background: 'linear-gradient(180deg,rgb(227, 227, 227) 0%, #fbc978 100%)',
                color: '#333',
                position: 'relative',
                overflow: 'visible',
            }}
        >
            <small className="text-uppercase" style={{ letterSpacing: '2px', color: '#444' }}>KITA LIBURAN</small>
            <h2 className="my-3 fw-bold">Apa Kata Mereka Tentang Kitaliburan Tour Lampung?</h2>
            <p className="mx-auto mb-5" style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.5' }}>
                Ratusan pelanggan puas telah merasakan serunya liburan bersama Kitaliburan Tour. Simak cerita dan pengalaman mereka selama menjelajahi Jogja dan destinasi lainnya
                bersama layanan terbaik kami. Kepuasaanmu adalah prioritas kami!
            </p>

            <div
                className="container"
                style={{
                    overflowX: 'auto',
                    paddingBottom: '1rem',
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
                            style={{ flex: '0 0 300px' /* fixed width for cards */, minWidth: '300px' }}
                        >
                            <TestimonialCard testimonial={t} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
        <footer
            className="footer mt-5 p-4"
            style={{
                backgroundColor: '#f9f9f9',
                borderTop: '6px solid #d07d00',
                fontSize: '0.9rem',
                color: '#555',
            }}
        >
            <div
                className="container"
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                }}
            >
                <div style={{ flex: '1 1 320px' }}>
                    <h6 style={{ color: '#d07d00', fontWeight: '700', marginBottom: '0.8rem' }}>Office</h6>
                    <p style={{ margin: '4px 0' }}>Jl. Ratu Dibalau Gg.Cempaka 7</p>
                    <p style={{ margin: '4px 0' }}>Way Kandis, Tj Senang, Bandar Lampung</p>
                    <p style={{ margin: '4px 0' }}>
                        Whatsapp: <a href="tel:081264648833" style={{ color: '#d07d00' }}>0812 6464 8833</a> |{' '}
                        <a href="tel:081264643388" style={{ color: '#d07d00' }}>0812 6464 3388</a>
                    </p>
                    <p style={{ margin: '4px 0' }}>
                        Email: <a href="mailto:KitaLiburan.id@gmail.com" style={{ color: '#d07d00' }}>KitaLiburan.id@gmail.com</a>
                    </p>
                </div>

                <div style={{ flex: '1 1 320px', textAlign: 'right' }}>
                    <h6 style={{ color: '#d07d00', fontWeight: '700', marginBottom: '1rem' }}>
                        Follow Us
                    </h6>
                    <div style={{ display: 'flex', gap: 15, justifyContent: 'flex-end' }}>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_(2019).svg"
                                alt="Facebook"
                                width={32}
                                height={32}
                                style={{ filter: 'brightness(0.6)' }}
                                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1)')}
                                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.6)')}
                            />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                                alt="Instagram"
                                width={32}
                                height={32}
                                style={{ filter: 'brightness(0.6)' }}
                                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1)')}
                                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.6)')}
                            />
                        </a>



                        <a href="https://wa.me/081264648833" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                                width={32}
                                height={32}
                                style={{ filter: 'brightness(0.6)' }}
                                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1)')}
                                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.6)')}
                            />
                        </a>

                        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
                                alt="TikTok"
                                width={32}
                                height={32}
                                style={{ filter: 'brightness(0.6)' }}
                                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1)')}
                                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.6)')}
                            />
                        </a>

                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: 30,
                    textAlign: 'center',
                    color: '#999',
                    fontSize: '0.8rem',
                }}
            >
                &copy; 2023 Kitaliburan.id. All rights reserved.
            </div>
        </footer>
    </>
);

export default TestimonialSection;

