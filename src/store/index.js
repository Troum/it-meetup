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
        anchor: '',
        isDropdown: false,
        link: 'https://us02web.zoom.us/webinar/register/WN_-XAI9agxQRue2kjPOaO_Jw'
      },
      {
        title: 'Partners',
        anchor: '#partners',
        isDropdown: false
      }
    ],
    program: [
      {
        time: '12:45 – 13:00',
        title: 'Check-in',
        description: ''
      },
      {
        time: '13:00 – 13:10',
        title: 'Greetings',
        description: ''
      },
      {
        time: '13:10 – 13:20',
        title: 'The ICT Sector in Belarus:  \n' +
            'Opportunities and\n' +
            'Challenges',
        description: ''
      },
      {
        time: '13:20 – 14:00',
        title: 'German and European e-health market and\n' +
            'presentations of Belarusian startups. Part 1.',
        description: ''
      },
      {
        time: '14:00 - 14:10',
        title: 'Q&A',
        description: ''
      },
      {
        time: '14:10 – 15:00',
        title: 'German and European e-health market and\n' +
            'presentations of Belarusian startups. Part 2.',
        description: ''
      },
      {
        time: '15:00 – 15:15',
        title: 'Q&A',
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
