<template>
  <div id="create_header">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 d-flex fill-height">
        <router-link to="/">
          <v-img
              max-height="60"
              max-width="88"
              :src="require('../../../assets/logo/img.png')"
          ></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <userCardMenu/>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import userCardMenu from "@/entities/userCardMenu/UserCardMenu";

export default {
  name: "createHeader",
  components: {
    userCardMenu,
  },
}
</script>

<style scoped>
</style>
