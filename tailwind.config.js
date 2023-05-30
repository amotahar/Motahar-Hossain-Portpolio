/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors:{
        // for light mode 
        'background-color':'#e8e5dc',
        'yellow-color':"#FFE600",
        'cyan-color':"#0BE083",
        'green-color':'#59C378',

        'light-text-color':"#343030",
        'light-body-color':'#E6E7EE',

        // for dark mode 
        'dark-bg-color':'#212529',
        "silver-color":"#bcbcbc",  //  paragraph-text-color 
        "neone-color": "#ff0180",   // text -color 
        "pantone-color":" #2b96cc" ,
        "gray-color":"#bababa",  // para text color 
      }, 
      boxShadow: {

        // shadow for dark mode 
        'dark-shadow': '-4px -4px 4px rgb(255 255 255 / 8%), 4px 4px 4px rgb(0 0 0 / 56%), 0 0 0 rgb(255 255 255 / 8%) inset, 0 0 0 rgb(0 0 0 / 56%) inset',
        'dark-outside-shadow':'-4px -4px 4px rgb(255 255 255 / 8%), 4px 4px 4px rgb(0 0 0 / 56%), 0 0 0 rgb(255 255 255 / 8%) inset, 0 0 0 rgb(0 0 0 / 56%) inset',        
        'inset-dark-shadow':"2px 2px 2px rgb(255 255 255 / 8%), -2px -2px 2px rgb(0 0 0 / 56%), 2px 2px 2px rgb(255 255 255 / 8%) inset, -2px -2px 2px rgb(0 0 0 / 56%) inset",

        // shadow for light mode 
        'light-shadow':'6px 6px 12px #b8b9be,-6px -6px 12px #fff',
        'inset-shadow':'inset -5px -5px 4px 0 hsl(0deg 0% 100% / 64%), inset 1px 1px 3px 0 #c4ceda, -14px -14px 19px 0 #fff, 5px 5px 7px 0 #c4ceda, -1px -1px 10px 0 #fff, 1px 1px 3px 0 #c4ceda',
  
      }, 
      backgroundImage:{
        'hero-image': "url('./src/assets/img/home_bg.jpg')",
      }
    },
  },
  plugins: [],
}
