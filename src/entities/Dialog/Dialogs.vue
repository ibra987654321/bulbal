<template>
  <v-dialog
      v-model="$store.state.login.login"
      transition="dialog-bottom-transition"
      :max-width="maxWidth"
      :fullscreen="$vuetify.breakpoint.mobile"
  >
      <v-card>
        <slot></slot>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Dialogs",
  props: {
    openBtn: String,
    maxWidth: {
      type: String,
      default() {
        return '600px'
      }
    }
  }
}
</script>

<style scoped>

</style>
