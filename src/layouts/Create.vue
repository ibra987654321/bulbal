<template>
  <v-app>
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
export default {
  name: "Create"
}
</script>

<style scoped>

</style>
