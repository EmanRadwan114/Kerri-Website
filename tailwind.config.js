/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
    },
    keyframes:{
      bounce :{
        '0%, 100%':{
            transform: 'translateY(-50%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%':{
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
    },
    spin :{
      'from' :{
        transform: 'rotate(0deg)',
      },
      'to' :{
        transform: 'rotate(360deg)',
      },
    }
  },
    extend: {
      colors:{
        primary: '#e65f78',
        primaryDark: '#d8576f',
        
    },
    fontFamily:{
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Nunito': ['Nunito', 'sans-serif'],
    },
    keyframes:{
      typing : {
          '0%':{
              content: "'Kerri Deo.'",
              width: '0%',
          },
      
          '10%': {
              content: "'Kerri Deo.'",
              width: '100%',    
          },

           '20%': {
            content: "'Kerri Deo.'",
              width: '0',
           },

           '35%': {
            content: "'Graphic Designer.'",
              width: '0',
           },
       
           '50%': {
               content: "'Graphic Designer.'",
               width: '100%',
           },

           '60%': {
            content: "'Graphic Designer.'",
            width: '0',
        },

           '70%': {
            content: "'Photographer.'",
            width: '0',
        },
       
           '90%':{
               content: "'Photographer.'",
               width: '100%',
           },
      
           '100%':{
              content: "'Photographer.'",
              width: '0',
          },
            
      },

      borderColor: {
        '0%, 100%':{
          borderColor: '#fff',
        },
        '50%':{
          borderColor: 'transparent',
        },
      },
    },
    },
  },
  plugins: [],
}

