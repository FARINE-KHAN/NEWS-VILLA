/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  }, screens: {
    'sm': '360px',
    // => @media (min-width: 576px) { ... }
  
    'md': '480px',
    // => @media (min-width: 768px) { ... }
  
    'lg': '720px',
    // => @media (min-width: 992px) { ... }
  
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },
  plugins: [],
 
}
