<template>
    <div class="mt-5 pt-4 pt-xl-0 mt-xl-auto">
        <b-row class="m-0 it-meetup_startups_greeting">
            <b-col class="mx-auto my-2 d-flex justify-content-center flex-column flex-wrap col-xl-8 col-10">
                <h1
                    data-aos="fade-down"
                    class="it-meetup_startups_greeting_title text-left w-100 pl-xl-5"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    Past&nbsp; <span data-aos-duration="1000" data-aos-easing="ease-out-cubic" :data-aos-offset="isMobile ? 20 : 50" data-aos="fade-down">events</span>
                </h1>
                <p
                    data-aos="fade-up"
                    class="it-meetup_startups_greeting_description p-0 p-xl-5 m-0"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                >Previous events organized within the framework of the conference “Germany meets the Silicon Valley of Eastern Europe”.</p>
                <p class="m-0 p-0 pl-xl-5 h-blue">Select an event date:</p>
            </b-col>
        </b-row>
        <div class="wrap-tabs">
            <div class="tabs">
                <ul class="nav nav-tabs mx-auto col-xl-8 col-10 pl-5">
                  <li class="nav-item">
                      <a
                          @click="tabIndex = 0"
                          :class="{active: tabIndex === 0, 'cursor-pointer': true, 'nav-link': true}"
                      >15th of June</a>
                  </li>
                  <li class="nav-item">
                      <a
                          @click="tabIndex = 1"
                          :class="{active: tabIndex === 1, 'cursor-pointer': true, 'nav-link': true}"
                      >29th of June</a>
                  </li>
                  <li class="nav-item">
                    <a
                        @click="tabIndex = 2"
                        :class="{active: tabIndex === 2, 'cursor-pointer': true, 'nav-link': true}"
                    >7th of October</a>
                  </li>
                </ul>
            </div>
        </div>
        <b-row class="m-0 p-0">
            <b-tabs v-model="tabIndex" no-nav-style>
              <b-tab>
                <FifteenThOfJune/>
              </b-tab>
              <b-tab>
                <TwentyNineThOfJune/>
              </b-tab>
              <b-tab>
                <SevenThOfOctober/>
              </b-tab>
            </b-tabs>
        </b-row>
    </div>
</template>

<script>
    import delegations from "../static/delegation.json";
    import FifteenThOfJune from "../components/history/FifteenThOfJune";
    import TwentyNineThOfJune from "../components/history/TwentyNineThOfJune";
    import {BTabs, BTab} from "bootstrap-vue";
    import SevenThOfOctober from "@/components/history/SevenThOfOctober";

    export default {
        components: {TwentyNineThOfJune, FifteenThOfJune, SevenThOfOctober, BTabs, BTab},
        props: {
          isMobile: null
        },
        data() {
            return {
                delegations: delegations.delegations,
                tabIndex: 2
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
            min-height: 90px;
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
                        /*&:after {*/
                        /*    content: "";*/
                        /*    border-right: 1px solid #FFFFFF;*/
                        /*    width: 1px;*/
                        /*    background: #ffffff;*/
                        /*    height: 70%;*/
                        /*    position: absolute;*/
                        /*    right: 0;*/
                        /*}*/
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
                        max-width: 50%;
                        a {
                            font-size: 14px;
                            line-height: 1;
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
    }
    .cursor-pointer {
        cursor: pointer;
    }
</style>
