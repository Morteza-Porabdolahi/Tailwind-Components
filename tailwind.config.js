module.exports = {
  content: [
    "*.html",
    "*/assets/**/*.{html,js}"
  ],
  theme: {
    extend: { 
      keyframes : {
        opacity : {
          '0%' : { opacity : 0 , transform : 'scale(.9)'},
          '100%' : { opacity : 1 ,transform : 'scale(1)'},
        },
        absolute : {
          '0%' : { left : '-10rem' },
          '100%' : { left : '0' },
        },
      },  
      animation : {
        'opacityAnim' : 'opacity .4s ease-in-out',
        'absoluteAnim' : 'absolute .4s linear',
      },
      colors: {
        dark: {
          100: '#1b1312',
        },
        blue : {
          100 : '#5851DB'
        },
        purple : {
          100 : '#E1306C'
        },
        yellow : {
          100 : ' #FCAF45'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
