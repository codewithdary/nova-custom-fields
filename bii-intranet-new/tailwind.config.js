/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "./node_modules/tw-elements/dist/js/**/*.js",
        './vendor/ralphjsmit/laravel-filament-pulse/resources/**/*.blade.php',
        './vendor/laravel/pulse/resources/**/*.blade.php',
        './vendor/ralphjsmit/laravel-filament-media-library/resources/**/*.blade.php'
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: 'Poppins',
                cerebri: 'Cerebri',
                extraBold: ['Cerebri ExtraBold', 'sans-serif'],
                semiBold: ['Cerebri SemiBold', 'sans-serif'],
                bold: ['Cerebri Sans Bold', 'sans-serif'],
                boldItalic: ['Cerebri Sans Bold Italic', 'sans-serif'],
                ExtraBold: ['Cerebri Sans ExtraBold', 'sans-serif'],
                ExtraBoldItalic: ['Cerebri Sans ExtraBold Italic', 'sans-serif'],
                italic: ['Cerebri Sans Italic', 'sans-serif'],
                sans: ['Cerebri Sans Book', 'sans-serif'],
                normall: ['Cerebri Sans Book', 'sans-serif'],
            },
            colors: {
                "primary": "#a9a9a9",
                "dark": "#152e4d",
                "nav": "#6e84a3",
                "nav-hover": "#95aac9",
                "paragraph": "#919AA7",

                "pretitle": "#95aac9",
                "bg-color": "#EDF2F9",
                "border-color": "#E3EBF6",

                "warning": "#ff0033",
                "light" : "#f1f5f9",
                "lightest": "#f9fbfd",

                "bg-primary": "#FF5733",
                "primary-header": "#36454F",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("tw-elements/dist/plugin.cjs")
    ],
});
