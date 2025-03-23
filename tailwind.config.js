/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'red',
          'custom-yellow': 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)',
  
      }
    },
  },
  plugins: [],
};
