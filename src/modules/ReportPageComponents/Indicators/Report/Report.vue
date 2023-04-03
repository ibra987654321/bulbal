<template>
  <v-card class="d-flex">
    <div>
      <v-tabs
          v-model="tab"
          vertical
          class="report_tabs"
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          За месяц
        </v-tab>

        <v-tab href="#tab-2">
          За год
        </v-tab>

        <v-tab href="#tab-3">
          Комментарии
        </v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="i in 3"
          :key="i"
          :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "Report",
  data () {
    return {
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style scoped>
.report_tabs .v-tab{
  border: 1px solid #A9A9A9;
  text-transform: none;
  margin-bottom: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
}
.report_tabs .v-tab:not(.v-tab--active){
  color: black !important;
}
</style>
