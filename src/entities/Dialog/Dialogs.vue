<template>
  <v-dialog
      v-model="$store.state.login.dialog"
      transition="dialog-bottom-transition"
      :max-width="maxWidth"
      :fullscreen="$vuetify.breakpoint.mobile"
      :transition="'dialog-transition'"
  >
      <v-card class="dialog_card">
        <div class="dialog_close">
          <v-btn
              icon
              dark
              @click="$store.state.login.dialog = false"
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
    destroyFunc: Function
  },
  watch: {
    '$store.state.login.login'() {
      this.$props.destroyFunc()
    }
  }
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
