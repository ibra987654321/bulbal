<template>
  <div id="header" >
    <v-app-bar
        app
        flat
        color="white"
        class="header mb-5"
    >
      <v-container v-if="!$vuetify.breakpoint.mobile" class="py-0 d-flex fill-height">
        <router-link to="/">
          <v-img
              max-height="45"
              max-width="73"
              :src="require('../../../assets/logo/img.png')"
          ></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <header-search></header-search>
        <v-spacer></v-spacer>
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
.v-toolbar__content, .v-toolbar__extension {
  overflow: hidden;
  border-bottom: 1px solid #A3B194;
  padding-bottom: 5px;
  height: 80px !important;
  background-color: white;
}
</style>
