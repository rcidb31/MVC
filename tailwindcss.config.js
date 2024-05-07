/** @type {import('tailwindcss').Config} */

export default  {

    content: ['./views/**/*.{pug,js,html}'],

    theme: {
        extend: {},
    },

    plugins: [
        "tailwindcss ,autoprefixer",
        "tailwindcss ,forms"
    ],

}