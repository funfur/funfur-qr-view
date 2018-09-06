<template lang="pug">
  div#hero
    div.hero__container
      div.hero__imgbox
        img.hero__imgbox--img(
          :src="heroImg"
        )
        div.hero__dimLayer
        div.hero__titlebox
          h1.hero__titlebox--text {{ heroTitle }}
</template>

<script>
import axios from 'axios'
import {globalVar} from '../globalVar.js'

export default {
  name: 'hero',
  data () {
    return {
      heroImg: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6fd823fe16fab3f55144f2cb4dcf2fc3&auto=format&fit=crop&w=900&q=60',
      heroTitle: '업체명'
    }
  },
  mounted () {
    axios
      .get()
      .then(response => {
        // this.heroImg = response.data
        // console.log(response)
      })
  }
}
</script>

<style lang="scss">
#hero {
  height: 38vh;

  .hero__container {

    .hero__imgbox {
      width: 100%;
      position: relative;
      display: inline-block;

      .hero__imgbox--img {
        width: 100%;
        height: 38vh;
        object-fit: cover;
      }

      .hero__dimLayer {
        left: 0;
        bottom: 5px;
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.38));
      }

      .hero__titlebox {
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 8px 16px;
        position: absolute;
        display: inline-block;

        .hero__titlebox--text {
          color: #fff;
        }
      }
    }
  }
}
</style>
