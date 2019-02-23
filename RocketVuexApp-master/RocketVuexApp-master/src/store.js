import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rockets: [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Falcon_Heavy_cropped.jpg/405px-Falcon_Heavy_cropped.jpg",
        "country": "USA",
        "description": "Falcon Heavy is a reusable super heavy-lift launch vehicle designed and manufactured by SpaceX.",
        "name": "Falcon Heavy"
      },
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ENERGIJA.png/150px-ENERGIJA.png",
        "country": "USA",
        "description": "Energia (Russian: Энергия, Energiya, 'Energy') (GRAU 11K25) was a Soviet rocket that was designed by NPO Energia to serve as a heavy-lift partially recoverable launch system for a variety of payloads including the Buran spacecraft.",
        "name": "Energiya"
      },
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Orange_tank_SLS_-_Post-CDR.jpg/405px-Orange_tank_SLS_-_Post-CDR.jpg",
        "country": "USA",
        "description": "The Space Launch System (SLS) is an American Space Shuttle-derived heavy-lift expendable launch vehicle.",
        "name": "SLS Block 1B"
      },
      {
        "image": "https://upload.wikimedia.org/wikipedia/en/9/90/SpaceX_BFR_launch_vehicle.jpg",
        "country": "USA",
        "description": "BFR[2]:2:35 (Big Falcon Rocket[1]) is SpaceX's privately funded next-generation launch vehicle and spacecraft announced by Elon Musk in September 2017.",
        "name": "BFR (Big Fucking Rocket)"
      }
    ],
    showForm: false
  },
  mutations: {
    removeRocket(state,rocket) {
      const index = state.rockets.indexOf(rocket)
      state.rockets.splice(index,1)
  },
    onShowForm(state) {
      state.showForm = !state.showForm
    },
    addRocket(state,rocket) {
      state.rockets.push(rocket)
    }
  },
  actions: {
    removeRocket(context) {
      context.commit('removeRocket')
    },

    },
  getters: {
    showForm(state) {
     return state.showForm
    }
  }
})
