<template>
  <v-dialog
      v-model="$store.state.login.login"
      transition="dialog-bottom-transition"
      :max-width="maxWidth"
      :fullscreen="$vuetify.breakpoint.mobile"
  >
      <v-card class="dialog_card">
        <div class="dialog_close">
          <v-btn
              icon
              dark
              @click="$store.state.login.login = false"
          >
            <v-icon color="black">mdi-close</v-icon>
          </v-btn>
        </div>
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
    },
    destroyFunc: Object
  },
}
</script>

<style scoped>
.dialog_card {
  position: relative;
}
.dialog_close {
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 4;
}
</style>
