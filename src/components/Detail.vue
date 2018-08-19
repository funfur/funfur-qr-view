<template lang="pug">
  div#detail
    div.detail__container
      div.detail__each(
        v-for="(value, key) in companyInfo"
        :key="key"
      )
        h3.detail__each--title {{value.name}}
        p.detail__each--text {{value.email}}
</template>

<script>
import axios from 'axios'
import {globalVar} from '../globalVar'

export default {
  name: 'detail',
  data () {
    return {
      companyInfo: []
    }
  },
  mounted () {
    axios
      .get(process.env.BASE_URI + '/users')
      .then(response => {
        this.companyInfo = response.data
        // console.log(response)
      })
  }
}
</script>

<style lang="scss">
#detail {

  .detail__container {
    padding: 8px 16px 16px;

    .detail__each {

      .detail__each--title {
        font-size: 16px;
      }

      .detail__each--text {
        font-size: 16px;
        line-height: calc(16px * 1.6);
        margin-top: -16px;
      }
    }
  }
}
</style>
