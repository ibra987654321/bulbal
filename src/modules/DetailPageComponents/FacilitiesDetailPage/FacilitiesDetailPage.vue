<template>
  <v-row>
    <v-col cols="12">
      <h2>Удобства</h2>
    </v-col>
    <v-col v-for="item in data" cols="6" class="d-flex">
      <div>
        <v-icon class="grey--text">{{item.icon}}</v-icon>
      </div>
      <div class="font-weight-medium grey--text">{{item.title}}</div>
    </v-col>
    <v-col cols="12">
      <v-btn outlined rounded small class="font-weight-medium">Подробнее</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FacilitiesDetailPage",
  data:() => ({
    data: [
      {icon: 'mdi-home', title: 'Lorem ips'},
      {icon: 'mdi-home', title: 'Lorem ips11'},
      {icon: 'mdi-home', title: 'Lorem ips22'},
      {icon: 'mdi-home', title: 'Lorem ips33'},
      {icon: 'mdi-home', title: 'Lorem ips33'},
      {icon: 'mdi-home', title: 'Lorem ips33'},
    ]
  })
}
</script>

<style scoped>

</style>
