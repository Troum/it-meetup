<template lang="pug">
    div.m-0.p-0
        b-row.m-0.p-0.min-vh-100.position-relative
            b-col.it-meetup_greeting_wrapper( cols="12"  )
            b-col.it-meetup_greeting_background.p-0.m-0( cols="12"  )
            b-col.it-meetup_greeting( cols="12"  )
                h1.it-meetup_title_greeting( style="letter-spacing: 0.085em;" ) Germany meets
                h2
                    span.it-meetup_stroke_greeting.text-uppercase( style="letter-spacing: 0.085em;" ) the
                    br
                    span.it-meetup_filled_greeting.text-uppercase( style="letter-spacing: 0.085em;" ) Silicon Valley
                    br
                    span.it-meetup_stroke_greeting.text-uppercase of
                    br
                    span.it-meetup_filled_greeting.text-uppercase Eastern Europe
                div.it-meetup_location_container
                    font-awesome-icon.it-meetup_location_icon( :icon="['fas', 'map-marker-alt']" )
                    span.it-meetup_location_address &nbsp;APRIL 17, HOTEL MARRIOTT, MINSK
        b-row#about.m-0.p-0.min-vh-100.position-relative.it-meetup_about_container
            b-col.m-0.my-3.it-meetup_about_title_container( cols="12" )
                h3.it-meetup_about_title.text-lg-center.text-xl-left The conference
            b-col.m-0.p-0.text-lg-center.text-xl-left( cols="12" )
                img.img-fluid( src="@/assets/meeting.jpg" alt="IT MEET UP")
            b-col.m-0( cols="12" )
                p.it-meetup_about_description.p-3
                    | The conference is organized by the OAOEV, Representative Office of German Economy in Belarus and DBWC in cooperation with local Belarusian companies and organizations. At the lighthouse event in 2020 we want to link German IT and technology companies and German venture capitalists with young, innovative IT companies and start-ups from Belarus in order to provide interested entrepreneurs from both countries with new business opportunities and strengthen bilateral relations.
                    br
                    | The conference is carried out by means of relaxed lectures, pitches and break-time discussions. Our aim will be achieved if active economic relations between the participants are established.
                b-row.m-0.my-3.p-0
                    b-col( cols="4" )
                        img.img-fluid( src="@/assets/dbwc.png" alt="DBWC Logo" )
                    b-col( cols="4" )
                        img.img-fluid( src="@/assets/oaev.png" alt="OAEV Logo" )
                    b-col( cols="4" )
                        img.img-fluid( src="@/assets/ahk.jpg" alt="OAEV Logo" )
        b-row#program.m-0.position-relative.it-meetup_program_container
            b-col.m-0.p-0.it-meetup_program_blur_wrapper( cols="12" )
            b-col.m-0( cols="12" )
                b-row.m-0
                    b-col.m-0.text-center.position-relative( cols="12" )
                        h4.it-meetup_program_title Event Program
                        div.vertical_border.my-5( ref="vertical" )
                        div( ref="schedule" style="z-index: 2; margin-top: 6%" )
                            b-row.d-flex.justify-content-around.align-items-center.mx-auto.my-1.w-100( v-for="(item, i) in $store.getters.program" :key="item.time" )
                                b-col.d-flex.align-items-center.justify-content-end.it-meetup_schedule_time( cols="5" )
                                    | {{ item.time }}
                                b-col.d-flex.justify-content-center.align-items-center( cols="2" )
                                    span.circle
                                b-col.d-flex.justify-content-start.it-meetup_schedule_title.flex-wrap.flex-column( cols="5")
                                    div.text-left
                                        p.m-0 {{ item.title }}
                                        p.it-meetup_schedule_description.m-0 {{ item.description }}
                    b-col.mt-5.mb-2.pt-3.pb-2.text-center.position-relative( cols="12" )
                        router-link.h6( to="/program" style="color: #A1D9DA; font-weight: 600; letter-spacing: 0.085") Detailed program
        b-row#registration.m-0.p-0.min-vh-100.position-relative.it-meetup_registration_container
            b-col#join.m-0.p-0( cols="12" )
                b-row.m-0.p-0
                    b-col.m-0.p-0.text-center.position-relative( cols="12" )
                        h4.it-meetup_block_title Registration
                        b-row.d-flex.justify-content-around.align-items-center.mx-auto.w-90.my-5
                            b-col( cols="12")
                                b-card.participant.mb-2.border-0.shadow( style="min-height: 5rem;"
                                    img-src="./icons/participant.png"
                                    img-alt="IT Meet Up Participant"
                                    img-top )
                                    b-collapse#collapse-1.mt-2( :visible="true" )
                                        b-card.border-0
                                            participant-form-component
                                    b-button.it-meetup_button.collapse_button( v-b-toggle.collapse-1="" variant="primary" )
                                        span.d-flex.justify-content-center.align-items-center.when-opened Hide
                                            font-awesome-icon.ml-1( :icon="['fas', 'chevron-up']" )
                                        span.d-flex.justify-content-center.align-items-center.when-closed Show
                                            font-awesome-icon.ml-1( :icon="['fas', 'chevron-down']" )
        b-row#partners.m-0.p-0.min-vh-100.position-relative.it-meetup_partners_container
            b-col.m-0.p-0( cols="12" )
                b-row.m-0.p-0
                    b-col.m-0.p-0.text-center.position-relative( cols="12" )
                        b-row.d-flex.justify-content-around.align-items-center.mx-auto.my-5
                            b-col.d-flex.justify-content-center.align-items-center( cols="12" )
                                b-row.m-0.p-0
                                    b-col.my-3.mx-auto.d-flex.justify-content-center.align-items-center( cols="12" xl="9" )
                                        strong.h1( style="font-weight: 600" ) General Partner
                                    b-col.mx-auto.p-2( cols="6" )
                                        div.it-meetup_partner_logo_container
                                            img.img-fluid( @click="goToLink('https://www.kas.de/de/web/belarus')"
                                                src="@/assets/kas.png" alt="KAS" )
                                    b-col.my-3.mx-auto.d-flex.justify-content-center.align-items-center( cols="12" xl="9" )
                                        strong.h1( style="font-weight: 600" ) Partners
                                    b-col.mx-auto.p-2( cols="6" v-for="item in partners.ordinaryPartners" :key="item.log")
                                        div.it-meetup_partner_logo_container
                                            img.img-fluid( @click="goToLink(item.website)" :src="`./images/partners/${item.logo}`" :alt="item.logo" )
                                    b-col.my-3.mx-auto.d-flex.justify-content-center.align-items-center( cols="12" xl="9" )
                                        strong.h1( style="font-weight: 600" ) Media Partners
                                    b-col.mx-auto.p-2( cols="6" v-for="item in partners.mediaPartners" :key="item.logo")
                                        div.it-meetup_partner_logo_container
                                            img.img-fluid( @click="goToLink(item.website)" :src="`./images/partners/${item.logo}`" :alt="item.logo" )
</template>

<script>
    import partners from "../static/partners.json";
    import sponsors from "../static/sponsors.json";
    export default {
        data() {
            return {
                partners: partners.partners,
                sponsors: sponsors.sponsors
            }
        },
        mounted() {
            this.$refs.vertical.style.height = `calc(${this.$refs.schedule.clientHeight}px + 2%)`;
        },
        methods: {
            goToLink(link) {
                window.open(link, '_blank')
            }
        }
    }
</script>
