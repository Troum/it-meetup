<template lang="pug">
    b-navbar.it-meetup_navbar( toggleable="xl" )
        button.navbar-toggler.hamburger.hamburger--collapse( @click="toggleNav" ref="toggle"
            style="z-index: 999" type="button" )
            span.hamburger-box
                span.hamburger-inner
        b-collapse#nav-collapse( ref="navbarCollapse" is-nav )
            b-navbar-nav.it-meetup_navbar_menu.mx-auto
                b-nav-item.text-center.white( v-if="!$store.getters.main"
                    @click="goToPage('home')" ) Main
                template( v-for="item in $store.getters.menu"  )
                    b-nav-item.white( v-if="$store.getters.main" @click="toggleNav" :key="item.title"
                        v-scroll-to="`${item.anchor}`") {{ item.title }}
                b-nav-item.text-center.white( @click="goToPage('startups')" ) Startups
                b-nav-item.text-center.white( @click="goToPage('delegations')" ) Delegation
                b-nav-item.it-meetup_button.bold.dark
                    countdown-component( date="june 15, 2020" )
</template>

<script>
    import { isMobile } from "mobile-device-detect"
    export default {
        data() {
          return {
              isMobile: isMobile
          }
        },
        methods: {
            toggleNav() {
                this.$refs.toggle.classList.toggle('is-active');
                document.querySelector('#nav-collapse').classList.toggle('show');
                if (document.querySelector('#nav-collapse').classList.contains('show')) {
                    document.querySelector('#nav-collapse').style = 'display: block';
                } else {
                    document.querySelector('#nav-collapse').style = 'display: none';
                }
            },
            goToPage(page) {
                this.toggleNav();
                this.$router.push({name: page})
            }
        }
    }
</script>

<style scoped>

</style>
