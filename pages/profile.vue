<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        v-model="form.country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="submit">Save</b-btn>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import FormHelper from '../mixins/formHelper'

  const { mapActions } = createNamespacedHelpers('profile')

  export default {
    name: 'profile_page',
    mixins: [FormHelper],
    data() {
      return {
        form: {
          country: 'USA'
        }
      }
    },
    methods: {
      ...mapActions(['profileSave']),
      submit () {
        const { form, profileSave } = this
        profileSave(form).finally(() => {
          this.isFormChanged = false
        })
      }
    }
  }
</script>
