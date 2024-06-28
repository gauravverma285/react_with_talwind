/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "banner-bg": "url('/public/banner.png')",
        // "banner-about-bg": "url('/public/about/banner_about.png')",
        // "mob-banner-bg": "url('/public/mobBanner.png')",
        // "download-bg": "url('/public/download.png')",
        // "mob-download-bg": "url('/public/mobDownload.png')",
        // "footer-bg": "url('/public/footerbg.png')",
      },
      colors:{
        primary:'#33598F',
        landingprimary: "#F26432",
        secondary: "#0F0F0F",
        ternary: "#00BAF2",
        white : "#F4F4F4",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #2639ED 0%, #3F79FE 100%)',
      },
      fontFamily: {
        inria: ["Inria Sans", "sans-serif"]
        // proxima_nova : ["Proxima Nova", ""]
      }
    },
  },
  plugins: [],
}