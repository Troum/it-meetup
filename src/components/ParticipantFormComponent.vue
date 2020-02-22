<template lang="pug">
    validation-observer( ref="observer" v-slot="{ passes }" )
        b-form.w-95.mx-auto( @submit.prevent="passes(submit)" :class="$store.getters.disable ? 'disable-form' : ''")
            validation-provider( rules="required" name="Name and surname" v-slot="{ errors }")
                b-form-group.my-2
                    b-form-input.it-meetup_form_input(
                        :class="errors[0] ? 'not-valid' : ''"
                        type="text" autocomplete="off"
                        v-model="form.name"
                        placeholder="Name and surname" )
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div.invalid.text-danger.my-1( v-if="errors[0]" )
                            small {{ errors[0] }}
            validation-provider( rules="required" name="Company name" v-slot="{ errors }")
                b-form-group.my-2
                    b-form-input.it-meetup_form_input(
                        :class="errors[0] ? 'not-valid' : ''"
                        type="text" autocomplete="off"
                        v-model="form.company"
                        placeholder="Company name")
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div.invalid.text-danger.my-1( v-if="errors[0]" )
                            small {{ errors[0] }}
            validation-provider( rules="required" name="Company position" v-slot="{ errors }")
                b-form-group.my-2
                    b-form-input.it-meetup_form_input(
                        :class="errors[0] ? 'not-valid' : ''"
                        type="text" autocomplete="off"
                        v-model="form.position"
                        placeholder="Company position")
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div.invalid.text-danger.my-1( v-if="errors[0]" )
                            small {{ errors[0] }}
            validation-provider( rules="required" name="Sphere of activity" v-slot="{ errors }")
                b-form-group.my-2
                    b-form-input.it-meetup_form_input(
                        :class="errors[0] ? 'not-valid' : ''"
                        type="text" autocomplete="off"
                        v-model="form.branch"
                        placeholder="Sphere of activity")
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div.invalid.text-danger.my-1( v-if="errors[0]" )
                            small {{ errors[0] }}
            validation-provider( rules="required" name="Mobile number" v-slot="{ errors }")
                b-form-group.my-2
                    mobile-phone-component.it-meetup_form_input(
                        autoDetectCountry
                        showFlag
                        autocomplete="off"
                        v-model="form.phone"
                        required
                        placeholder="Mobile number")
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div.invalid.text-danger.my-1( v-if="errors[0]" )
                            small {{ errors[0] }}
            validation-provider( rules="required|email" name="Email" v-slot="{ errors }")
                b-form-group.my-2
                    b-form-input.it-meetup_form_input(
                        :class="errors[0] ? 'not-valid' : ''"
                        type="email" autocomplete="off"
                        v-model="form.email"
                        placeholder="E-mail")
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div.invalid.text-danger.my-1( v-if="errors[0]" )
                            small {{ errors[0] }}
            b-form-group.my-3
                label.d-block.it-meetup_label.mb-2 I agree with
                    router-link( to="/terms-and-conditions" ) &nbsp;terms and conditions
                toggle-button( :value="form.permission" v-model="form.permission"
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
                  permission: false,
                  name: '',
                  company: '',
                  position: '',
                  branch: '',
                  phone: '',
                  email: ''
              }
          }
        },
        methods: {
            submit() {
                this.$store.commit('disable', true);
                this.$handler.info('Please, wait...');
                this.$httpService.post('api/participant', this.$fdService.fill(this.form))
                    .then(response => {
                        this.$handler.success(response);
                        this.cancel();
                    })
                .finally(() => {
                    this.$store.commit('disable', false);
                })
            },
            cancel() {
                this.$fdService.reset(this.form);
                this.form.permission = false;
                requestAnimationFrame(() => {
                    this.$refs.observer.reset();
                });
            }
        }
    }
</script>
