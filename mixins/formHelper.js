export default {
  data () {
    return {
      isFormChanged: false
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.isFormChanged = true
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    const { isFormChanged } = this
    if (!isFormChanged) {
      return next()
    }
    const areYouSure = confirm("Данные не сохранены, хотите покинуть страницу?")
    if (areYouSure) {
      return next()
    }
  }
}
