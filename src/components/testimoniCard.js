import React from 'react';
import { FaMapMarkedAlt, FaTags, FaUsers, FaMountain, FaChild, FaWhatsapp } from 'react-icons/fa';

const iconMap = {
    1: <FaMapMarkedAlt size={30} className="text-primary mb-2" />,
    2: <FaTags size={30} className="text-success mb-2" />,
    3: <FaUsers size={30} className="text-warning mb-2" />,
    4: <FaMountain size={30} className="text-danger mb-2" />,
    5: <FaChild size={30} className="text-info mb-2" />,
    6: <FaWhatsapp size={30} className="text-success mb-2" />,
};

const TestimonialCard = ({ testimonial }) => (
    <div
        className="card shadow-sm h-100 text-center animate-fade-in testimonial-hover"
        style={{
            borderRadius: '1rem',
            padding: '1rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
    >
        <div className="d-flex justify-content-center mb-2 icon-wrapper">
            {iconMap[testimonial.id]}
        </div>
        <h5 className="card-title fw-bold mt-2">{testimonial.title}</h5>
        <p
            className="card-text text-muted"
            style={{ fontSize: '0.95rem', lineHeight: '1.5' }}
        >
            {testimonial.description}
        </p>
    </div>
);

export default TestimonialCard;
