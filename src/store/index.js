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
        title: 'Partners',
        anchor: '#partners',
        isDropdown: false
      }
    ],
    program: [
      {
        time: '10:45 - 11:00',
        title: 'Check-in',
        description: ''
      },
      {
        time: '11:00 - 11:15',
        title: 'Greetings',
        description: ''
      },
      {
        time: '11:15 - 12:00',
        title: 'Presentations',
        description: ''
      },
      {
        time: '12:00 - 12:30',
        title: 'Open Discussion',
        description: ''
      },
      // {
      //   time: '21:00',
      //   title: 'Party ',
      //   description: ''
      // }
    ],
    social: [
      {
        icon: 'linkedin-in',
        link: 'https://www.linkedin.com/company/north-it-group/?viewAsMember=true'
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/northitgroup/'
      },
      {
        icon: 'facebook-f',
        link: 'https://www.facebook.com/northitgroup/?eid=ARAjfkI1QSCampI1c4kgtmJGNqTr9zQzf74MTax3IDnzbN6YD8IyzU975EM-pF6MX7RmfQm3KUkBNgIz'
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
