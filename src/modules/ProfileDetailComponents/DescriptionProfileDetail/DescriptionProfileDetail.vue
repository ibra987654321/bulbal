<template>
  <div>
    <div class="d-flex flex-column">
      <title-card
          title="Привет, я  Анна Ким"
          small
          btn-title="Редактировать профиль"
          btn-redirect="/profile-settings"
      >
        <div class="grey--text description">«Мы путешествуем по миру, чтобы найти красоту; мы должны хранить её в себе, иначе она нам не откроется»</div>
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
  })
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
</style>
