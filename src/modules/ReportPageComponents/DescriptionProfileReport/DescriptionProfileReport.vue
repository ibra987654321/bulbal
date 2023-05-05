<template>
  <div>
    <div class="d-flex flex-column pt-8">
      <title-card
          :title="`Привет, я  ${ profileDetail.user.name }`"
          small
      >
        <div class="grey--text description">«{{profileDetail.user.description}}»</div>
        <v-row class="mt-6 transparent" v-for="(item, idx ) in softInfo" :key="idx">
          <v-col cols="2" sm="1" class="py-0">
            <v-img class="mx-auto" :src="item.icon" width="22"/>
          </v-col>
          <v-col cols="10" sm="2" class="py-0">
            {{item.title}}
          </v-col>
          <v-col cols="12" sm="9" class="py-0 black--text">
            {{item.text}}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8" sm="6">
            <detail-review-line :review="review"></detail-review-line>
          </v-col>
        </v-row>
      </title-card>
    </div>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import DetailReviewLine from "@/entities/reviews/DetailReviewLine";
import {mapState} from "vuex";
import {decodeJWT} from "@/helpers/helpers";
export default {
  name: "DescriptionProfileReport",
  components: {
    titleCard,
    DetailReviewLine
  },
  data: () => ({
    softInfo: [
      {icon: require('./icons/home.png'), title: 'Живет  в', text: 'Иссык-Куль, Чок-Тал'},
      {icon: require('./icons/language.png'), title: 'Языки', text: 'Русский,  Английский'},
    ],
    review:  [
      {title: 'Чистота', count: 34},
      {title: 'Отношение', count: 84},
      {title: 'Удобства', count: 94},
      {title: 'Гости', count: 58},
    ]
  }),
  computed: {
    ...mapState(['profileDetail'])
  },
  mounted() {
    this.$store.dispatch('getUserById', decodeJWT().userId)
    this.softInfo[0].text = this.profileDetail.user.liveIn
    this.softInfo[1].text = this.profileDetail.user.language
  }
}
</script>

<style scoped>

</style>
