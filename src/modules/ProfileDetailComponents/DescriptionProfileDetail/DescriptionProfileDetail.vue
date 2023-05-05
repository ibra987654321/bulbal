<template>
  <div>
    <div class="d-flex flex-column">
      <title-card
          :title="`Привет, я  ${profileDetail.user.name}`"
          small
          btn-title="Редактировать профиль"
          btn-redirect="/profile-settings"
      >
        <div class="grey--text description">«{{profileDetail.user.description}}»</div>
        <v-row class="mt-6 transparent" v-for="(item, idx ) in softInfo" :key="idx">
          <v-col cols="2" sm="1" class="py-0">
             <v-img class="mx-auto" :src="item.icon" width="22"/>
          </v-col>
          <v-col cols="3" sm="2" class="py-0">
            {{item.title}}
          </v-col>
          <v-col cols="7" sm="9" class="py-0 black--text">
            {{item.text}}
          </v-col>
        </v-row>
      </title-card>
      <title-card class="mt-10" title="Фотографии с путешествий" small>
        <carucsel-component></carucsel-component>
      </title-card>
    </div>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import carucselComponent from "@/modules/ProfileDetailComponents/DescriptionProfileDetail/CarucselComponent";
import {mapState} from "vuex";
import {decodeJWT} from "@/helpers/helpers";
export default {
  name: "DescriptionProfileDetail",
  components: {
    titleCard,
    carucselComponent
  },
  data: () => ({
    softInfo: [
      {icon: require('./icons/home.png'), title: 'Живет  в', text: 'Польша, Белосток'},
      {icon: require('./icons/language.png'), title: 'Языки', text: 'Русский,  Английский'},
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
.description {
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}
@media only screen and (max-width: 600px) {
  .description {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

}
</style>
