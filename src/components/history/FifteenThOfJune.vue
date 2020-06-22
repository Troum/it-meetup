<template lang="pug">
    div.mx-auto.d-flex.justify-content-center.align-items-center.flex-column.flex-wrap.col-xl-8.col-10
        h4.it-meetup_program_title.w-100.text-center Video recording of the event
        a(href="https://www.youtube.com/watch?v=ErLESile2Qw" target="_blank")
            img.w-100.mt-5.cursor-pointer(src="@/assets/meeting.png" alt="IT MEET UP")
        h4.mb-5.it-meetup_program_title.w-100.text-center Conference proceedings
        //p.mb-5 Previous events organized within the framework of the conference “Germany meets the Silicon Valley of Eastern Europe”.
        b-row.blocks
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/kirillzalessky.jpg" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Kirill Zalessky
                            h6 Director for Global
                            h6 Cooperation Office HTP Belarus
                            hr
                            p.m-0.desc.bold Hi-Tech Park - SitRep 2020
                            p.m-0.desc Overview
                            p.m-0.desc Performance in Covid-19-times
                            a.button-download(href="/files/presentations/Hi-Tech Park для Silicon Valley.pdf" target="_blank") Download
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/tobiaskohler.jpg" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Tobias Kohler
                            h6 Rödl & Partner Belarus
                            hr
                            p.m-0.desc.bold Investing in Belarus
                            p.m-0.desc Legal situation and remarks from a German legal point of view
                            a.button-download(href="/files/presentations/2020.06.15 Investing in Belarus_Venture Capital_German perspective - Rödl  Partner v3.3 (en).pdf" target="_blank") Download
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/aleksandrbondar.png" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Alexander Bondar
                            h6 SBH Law Offices
                            hr
                            p.m-0.desc.bold Venture Capital Belarus
                            p.m-0.desc Overview
                            p.m-0.desc Future of VC in Belarus
</template>

<script>
    import * as AOS from "aos";

    export default {
        name: "FifteenThOfJune",
        methods: {
            showModal() {
                AOS.init();
                this.$bvModal.show('info')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .it-meetup_program_title {
        margin-top: 120px;
        font-weight: 900;
        font-size: 38px;
        line-height: 59px;
        letter-spacing: 0.085em;
        color: #1C2B3F;
        &:before {
            content: '';
            display: inline-block;
            height: 0.36rem;
            width: 9.66667%;
            margin-bottom: 0.78rem;
            margin-right: 0.78rem;
            background: -webkit-gradient(linear, left top, right top, from(rgba(28, 43, 63, 0)), color-stop(47%, rgba(161, 217, 218, 0.651698)));
            background: linear-gradient(90deg, rgba(28, 43, 63, 0) 0%, rgba(161, 217, 218, 0.651698) 47%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c2b3f",endColorstr="#a1d9da",GradientType=1);
            border-top-right-radius: 0.18rem;
            border-bottom-right-radius: 0.18rem;
        }
        &:after {
            content: '';
            display: inline-block;
            height: 0.36rem;
            width: 9.66667%;
            margin-bottom: 0.78rem;
            margin-left: 0.78rem;
            background: -webkit-gradient(linear, left top, right top, from(rgba(28, 43, 63, 0)), color-stop(47%, rgba(161, 217, 218, 0.651698)));
            background: linear-gradient(90deg, rgba(28, 43, 63, 0) 0%, rgba(161, 217, 218, 0.651698) 47%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c2b3f",endColorstr="#a1d9da",GradientType=1);
            border-top-right-radius: 0.18rem;
            border-bottom-right-radius: 0.18rem;
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .static-img {
        width: 95px;
        height: 95px;
        object-fit: contain;
    }
    .mb-14 {
        margin-bottom: 140px;
    }
    .blocks {
        .col-md-6 {
            margin-bottom: 80px;
        }
        h4 {
            font-weight: bold;
            font-size: 24px;
            line-height: 206.68%;
            letter-spacing: 0.085em;
            color: #1C2B3F;
        }
        h6 {
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.085em;
            color: #1C2B3F;
            margin: 0;
        }
        hr {
            border-top: 1px solid #000000;
            margin: 13px 0 17px;
        }
        .desc {
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0.085em;
            color: #1C2B3F;
            font-weight: normal;
        }
        .bold {
            font-weight: bold !important;
        }
        .button-download {
            background: #A1D9DA;
            border-radius: 19px;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.085em;
            color: #000000;
            text-decoration: none;
            padding: 7px 30px;
            margin-top: 35px;
            display: inline-block;
        }
    }
    @media screen and (max-width: 768px) {
        .it-meetup_program_title {
            font-size: 22px;
            line-height: 1;
            margin-top: 30px;
            &:after,
            &:before {
                display: none;
            }
        }
        .blocks {
            .col-md-3 {
                text-align: center;
            }
        }
    }
</style>
