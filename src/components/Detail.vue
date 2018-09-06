<template lang="pug">
  div#detail
    div.detail__container
      div.detail__each
        h3.detail__each--title {{ companyInfo }}
        //- p.detail__each--text {{ companyInfo.makers_name }}
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
    let baseURI = 'https://api.mockaroo.com/api/d07561b0?count=1&key='
    axios
      .get(baseURI + process.env.API_KEY, {
        transformResponse: (req) => {
          return req
        },
        responseType: 'json'
      })
      .then(response => {
        this.companyInfo = response.data
        console.log(this.companyInfo)
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
