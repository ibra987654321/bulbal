<template>
  <div class="text-center">
    <v-snackbar
        v-model="$store.state.snackbars.snackbar"
        :timeout="5000"
        absolute
        bottom
        :color="color"
        text
    >
      {{ $store.state.snackbars.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            class="text-none"
            text
            v-bind="attrs"
            @click="$store.state.snackbars.snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "snackbars",
  computed: {
    color() {
      const color = this.$store.state.snackbars.status
      if ( color === 'error') {
        return 'error'
      } else if ( color === 'warning') {
        return 'warning'
      } else {
        return 'primary'
      }
    }
  }
}
</script>

<style scoped>

</style>
