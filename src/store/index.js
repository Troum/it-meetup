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
      // {
      //   title: 'Registration',
      //   anchor: '',
      //   isDropdown: false,
      //   link: 'https://us02web.zoom.us/webinar/register/WN_0cBZgQeTTOO0MFZ7k8rR_A'
      // },
      {
        title: 'Partners',
        anchor: '#partners',
        isDropdown: false
      }
    ],
    program: [
      {
        time: '13:45 – 14:00',
        title: 'Check-in',
        description: ''
      },
      {
        time: '14:00 – 14:05',
        title: 'Greetings',
        description: ''
      },
      {
        time: '14:05 – 14:30',
        title: 'Expert speeches',
        description: ''
      },
      {
        time: '14:30 – 14:40',
        title: 'Q&A',
        description: ''
      },
      {
        time: '14:40 – 15:20',
        title: 'Belarusian e-Health startups',
        description: ''
      },
      {
        time: '15:20 – 15:50',
        title: 'Open Discussion',
        description: ''
      }
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
