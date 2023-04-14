<template>
  <v-app>
    <createHeader/>
    <v-main>
      <transition
          name="fade"
          mode="out-in"
      >
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import createHeader from "@/widgets/header/components/createHeader";
export default {
  name: "Create",
  components: {createHeader}
}
</script>

<style scoped>

</style>
