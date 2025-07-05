import React from 'react';
import Template2 from '../../components/template2';

function PulauWayang1D() {
    const tripDetails = [
        { label: 'Durasi Trip', value: '1 Hari' },
        { label: 'Meeting Point', value: 'Dermaga Ketapang Pesawaran, Lampung' },
        { label: 'Min. Peserta', value: '1 Orang bisa gabung' },
        { label: 'Jadwal Trip', value: 'Berangkat setiap hari Sabtu, Minggu, dan liburan' },
        { label: 'Destinasi', value: 'Pulau Kelagian, Pulau Pahawang, Spot snorkeling Pahawang' },
        {
            label: 'Fasilitas',
            value: 'Kapal wisata, Makan 1x, Air mineral, Alat snorkeling, Life jacket, Tiket masuk, Pemandu wisata, Dokumentasi underwater & upwater'
        },
        { label: 'Bonus', value: 'Booking 10 orang GRATIS 1 orang' }
    ];

    return (
        <Template2
            title="Open Trip Halopahawang"
            description={`HaloPahawang menyediakan paket Open Trip 1 Hari dan 2 Hari yang sangat cocok untuk kamu yang ingin menikmati liburan seru dengan biaya terjangkau. 
Paket trip gabungan atau open trip HaloPahawang dapat juga dijadikan pilihan tepat untuk kamu yang ingin melepas kepenatan tapi dengan waktu libur yang sangat terbatas.
Keseruan lain di paket open trip ini kamu akan mendapatkan teman baru sekaligus suasana baru yang akan memberikan kenangan seru yang tidak terlupakan. 
Jadwal open trip Pulau Pahawang diadakan setiap hari sabtu dan minggu dan berlaku untuk umum.
Kamu mau liburan tapi cuma sendirian??? Yuk klik BOOKING sekarang biar gak ketinggalan !!!`}
            tripInfo={{ title: 'Pulau PAHAWANG 1 Hari', details: tripDetails }}
            price="150.000"
            onBooking={() => alert('Booking diklik')}
        />
    );
}

export default PulauWayang1D;
