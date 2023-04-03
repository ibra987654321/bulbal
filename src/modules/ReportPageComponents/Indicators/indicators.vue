<template>
  <v-card elevation="0">
    <v-tabs
        v-model="tab"
        background-color="transparent"
        centered

        icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-none">
        Бронирование
      </v-tab>

      <v-tab href="#tab-2" class="text-none">
        Отчет
      </v-tab>

      <v-tab href="#tab-3" class="text-none">
        Результат
      </v-tab>
      <v-tab href="#tab-4" class="text-none">
        Гости
      </v-tab>
      <v-tab href="#tab-5" class="text-none">
        Обучение
      </v-tab>
      <v-tab href="#tab-6" class="text-none">
        Возможность
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="i in 6"
          :key="i"
          :value="'tab-' + i"
      >
       <component :is="component[i -1]"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Booking from "@/modules/ReportPageComponents/Indicators/Booking/Booking";
import Report from "@/modules/ReportPageComponents/Indicators/Report/Report";
export default {
  name: "indicators",
  data () {
    return {
      component: [Booking, Report],
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style scoped>

</style>
