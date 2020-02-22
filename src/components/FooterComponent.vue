<template lang="pug">
    b-row.it-meetup_footer
        b-col.h-100( cols="12" )
            b-row.m-0.p-0.d-flex.justify-content-between
                b-col.d-flex.justify-content-center.align-items-center.d-xl-block.text-center(cols="3" xl="3" )
                    img.img-fluid( src="@/assets/meetup-logo.png" alt="IT Meet Up Logo" )
                b-col( cols="9" xl="3")
                    b-navbar-nav.d-lg-inline-block
                        b-nav-item.it-meetup_footer_nav_item.white.mr-lg-2( v-for="item in $store.getters.menu"
                            :key="item.anchor"
                            v-scroll-to="`${item.anchor}`"
                            :class="item.isButton || item.isDropdown ? 'd-none' : 'd-inline-block d-xl-block' " ) {{ item.title }}
                    b-row.m-0.p-0.d-xl-none
                        b-col.m-0.p-0( cols="12" )
                            b-navbar-nav.d-inline
                                b-nav-item.it-meetup_social_icons( v-for="item in $store.getters.socials" :key="item.icon" :href="item.link")
                                    font-awesome-icon( :icon="['fab', item.icon]" )
                                b-nav-item.it-meetup_footer_mail( href="mailto:office@dbwc-minsk.org") office@dbwc-minsk.org

                b-col.d-none.d-xl-block( cols="3" )
                    p.white.it-meetup_footer_text Questions? Write to us
                    a.it-meetup_footer_mail( href="mailto:office@dbwc-minsk.org" ) office@dbwc-minsk.org
                b-col.d-none.d-xl-block( cols="3" )
                    p.white.it-meetup_footer_text Follow us
                    b-navbar-nav.d-inline
                        b-nav-item.it-meetup_social_icons( v-for="item in $store.getters.socials" :key="item.icon" :href="item.link")
                            font-awesome-icon( :icon="['fab', item.icon]" )
                b-col.mx-auto.mt-2.pl-0.pt-3( cols="10" style="border-top: 1px solid rgba(213, 217, 239, 0.36);" )
                    small.white Made by&nbsp;
                        a( href="https://northitgroup.com" ) North IT Group



</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

</style>
