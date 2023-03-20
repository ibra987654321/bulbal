<template>
  <div id="header">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <v-img
            max-height="60"
            max-width="88"
            :src="require('../../../assets/logo/img.png')"
        ></v-img>
        <v-spacer></v-spacer>
        <header-search></header-search>
        <v-spacer></v-spacer>
        <userCardMenu/>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import userCardMenu from "@/entities/userCardMenu/UserCardMenu";
import headerSearch from "@/widgets/header/components/headerSearch";
export default {
  provide: true,
  name: "Header",
  components: {
    userCardMenu,
    headerSearch
  },
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

<style scoped>

</style>
