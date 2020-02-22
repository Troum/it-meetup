import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    main: true,
    disable: false,
    menu: [
      {
        title: 'About',
        anchor: '#about',
        isDropdown: false
      },
      {
        title: 'Program',
        anchor: '#program',
        isDropdown: false
      },
      {
        title: 'Registration',
        anchor: '#registration',
        isDropdown: false
      },
      {
        title: 'Sponsors',
        anchor: '#partners',
        isDropdown: false
      }
    ],
    program: [
      {
        time: '09:00 - 09:30',
        title: 'Registration',
        description: ''
      },
      {
        time: '09:30 - 13:00',
        title: 'Panel discussions',
        description: ''
      },
      {
        time: '13:00 - 14:00',
        title: 'Lunch',
        description: ''
      },
      {
        time: '14:00 - 19:00',
        title: 'Pitches of Belarussian Start-ups',
        description: ''
      },
      {
        time: '21:00',
        title: 'Party ',
        description: ''
      }
    ],
    social: [
      {
        icon: 'linkedin-in',
        link: ''
      },
      {
        icon: 'instagram',
        link: ''
      },
      {
        icon: 'facebook-f',
        link: ''
      }
    ]

  },
  mutations: {
    main(state, data) {
      state.main = data;
    },
    disable(state, data) {
      state.disable = data;
    }
  },
  getters: {
    menu(state) {
      return state.menu;
    },
    program(state) {
      return state.program;
    },
    socials(state) {
      return state.social;
    },
    main(state) {
      return state.main;
    },
    disable(state) {
      return state.disable;
    }
   },
  actions: {
  },
  modules: {
  }
})
