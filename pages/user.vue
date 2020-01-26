<template>
  <div class="app">
    <b-form-group  label="Your Name:" >
      <b-form-input
        v-model="form.name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="form.surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="submit">Save</b-btn>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import FormHelper from '../mixins/formHelper'

  const { mapActions } = createNamespacedHelpers('user')

  export default {
    name: 'Page user',
    mixins: [FormHelper],
    data() {
      return {
        form: {
          name: '',
          surname:''
        }
      }
    },
    methods: {
      ...mapActions(['userSave']),
      submit () {
        const { form, userSave } = this
        userSave(form).finally(() => {
          this.isFormChanged = false
        })
      }
    }
  }
</script>
