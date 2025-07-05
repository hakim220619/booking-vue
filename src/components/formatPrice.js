// components/formatPrice.js
import React from 'react';

const formatPrice = (price) => {
    if (!price || !price.includes('.')) return price;

    const [main, decimal] = price.split('.');
    return (
        <>
            {main}
            <small style={{ fontSize: '0.6em' }}>
                .{decimal}
            </small>
        </>
    );
};

export default formatPrice;
