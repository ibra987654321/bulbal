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
      <v-container v-else class="d-flex align-center justify-space-between mobile__header">
          <mobile-header></mobile-header>
          <userCardMenu/>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import userCardMenu from "@/entities/userCardMenu/UserCardMenu";
import headerSearch from "@/widgets/header/components/headerSearch";
import mobileHeader from "@/widgets/header/components/mobileHeader";
import {getToken} from "@/helpers/token";
export default {
  provide: true,
  name: "Header",
  components: {
    userCardMenu,
    headerSearch,
    mobileHeader
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
#header .v-toolbar__content, .v-toolbar__extension {
  overflow: hidden;
  /*border-bottom: 1px solid #A3B194;*/
  padding-bottom: 5px;
  height: 80px !important;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.17);
}
@media only screen and (max-width: 600px) {
  .v-toolbar__content, .v-toolbar__extension {
    overflow: hidden;
    border-bottom: none;
    padding-bottom: 5px;
    height: 80px !important;
    background-color: white;
  }
}
</style>
