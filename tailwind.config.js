module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors:{
        blue:{
          500:"#443eff",
          600:"#000090",
          700:"#1B1D6A",
          800:"#001090"
        },
        grey:{
          400:"#616161"
        },
        yellow:{
          500:"#F4AF2F"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
