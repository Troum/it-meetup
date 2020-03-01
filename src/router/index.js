import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/start-ups',
    name: 'startups',
    component: () => import('../views/Startups.vue')
  },
  {
    path: '/delegations',
    name: 'delegations',
    component: () => import('../views/Delegations.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: () => import('../views/Terms.vue')
  },
  {
    path: '/program',
    name: 'program',
    component: () => import('../views/Program.vue')
  },
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/NotFoundView.vue")
  },
];

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
});

router.beforeEach((to, from, next) => {
  if(to.name !== 'home') {
    store.commit('main', false);
  } else {
    store.commit('main', true);
  }
  return next();

});
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  if (document.querySelector('#nav-collapse').classList.contains('show')) {
    document.querySelector('#nav-collapse').style = 'display: block';
  } else {
    document.querySelector('#nav-collapse').style = 'display: none';
  }
});

export default router
