<template>
  <div id="app" data-app>
    <Header/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from "@/widgets/header";
export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
<style>
@import "vuetify/dist/vuetify.min.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
body {
  font-family: 'Roboto', sans-serif;
}
</style>
