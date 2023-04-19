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
    <SnackBars/>
  </v-app>
</template>

<script>
import createHeader from "@/widgets/header/components/createHeader";
const SnackBars = () => import('@/entities/snackbars/snackbars')
export default {
  name: "Create",
  components: {createHeader,SnackBars}
}
</script>

<style scoped>

</style>
