<template lang="pug">
    div.mx-auto.d-flex.justify-content-center.align-items-center.flex-column.flex-wrap.col-xl-8.col-10
        h4.it-meetup_program_title.w-100.text-center Video recording of the event
        a(href="https://www.youtube.com/watch?v=iuG-YDrbziI" target="_blank")
            img.w-100.mt-5.cursor-pointer(src="@/assets/meeting.png" alt="IT MEET UP")
        h4.mb-5.it-meetup_program_title.w-100.text-center Conference proceedings
        b-row.blocks
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/JulianGrigo.png" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Julian Grigo
                            h6 Head of Digital Banking & Financial Services, Bitkom
                            hr
                            p.m-0.desc.bold The German and European FinTech market
                            p.m-0.desc Overview and cooperation opportunities
                            a.button-download(href="/files/presentations/Julian Grigo pdf.pdf" target="_blank") Download
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/aleksandrbondar.png" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Alexander Bondar
                            h6 SBH Law Offices
                            hr
                            p.m-0.desc.bold Belarus IT Landscape: recent M&A deals review
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/SergeyOdintsov.jpg" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Sergey Odintsov
                            h6 SCHNEIDER GROUP Minsk
                            hr
                            p.m-0.desc.bold Investments under High Tech Park (HTP) legislation
                            a.button-download(href="/files/presentations/Sergey Odintsov pdf.pdf" target="_blank") Download
        h4.mb-5.mt-0.it-meetup_program_title.w-100.text-center Startups
        b-row.blocks
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/OlegKondratenkoOplati.png" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Oleg Kondratenko
                            h6 CEO
                            hr
                            p.m-0.desc.bold Oplati (LWO)
                            a.button-download(href="/files/presentations/Оплатиenglish0626.pptx" target="_blank") Download
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/DzmitryShedkoFinstore.jpg" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Dzmitry Shedko
                            h6 managing director
                            hr
                            p.m-0.desc.bold Finstore
                            a.button-download(href="/files/presentations/Finstore Platform Presentation.pdf" target="_blank") Download
            div.col-md-6
                b-row
                    div.col-md-3.p-0.text-center
                        font-awesome-icon.mx-auto.my-5.my-xl-0(:icon="['fas', 'user']"
                            size="5x" style="color: #A1D9DA" )
                    div.col-md-8.p-0
                        h4 Andrew Volchek
                            h6 general manager
                            hr
                            p.m-0.desc.bold CashbackPro LLC
                            a.button-download(href="/files/presentations/Cashback_Presentation.pdf" target="_blank") Download
            div.col-md-6
                b-row
                    div.col-md-3.p-0.text-center
                        font-awesome-icon.mx-auto.my-5.my-xl-0(:icon="['fas', 'user']"
                            size="5x" style="color: #A1D9DA" )
                    div.col-md-8.p-0
                        h4 Dmitry Korshunov
                            h6 founder
                            hr
                            p.m-0.desc.bold Timvero
            div.col-md-6
                b-row
                    div.col-md-3.p-0
                        img.rounded-circle.static-img(src="@/assets/history/InnaSamovich.jpg" alt="IT MEET UP")
                    div.col-md-8.p-0
                        h4 Inna Samovich
                            h6 CEO
                            hr
                            p.m-0.desc.bold Cashew
            div.col-md-6
                b-row
                    div.col-md-3.p-0.text-center
                        font-awesome-icon.mx-auto.my-5.my-xl-0(:icon="['fas', 'user']"
                            size="5x" style="color: #A1D9DA" )
                    div.col-md-8.p-0
                        h4 Sergey Kholodkov
                            h6 executive director
                            hr
                            p.m-0.desc.bold Esas (Electronic systems and services)
                            a.button-download(href="/files/presentations/ESAS_fintech_HTP_khaladkou.pdf" target="_blank") Download
</template>

<script>
    import * as AOS from "aos";

    export default {
        name: "TwentyNineThOfJune",
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
        object-fit: cover;
        object-position: top;
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
            line-height: 24px;
            letter-spacing: 0.085em;
            color: #1C2B3F;
            margin-bottom: 10px;
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
