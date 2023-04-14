<template>
  <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600px"
      persistent
      :fullscreen="$vuetify.breakpoint.mobile"
      :transition="'dialog-transition'"
  >
    <v-card class="dialog_card">
      <v-card class="text-center py-16">
        <h1>Поздравляем!</h1>
        <p class="mt-4 subtitle">Вы успешно зарегистрировали ваш дом! 🎉</p>
        <v-card-text class="text-center mx-auto success_block">
          <v-btn
              color="primary"
              rounded
              class=" text-none"
              width="100%"
              large
              to="/"
          >На главную </v-btn>
        </v-card-text>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SuccessDialog",
  props: {
    dialog: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
.success_block {
  width: 100%;
  max-width: 352px;
}
.dialog_card {
  border-radius: 16px;
}
</style>
