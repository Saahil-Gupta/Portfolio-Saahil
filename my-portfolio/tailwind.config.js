/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'earth-dark':    '#222831',
                'earth-secondary':'#393E46',
                'earth-accent':  '#948979',
                'earth-light':   '#DFD0B8',
            }
        }
    },
    plugins: [
    // any official or community plugins you choose later
    ],
};
