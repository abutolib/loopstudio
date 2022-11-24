
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors:{
        body:"#F2F2F2"
      },
    
      backgroundImage: {
        'hero-bg': "url('../images/header-bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'item1':'url("../images/earth.png")',
        'item2':'url("../images/night.png")',
        'item3':'url("../images/soccer.png")',
        'item4':'url("../images/car.png")',
        'item5':'url("../images/vr.png")',
        'item6':'url("../images/pocket.png")',
        'item7':'url("../images/kosmos.jpg")',
        'item8':'url("../images/fisheye.jpg")',
        'item11':'url("../images/item11.jpg")',
        'item12':'url("../images/item12.jpg")',
        'item13':'url("../images/item13.jpg")',
        'item14':'url("../images/item14.jpg")',
        'item15':'url("../images/item15.jpg")',
        'item16':'url("../images/item16.jpg")',
        'item17':'url("../images/item17.jpg")',
        'item18':'url("../images/item18.jpg")',
        
      },
      fontFamily: {
        
        'body': ['"Josefin Sans"'],
      },
      spacing:{
        '540':'33rem',
        '650': '42rem',
        '450': '450px',
        '350': '333px',
        
      },
      container:{
        'auto':'70rem'
      },
      padding: {
        '354':'354px',
        '110':'110px'
      },
      fontSize: {
        32:['32px', '32px']
      },
      gap: {
        '30': '30px',
      },
      screens: {
        'tel': '400px'
      }
    }
  },
  plugins: [],
}
