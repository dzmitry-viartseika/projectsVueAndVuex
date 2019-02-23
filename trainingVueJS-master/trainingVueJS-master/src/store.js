import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      products: [
  {
    id: '1',
    title: 'Apple Watch Nike+ Series 4 42mm Nike Sport Band',
    vendor: 'Apple',
    color: 'Red',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 1785,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '2',
    title: 'Apple Watch Series 4 42mm Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 1285,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '3',
    title: 'Apple Watch Series 3 38mm Nike Sport Band',
    vendor: 'Apple',
    color: 'Pink',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 1185,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '4',
    title: 'Apple Watch Nike+ Series 3 42mm Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 785,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '5',
    title: 'Apple Watch Series 3 38mm Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 885,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '6',
    title: 'Apple Watch Series 3 42mm Pink Sand Sport Loop',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 485,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '7',
    title: 'Apple Watch Nike+ Series 2 38mm Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 1005,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '8',
    title: 'Apple Watch Nike+ Series 1 38mm Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 350,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '9',
    title: 'Apple Watch Nike+ Series 2 38mm Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 888,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '10',
    title: 'Apple Watch Nike+ Series 4 38mm Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 1380,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '11',
    title: 'Apple Watch Nike+ Series 3 38mm Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 555,
    promo: false,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '12',
    title: 'Apple Watch Nike+ Series 4 38mm Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 999,
    promo: false,
    imageSrc: 'https://es.verizonwireless.com/sdss7/dvzw/is/image/VerizonWireless/Watch38S3-StainlessSteelSilver-SportWhite_a_MQJV2LL-A?$png8alpha256$&hei=410'
  },
  {
    id: '13',
    title: 'Apple Watch Nike+ Series 2 42mm Black Nike Sport 22',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 333,
    promo: true,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '14',
    title: 'Apple Watch Nike+ Series 3 Black Nike Sport Mixed',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 444,
    promo: true,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
  },
  {
    id: '15',
    title: 'Apple Watch Nike+ Series 4 Black Nike Sport Band',
    vendor: 'Apple',
    color: 'black',
    material: 'metal',
    description: 'nter the arena with this slim, lightweight, portable gaming PC, that easily plays your games. Powered by 7th Gen Intel® Core™ processors and processors up to NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 560 discrete graphics, and featuring premium audio and optional dual drive storage for added speed, this i7 gaming laptop is ready for action. A red backlit keyboard lets you play day or night, while its optimized thermal engineering keeps it cool for as long as you want to play – which will probably be a while.',
    price: 785,
    promo: true,
    imageSrc: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_Watch_Series_4_GPS_Plus_Cellular_44mm_Aluminum_Case_with_Sport_Band_MTV02LLA?$png8alpha256$&hei=410'
    }
]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    products(state) {
      return state.products
    },
    promoProducts(state) {
      return state.products.filter( product => {
        return product.promo
      })
    },
    productById(state) {
      return productId => {
        return state.products.find(product => {
          return product.id === productId
        })
      }
    }
  }

})
