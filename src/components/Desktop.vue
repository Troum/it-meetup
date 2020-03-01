<template lang="pug">
    div.m-0.p-0
        b-row.m-0.p-0.min-vh-100.position-relative
            b-col.it-meetup_greeting_wrapper( cols="12" xl="12" )
            b-col.it-meetup_greeting_background.p-0.m-0( cols="12" xl="12" )
            b-col.it-meetup_greeting( cols="12" xl="12" )
                h1.it-meetup_title_greeting( style="letter-spacing: 0.085em;"
                        data-aos="fade-down"
                        data-aos-offset="50"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="800"
                    ) Germany meets
                h2( data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" )
                    span.it-meetup_stroke_greeting.text-uppercase( style="letter-spacing: 0.085em;" ) the&nbsp;
                    span.it-meetup_filled_greeting.text-uppercase( style="letter-spacing: 0.085em;" ) Silicon Valley&nbsp;
                    span.it-meetup_stroke_greeting.text-uppercase( style="letter-spacing: 0.085em;" ) of&nbsp;
                    span.it-meetup_filled_greeting.text-uppercase( style="letter-spacing: 0.085em;" ) Eastern Europe
                div.it-meetup_location_container(
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1200" )
                    font-awesome-icon.it-meetup_location_icon( :icon="['fas', 'map-marker-alt']" )
                    span.it-meetup_location_address &nbsp;APRIL 17, HOTEL MARRIOTT, MINSK

        b-row#about.m-0.p-0.pt-5.position-relative.it-meetup_about_container
            b-col.m-0.pl-0.pt-5.pr-5.pb-5( cols="12" xl="6"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1200"
                )
                img.img-fluid( src="@/assets/meeting.jpg" alt="IT MEET UP")
            b-col.m-0.it-meetup_about_title_container( cols="12" xl="5"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1200"
            )
                h3.it-meetup_about_title.p-1  The conference
                p.it-meetup_about_description.p-1
                    | The conference is organized by the OAOEV and DBWC in cooperation with local Belarusian companies and organizations. At the lighthouse event in 2020 we want to link German IT and technology companies and German venture capitalists with young, innovative IT companies and start-ups from Belarus in order to provide interested entrepreneurs from both countries with new business opportunities and strengthen bilateral relations.
                    br
                    | The conference is carried out by means of relaxed lectures, pitches and break-time discussions. Our aim will be achieved if active economic relations between the participants are established.
                b-row.mt-1.p-0
                    b-col.d-flex.justify-content-start.align-items.center.p-4( cols="6" )
                        img.img-fluid( src="@/assets/dbwc.png" alt="DBWC Logo" )
                    b-col.d-flex.justify-content-start.align-items.center.p-4( cols="6" )
                        img.img-fluid( src="@/assets/oaev.png" alt="OAEV Logo" )
        b-row#program.m-0.p-0.min-vh-100.position-relative.it-meetup_program_container
            b-col.m-0.p-0.it-meetup_program_blur_wrapper( cols="12" )
            b-col.m-0.p-0( cols="12" )
                b-row.m-0.p-0
                    b-col.m-0.p-0.text-center.position-relative( cols="12" )
                        h4.it-meetup_program_title Event Program
                        div.vertical_border( ref="vertical"
                            data-aos="fade-in"
                            data-aos-offset="50"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="400"
                            )
                        div( ref="schedule" style="z-index: 2; margin-top: 6%" )
                            b-row.d-flex.justify-content-around.align-items-center.mx-auto.w-60.w-xl-80.w-xxl-55.my-5( v-for="(item, i) in $store.getters.program" :key="item.time" )
                                b-col.d-flex.justify-content-end.align-items-center.align-self-center.it-meetup_schedule_time( cols="4"
                                        data-aos="fade-left"
                                        data-aos-offset="50"
                                        data-aos-easing="ease-out-cubic"
                                        :data-aos-duration="i !== 0 ? 600 * i : 500"
                                    )
                                    | {{ item.time }}
                                b-col.d-flex.justify-content-center.align-items-center( cols="1"
                                        data-aos="fade-in"
                                        data-aos-offset="50"
                                        data-aos-easing="ease-out-cubic"
                                        :data-aos-duration="i !== 0 ? 700 * i : 600"
                                    )
                                    span.circle
                                b-col.d-flex.justify-content-start.it-meetup_schedule_title.flex-wrap.flex-column( cols="4"
                                        data-aos="fade-right"
                                        data-aos-offset="50"
                                        data-aos-easing="ease-out-cubic"
                                        :data-aos-duration="i !== 0 ? 800 * i : 700"
                                    )
                                    div.text-left
                                        p.m-0 {{ item.title }}
                                        p.it-meetup_schedule_description.m-0 {{ item.description }}
                    b-col.mt-5.pt-3.text-center.position-relative( cols="12" )
                        router-link.h4( to="/program" style="color: #A1D9DA; font-weight: 600; letter-spacing: 0.085") Detailed program
        b-row#registration.m-0.p-0.min-vh-100.position-relative.it-meetup_registration_container
            b-col#join.m-0.p-0( cols="12" )
                b-row.m-0.p-0
                    b-col.m-0.p-0.text-center.position-relative( cols="12" )
                        h4.it-meetup_block_title Registration
                        b-row.d-flex.justify-content-around.align-items-center.mx-auto.w-70.w-xl-60.my-5
                            b-col( cols="12" xl="7" )
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
                        b-row.mx-auto.w-90.my-5
                            b-col.mx-auto.p-0( cols="12" xl="5" )
                                b-row.m-0.p-0
                                    b-col.my-3.mx-auto.p-0( cols="12" xl="9" )
                                        strong.h1.mb-0( style="font-weight: 600" ) Sponsors
                                    b-col.p-3( cols="4" v-for="(item, i) in 6" :key="i"
                                            data-aos="fade-up"
                                            data-aos-offset="50"
                                            data-aos-easing="ease-out-cubic"
                                            :data-aos-duration="i !== 0 ? 1000 * i/2 : 1500"
                                        )
                                        div.it-meetup_partner_logo_container
                                            img.img-fluid( :src="item.logo ? `./images/sponsors/${item.logo}` : './images/sponsors/placeholder.png'"
                                                :alt="item.logo" )
                                    b-col.my-3.mx-auto.d-flex.justify-content-center.align-items-center.p-0( cols="12" xl="9" )
                                        strong.h1.mb-0( style="font-weight: 600" ) Media Partners
                                    b-col.p-3( cols="4" v-for="(item, i) in partners.mediaPartners" :key="item.logo"
                                            data-aos="fade-up"
                                            data-aos-offset="50"
                                            data-aos-easing="ease-out-cubic"
                                            :data-aos-duration="i !== 0 ? 1000 * i/2 : 1500"
                                        )
                                        div.it-meetup_partner_logo_container
                                            img.img-fluid(
                                                @click="goToLink(item.website)"
                                                :src="`./images/partners/${item.logo}`"
                                                :alt="item.logo" )
                            b-col.mx-auto.p-0( cols="12" xl="5" )
                                b-row.m-0.p-0
                                    b-col.my-3.mx-auto.d-flex.justify-content-center.align-items-center.p-0( cols="12" xl="9" )
                                        strong.h1.mb-0( style="font-weight: 600" ) Partners
                                    b-col.p-3( cols="4" v-for="(item, i) in partners.ordinaryPartners" :key="i"
                                            data-aos="fade-up"
                                            data-aos-offset="50"
                                            data-aos-easing="ease-out-cubic"
                                            :data-aos-duration="i !== 0 ? 1000 * i/2 : 1500"
                                        )
                                        div.it-meetup_partner_logo_container
                                            img.img-fluid( @click="goToLink(item.website)"
                                                :src="`./images/partners/${item.logo}`" :alt="item.logo" )

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
            this.$refs.vertical.style.height = `calc(${this.$refs.schedule.clientHeight}px + 17%)`;
        },
        methods: {
            goToLink(link) {
                window.open(link, '_blank')
            }
        }
    }
</script>

<style scoped>

</style>
