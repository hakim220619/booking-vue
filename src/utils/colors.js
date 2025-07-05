export const getGradient = (aplikasi) => {
    if (!aplikasi?.first_color || !aplikasi?.second_color) return '#ccc';
    return `linear-gradient(135deg, ${aplikasi.second_color}, ${aplikasi.first_color})`;
};
