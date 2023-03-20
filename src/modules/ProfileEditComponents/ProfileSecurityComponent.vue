<template>
<div>
  <title-card
      title="Вход и безопасность"
      small
  >
    <v-row class="pl-10 py-10">
      <v-col cols="12" class="title black--text">Авторизоваться</v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column">
          Пароль
          <small>Последнее обновление 1 месяц назад</small>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <v-btn
            rounded
            large
            class="text-capitalize transparent  px-8"
        >
          Обновить пароль
        </v-btn>
      </v-col>
      <v-col cols="12"><hr class="my-5"></v-col>
      <v-col cols="12" class="title black--text">Социальные аккаунты</v-col>
      <v-col cols="12" sm="5" class="d-flex justify-space-between">
        <div class="d-flex flex-column">
          Facebook
          <small>Не подключен</small>
        </div>
        <v-btn
            rounded
            small
            class="text-capitalize transparent"
        >
          Соединять
        </v-btn>
      </v-col>
      <v-col cols="12" sm="2" class="d-flex justify-center">
        <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1" height="48" rx="0.5" fill="#E6E8EC"/>
        </svg>
      </v-col>
      <v-col cols="12" sm="5" class="d-flex justify-space-between">
        <div class="d-flex flex-column">
          Apple account
          <small>Не подключен</small>
        </div>
        <v-btn
            rounded
            small
            class="text-capitalize transparent"
        >
          Соединять
        </v-btn>
      </v-col>
      <v-col cols="12"><hr class="my-5"></v-col>
      <v-col cols="12" class="title black--text">История устройства</v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column">
          Сессия
          <small>Март 14, 2021 в 08:36</small>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <v-btn
            rounded
            class="text-capitalize transparent  px-8"
        >
          Выйти
        </v-btn>
      </v-col>
      <v-col cols="12"><hr class="my-1"></v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column">
          macOs Big Sur. Chrome
          <small>Март 14, 2021 в 08:36</small>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <v-btn
            rounded
            class="text-capitalize transparent  px-8"
        >
          Выйти
        </v-btn>
      </v-col>
      <v-col cols="12"><hr class="my-1"></v-col>
    </v-row>
  </title-card>
</div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
export default {
  name: "ProfileSecurityComponent",
  components: {
    titleCard
  }
}
</script>

<style scoped>

</style>
