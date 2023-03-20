<template>
  <div>
    <title-card
        title="Настройка уведомлений"
        small
    >
      <v-row class="pl-10 py-10">
        <v-col cols="12" class="title black--text">Сообщения</v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Email
            <small>Получение уведомлений по электронной почте</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-1"></v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Текстовые сообщения
            <small>Получение уведомлений через мобильный телефон</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-1"></v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Уведомления браузера
            <small>Получение уведомлений вашего браузера</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-9"></v-col>
        <v-col cols="12" class="title black--text">Подарки и предложения </v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Email
            <small>Получение уведомлений по электронной почте</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-1"></v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Текстовые сообщения
            <small>Получение уведомлений через мобильный телефон</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-1"></v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Уведомления браузера
            <small>Получение уведомлений вашего браузера</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-9"></v-col>
        <v-col cols="12" class="title black--text">Новые туристические маршруты</v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Email
            <small>Получение уведомлений по электронной почте</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-1"></v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Текстовые сообщения
            <small>Получение уведомлений через мобильный телефон</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
        <v-col cols="12"><hr class="my-1"></v-col>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column black--text">
            Уведомления браузера
            <small>Получение уведомлений вашего браузера</small>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-switch
              inset
          ></v-switch>
        </v-col>
      </v-row>
    </title-card>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
export default {
  name: "ProfileNotificationComponent",
  components: {
    titleCard
  }
}
</script>

<style scoped>

</style>
