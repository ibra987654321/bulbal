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
    <footer/>
    <SnackBars/>
  </v-app>
</template>

<script>
import createHeader from "@/widgets/header/components/createHeader";
import footer from "@/widgets/footer/footer";
const SnackBars = () => import('@/entities/snackbars/snackbars')
export default {
  name: "Create",
  components: {createHeader,SnackBars, footer}
}
</script>

<style scoped>

</style>
