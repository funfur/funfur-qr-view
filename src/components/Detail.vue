<template lang="pug">
  div#detail
    div.detail__container
      div.detail__each(
        v-for="(value, key) in makersInfo"
        :key="key"
      )
        h3.detail__each--title {{value.title}}
        p.detail__each--text {{value.desc}}
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      makersInfo: {
        makersName: {
          title: '메이커스',
          desc: '서혁'
        },
        makersIntroduce: {
          title: '메이커스 소개',
          desc: '안녕하세요, 서혁입니다. 저의 가구를 구매해주셔서 감사합니다.'
        },
        producedYear: {
          title: '제작년도',
          desc: '2018'
        },
        makersAddress: {
          title: '업체 주소',
          desc: '서울특별시 성동구 왕십리로 222, 한양대학교 '
        },
        makersContact: {
          title: '업체 연락처',
          desc: '010-1234-5678'
        },
      }
    }
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
