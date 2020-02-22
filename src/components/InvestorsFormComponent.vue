<template lang="pug">
    b-form.w-80.mx-auto( @submit.prevent="submit" )
        b-form-group.my-2
            b-form-file.it-meetup_form_input(
                browse-text="+"
                accept="image/*"
                placeholder='Place or drop logo here' drop-placeholder='Drop logo here...')
        b-form-group.my-2
            b-form-input.it-meetup_form_input(
                type="text" autocomplete="off"
                placeholder="Company name" )
        b-form-group.my-2
            b-textarea.it-meetup_form_input(
                rows="3"
                autocomplete="off"
                placeholder="Company description (up to 1000 characters)")
        b-form-group.my-2
            mobile-phone-component.it-meetup_form_input(
                autoDetectCountry
                showFlag
                autocomplete="off"
                placeholder="Mobile number")
        b-form-group.my-2
            b-form-input.it-meetup_form_input(
                type="text" autocomplete="off"
                placeholder="Website")
        b-form-group.my-3
            label.d-block.it-meetup_label.mb-2 We agree with
                a( href="#" ) &nbsp;terms and conditions
            toggle-button( :value="false" v-model="form.permission"
                :labels="{checked: 'Yes', unchecked: 'No'}")
        b-form-group.mt-3
            b-button.it-meetup_button.submit_button( type="submit" :disabled="!form.permission" )
                span.m-auto.dark.bold( style="letter-spacing: 0.085em;" ) Apply
</template>

<script>

    export default {
        data() {
            return {
                form: {
                    permission: false
                }
            }
        },
        methods: {
            submit() {

            }
        }
    }
</script>
