<template>
  <v-card class="text-center py-10">
    <h1 class="mt-4">Забыли пароль</h1>
    <v-card-text class="text-center mx-auto login_block">
      <p>Введите имя пользователя, адрес электронной почты или номер телефона
      </p>
      <v-text-field
          label="Email"
          rounded
          hide-details
          outlined
          class="mt-10"
      ></v-text-field>
      <v-btn
          color="primary"
          rounded
          width="100%"
          class="mt-7"
          large
          @click="$emit('next', 'code')"
      >Продолжить</v-btn>
    </v-card-text>
    <a href="#" @click="$emit('next', 'login')">Назад</a>
  </v-card>
</template>

<script>
export default {
  name: "ForgetPasswordCard",
  methods: {
    forget() {
      this.$emit('forget')
    }
  }
}
</script>

<style scoped>

</style>
