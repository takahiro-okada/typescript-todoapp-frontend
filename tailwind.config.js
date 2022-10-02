/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bananaslip: ['bananaslip'],
      },
      backgroundColor: {
        button_gradient_left: '#FF512F',
        button_gradient_right: '#F09819',
      },
    },
  },
  plugins: [],
};
