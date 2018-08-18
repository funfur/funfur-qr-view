<template lang="pug">
  div#app
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#app {
  max-width: 100vw !important;
  overflow-x: hidden !important;
}
</style>
