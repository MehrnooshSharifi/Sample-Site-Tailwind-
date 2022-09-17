/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: ["./Public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          "sans" : ["vazir"]
        }
      },
    },
    plugins: [require('@tailwindcss/forms'),],
  }