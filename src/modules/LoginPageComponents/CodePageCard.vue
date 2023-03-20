<template>
  <v-card class="text-center py-10">
    <h1 class="mt-4">Введите код безопасности</h1>
    <v-card-text class="text-center mx-auto login_block">
      <p>Мы отправили ваш код на электронную tranm•••••••••••••@gm•••.com почту</p>
      <div>
        <div class="ma-auto position-relative" style="max-width: 300px">
          <v-otp-input
              v-model="otp"
              :disabled="loading"
              @finish="onFinish"
          ></v-otp-input>
          <v-overlay absolute :value="loading">
            <v-progress-circular
                indeterminate
                color="white"
            ></v-progress-circular>
          </v-overlay>
        </div>
        <v-snackbar
            v-model="snackbar"
            :color="snackbarColor"
            :timeout="2000"
        >
          {{ text }}
        </v-snackbar>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CodePageCard",
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: 'default',
    otp: '',
    text: '',
    expectedOtp: '133707',
  }),
  methods: {
    onFinish (rsp) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
        this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`
        this.snackbar = true
      }, 3500)
    },
  },
}
</script>

<style scoped>

</style>
