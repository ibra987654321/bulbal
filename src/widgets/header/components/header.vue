<template>
  <div id="header">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container v-if="!$vuetify.breakpoint.mobile" class="py-0 d-flex fill-height">
        <router-link to="/">
          <v-img
              max-height="60"
              max-width="88"
              :src="require('../../../assets/logo/img.png')"
          ></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <header-search></header-search>
        <v-spacer></v-spacer>
        <v-btn v-if="getToken" to="/page-create" class="mr-2" rounded outlined>Создать</v-btn>
        <userCardMenu/>
      </v-container>
      <v-row v-else>
        <v-col cols="10">
          <header-search></header-search>
        </v-col>
        <v-col cols="2" class="mx-auto my-auto">
          <userCardMenu/>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import userCardMenu from "@/entities/userCardMenu/UserCardMenu";
import headerSearch from "@/widgets/header/components/headerSearch";
import {getToken} from "@/helpers/token";
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
  setup() {
    return {
      getToken: getToken()
    }
  }
}
</script>

<style>
</style>
