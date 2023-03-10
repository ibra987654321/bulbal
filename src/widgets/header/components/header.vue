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
            max-width="120"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
        ></v-img>


        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
              dense
              flat
              hide-details
              rounded
              placeholder="Искать везде"
              solo-inverted
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
        <div class="mr-3">
          Сдать жилье на Airbnb
        </div>
        <userCardMenu/>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import userCardMenu from "@/features/components/userCardMenu/UserCardMenu";
export default {
  provide: true,
  name: "Header",
  components: {
    userCardMenu
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
