<template lang="pug">
  div#home
    Hero
    Detail
</template>

<script>
import Hero from './Hero'
import Detail from './Detail'

export default {
  name: 'home',
  components: {
    Hero,
    Detail
  }
}
</script>
