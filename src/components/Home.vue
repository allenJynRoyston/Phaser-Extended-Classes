<template lang="pug">
  .ui.container.game-container
    center
      br
      br
      p My terrible Zero Wing Entry parody
      workinggame-component
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      store: this.$store,
    }
  }
}
</script>

<style lang="sass" scoped>
  .column
    border: 1px solid white
    background-color: lightgray
    color: black
    margin-top: 10px
</style>
