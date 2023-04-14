<template>
  <v-row>
    <v-col cols="12">
      <h2>Удобства</h2>
    </v-col>
    <v-col v-for="(item, i) in postDetail.createObject.conveniences" cols="12" sm="6" class="d-flex">
      <div>
        <v-img :src="data[i].icon" class="mr-5"/>
      </div>
      <div class="title__facilities grey--text">{{item.convenienceName}}</div>
    </v-col>
    <v-col cols="12">
      <v-btn outlined rounded class="font-weight-medium text-capitalize">Подробнее</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FacilitiesDetailPage",
  data:() => ({
    data: [
      {icon: require('@/assets/icons/facilities_icons/wifi.png'), title: 'Бесплатный Wi-Fi 24/7'},
      {icon: require('@/assets/icons/facilities_icons/pc.png'), title: 'Бесплатный компьютер'},
      {icon: require('@/assets/icons/facilities_icons/pharmacy.png'), title: 'Аптека'},
      {icon: require('@/assets/icons/facilities_icons/store.png'), title: 'Продуктовый магазин'},
      {icon: require('@/assets/icons/facilities_icons/clean.png'), title: 'Чистая ванная комната'},
      {icon: require('@/assets/icons/facilities_icons/burger.png'), title: 'Завтрак включен'},
          {icon: require('@/assets/icons/facilities_icons/wifi.png'), title: 'Бесплатный Wi-Fi 24/7'},
      {icon: require('@/assets/icons/facilities_icons/pc.png'), title: 'Бесплатный компьютер'},
      {icon: require('@/assets/icons/facilities_icons/pharmacy.png'), title: 'Аптека'},
      {icon: require('@/assets/icons/facilities_icons/store.png'), title: 'Продуктовый магазин'},
      {icon: require('@/assets/icons/facilities_icons/clean.png'), title: 'Чистая ванная комната'},
      {icon: require('@/assets/icons/facilities_icons/burger.png'), title: 'Завтрак включен'},
          {icon: require('@/assets/icons/facilities_icons/wifi.png'), title: 'Бесплатный Wi-Fi 24/7'},
      {icon: require('@/assets/icons/facilities_icons/pc.png'), title: 'Бесплатный компьютер'},
      {icon: require('@/assets/icons/facilities_icons/pharmacy.png'), title: 'Аптека'},
      {icon: require('@/assets/icons/facilities_icons/store.png'), title: 'Продуктовый магазин'},
      {icon: require('@/assets/icons/facilities_icons/clean.png'), title: 'Чистая ванная комната'},
      {icon: require('@/assets/icons/facilities_icons/burger.png'), title: 'Завтрак включен'},
          {icon: require('@/assets/icons/facilities_icons/wifi.png'), title: 'Бесплатный Wi-Fi 24/7'},
      {icon: require('@/assets/icons/facilities_icons/pc.png'), title: 'Бесплатный компьютер'},
      {icon: require('@/assets/icons/facilities_icons/pharmacy.png'), title: 'Аптека'},
      {icon: require('@/assets/icons/facilities_icons/store.png'), title: 'Продуктовый магазин'},
      {icon: require('@/assets/icons/facilities_icons/clean.png'), title: 'Чистая ванная комната'},
      {icon: require('@/assets/icons/facilities_icons/burger.png'), title: 'Завтрак включен'},
    ]
  }),
  computed: {
    ...mapState(['postDetail'])
  }
}
</script>

<style scoped>
.title__facilities {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}
</style>
