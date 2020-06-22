<template lang="pug">
    div.mt-5.pt-4.pt-xl-0.mt-xl-auto
        b-row.m-0.it-meetup_startups_greeting
            b-col.mx-auto.my-2.d-flex.justify-content-center.flex-column.flex-wrap( cols="10" xl="8" )
                h1.it-meetup_startups_greeting_title.text-left.w-100.pl-xl-5(
                    data-aos="fade-down"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                ) Past&nbsp;
                    span(
                        data-aos="fade-down"
                        :data-aos-offset="isMobile ? 20 : 50"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    ) events
                p.it-meetup_startups_greeting_description.p-0.p-xl-5.m-0(
                    data-aos="fade-up"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                ) Previous events organized within the framework of the conference “Germany meets the Silicon Valley of Eastern Europe”.
                p.m-0.p-0.pl-xl-5.h-blue Select an event date:
        div.wrap-tabs
            div.tabs
                ul.nav.nav-tabs.mx-auto.col-xl-8.col-10.pl-5(role="tablist")
                    li.nav-item
                        a.nav-link.active(
                            id="first-tab"
                            href="#first-tab"
                            role="tab"
                            aria-controls="first-tab"
                            aria-selected="true"
                        ) 15th of June
                    //li.nav-item
                        a.nav-link(
                            id="second-tab"
                            role="tab"
                            aria-controls="second-tab"
                            aria-selected="true"
                        ) 29th of June
        b-row.m-0.p-0
            fifteen-th-of-june
</template>

<script>
    import delegations from "../static/delegation.json";
    import FifteenThOfJune from "../components/history/FifteenThOfJune";

    export default {
        components: {FifteenThOfJune},
        comments: {
            FifteenThOfJune
        },
        props: {
          isMobile: null
        },
        data() {
            return {
                delegations: delegations.delegations
            }
        },
        methods: {
            openWebsite(link) {
                window.open(link, '_blank');
            },
            openModal(item) {
                this.$root.$emit('open-delegation', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .h-blue {
        font-weight: bold;
        font-size: 20px;
        line-height: 206.68%;
        letter-spacing: 0.085em;
        color: #A1D9DA;
    }
    .it-meetup_startups_greeting {
        padding-top: 150px;
    }
    .wrap-tabs {
        background: #1C2B3F;
        .tabs {
            background: rgba(245, 245, 245, 0.6);
            border-radius: 15px 15px 0 0;
            height: 90px;
            display: flex;
            align-items: flex-end;
            ul {
                border: 0;
                li {
                    a {
                        height: 75px;
                        display: flex;
                        align-items: center;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 206.68%;
                        letter-spacing: 0.085em;
                        color: #ffffff;
                        padding: 13px 42px;
                        position: relative;
                        &:hover {
                            background: #FFFFFF;
                            box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.1);
                            border-radius: 15px 15px 0 0;
                            color: #1C2B3F;
                            border: 0;
                        }
                        &:after {
                            content: "";
                            border-right: 1px solid #FFFFFF;
                            width: 1px;
                            background: #ffffff;
                            height: 70%;
                            position: absolute;
                            right: 0;
                        }
                    }
                    .active {
                        background: #FFFFFF;
                        box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.1);
                        border-radius: 15px 15px 0 0;
                        color: #1C2B3F;
                        border: 0;
                    }
                }
                li:last-child {
                    a:after {
                        display: none;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .it-meetup_startups_greeting {
            padding-top: 30px;
        }
        .wrap-tabs {
            .tabs {
                ul {
                    margin: 0 !important;
                    li {
                        a {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
</style>
