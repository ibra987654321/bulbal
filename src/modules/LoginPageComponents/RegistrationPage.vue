<template>
  <v-card class="text-center py-10">
    <h3>Войдите или Зарегистрируйтесь</h3>
    <h1 class="mt-4">Добро пожаловать BulBal </h1>
    <v-card-text class="text-center mx-auto login_block">
      <v-text-field
          v-model="$store.state.login.login.email"
          label="Email"
          rounded
          hide-details
          outlined
          class="mt-10"
      ></v-text-field>
      <v-text-field
          v-model="$store.state.login.login.password"
          label="Пароль"
          rounded
          hide-details
          outlined
          class="mt-5"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
          v-model="$store.state.login.login.personalPass"
          label="Повторный пароль"
          rounded
          hide-details
          outlined
          class="mt-5"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          @click:append="show2 = !show2"
      ></v-text-field>
      <v-btn
          color="primary"
          rounded
          width="100%"
          class="mt-7"
          large
          @click="submit()"
          :loading="loading"
      >Авторизоваться</v-btn>
      <div class="my-4">или</div>
      <div class="d-flex justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_230_3262)">
            <rect y="0.00195312" width="48" height="48" rx="24" fill="#3B71FE"/>
            <path d="M30.3983 22.7885H24.0349V25.516H27.6416C27.0649 27.3344 25.6408 27.9402 24.0058 27.9402C23.3722 27.941 22.7478 27.789 22.1855 27.497C21.6232 27.205 21.1396 26.7817 20.7758 26.2629C20.412 25.7442 20.1787 25.1454 20.0956 24.5173C20.0126 23.8891 20.0823 23.2503 20.2988 22.6548C20.5154 22.0594 20.8723 21.525 21.3394 21.0969C21.8066 20.6688 22.37 20.3597 22.9821 20.1959C23.5941 20.032 24.2366 20.0182 24.8551 20.1556C25.4736 20.293 26.0499 20.5776 26.5349 20.9852L28.5166 19.0977C27.7186 18.3626 26.7531 17.8333 25.7042 17.5559C24.6552 17.2785 23.5544 17.2613 22.4973 17.5059C21.4402 17.7504 20.4587 18.2493 19.6381 18.9592C18.8175 19.669 18.1826 20.5685 17.7885 21.5794C17.3944 22.5903 17.2529 23.6822 17.3765 24.7601C17.5 25.8381 17.8848 26.8697 18.4975 27.7652C19.1101 28.6607 19.932 29.3932 20.892 29.899C21.8519 30.4048 22.9207 30.6687 24.0058 30.6677C27.6816 30.6677 31.0058 28.2436 30.3983 22.7885Z" fill="#FCFCFD"/>
          </g>
          <defs>
            <clipPath id="clip0_230_3262">
              <rect width="48" height="48" fill="white" transform="translate(0 0.000976562)"/>
            </clipPath>
          </defs>
        </svg>
        <svg class="ml-2" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_230_3265)">
            <rect width="48" height="48" rx="24" fill="#141416"/>
            <g clip-path="url(#clip1_230_3265)">
              <path d="M23.0599 20.9754C22.7293 20.8273 22.3732 20.6677 21.7778 20.6677C19.5556 20.6677 19 22.8901 19 25.1122C19 27.3343 20.6667 30.1122 21.7778 30.1122C22.4286 30.1122 22.8889 29.9216 23.2702 29.7636C23.5398 29.6519 23.7699 29.5566 24 29.5566C24.2301 29.5566 24.4602 29.6519 24.7298 29.7636C25.1111 29.9216 25.5713 30.1122 26.2222 30.1122C27.0154 30.1122 28.0917 28.6967 28.6427 27.0781C28.6982 26.9151 28.585 26.747 28.4188 26.7021C27.4734 26.4466 26.7778 25.5828 26.7778 24.5566C26.7778 23.5883 27.3972 22.7646 28.2614 22.4601C28.4255 22.4023 28.5268 22.2225 28.4494 22.0666C28.0333 21.2278 27.3378 20.6677 26.2222 20.6677C25.6268 20.6677 25.2707 20.8273 24.9401 20.9754C24.6538 21.1036 24.3868 21.2233 24 21.2233C23.6132 21.2233 23.3462 21.1036 23.0599 20.9754Z" fill="#FCFCFD"/>
              <path d="M24 19.9732C24 18.8226 24.9327 17.8899 26.0833 17.8899C26.1601 17.8899 26.2222 17.9521 26.2222 18.0288C26.2222 19.1794 25.2895 20.1121 24.1389 20.1121C24.0622 20.1121 24 20.0499 24 19.9732Z" fill="#FCFCFD"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_230_3265">
              <rect width="48" height="48" fill="white"/>
            </clipPath>
            <clipPath id="clip1_230_3265">
              <rect width="13.3333" height="13.3333" fill="white" transform="translate(17.3334 17.3344)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="mt-4">У вас уже есть аккаунт? <a href="#" @click="$emit('next', 'login')">Войти</a></div>
      <v-snackbar
          v-model="snackbar"
          :color="snackbarColor"
          :timeout="2000"
      >
        {{ text }}
      </v-snackbar>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "RegistrationPage",
  data:() => ({
    show1: false,
    show2: false,
    password: '',
    confirmPassword: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
    loading: false,
    snackbar: false,
    snackbarColor: 'default',
    text: ''
  }),
  methods: {
    submit() {
      this.loading = true
        if (this.$store.state.login.login.password !== this.$store.state.login.login.personalPass) {
          this.loading = false
          this.snackbarColor = (this.$store.state.login.login.password  === this.$store.state.login.login.personalPass) ? 'success' : 'warning'
          this.text = `Пароли не совпадают!`
          this.snackbar = true
          return
        }
        this.$store.dispatch('register')
            .then(() => {
              this.loading = false
              this.$emit('next', 'sign-up')
            })
            .catch(e => {
              this.loading = false
              this.snackbarColor = 'warning'
              this.text = e.message
              this.snackbar = true
            })

    }
  }
}
</script>

<style scoped>

</style>
