<template>
  <div class="text-center">
    <v-menu
        offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <div
            class="d-flex"
            v-if="auth"
             v-bind="attrs"
             v-on="on"
        >
          <Avatar width="60" height="60"/>
        </div>
          <v-list-item-avatar v-else>
            <v-img
                v-bind="attrs"
                v-on="on"
                max-width="60"
                max-height="60"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU"
                alt="John"
            >
            </v-img>
          </v-list-item-avatar>

      </template>

      <v-card class="rounded-lg menu_list">
        <v-list>
          <v-list-item v-for="(item, idx) in menu" :key="idx">
            <v-list-item-title v-if="item.function" @click="router()" style="cursor:pointer;">{{item.label}}</v-list-item-title>
            <v-list-item-title v-else-if="item.click" @click="setLoginData(item.click, item.tab)" style="cursor:pointer;">{{item.label}}</v-list-item-title>
            <router-link v-else :to="item.link" class="text-decoration-none black--text">
              <v-list-item-title>{{item.label}}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import {getToken, removeToken} from "@/helpers/token";
import Avatar from "./navAvatar";
export default {
  name: "userMenu",
  components: {
    Avatar
  },
  data: () => ({
    authMenu: [
      {label: 'Сообщения', link: '/'},
      {label: 'Профиль', link: '/profile'},
      {label: 'План маршрута', link: '/'},
      {label: 'Открыть гостевой дом', link: '/page-create'},
      {label: 'Предложить услугу', link: '/'},
      {label: 'Выйти', link: '/', function: true},
    ],
    unAuthMenu: [
      {label: 'Зарегистрироваться', link: '/', click: 'dialog', tab: 4},
      {label: 'Войти', link: '/', click: 'dialog', tab:1},
    ]
  }),
  computed: {
    menu()  {
      return getToken() ? this.authMenu : this.unAuthMenu
    },
    auth()  {
      return !!getToken()
    },
  },
  methods: {
    router() {
      removeToken()
      location.reload()
    },
    setLoginData(status, tab) {
      this.$store.state.login[status] = true
      this.$store.state.login.tab = tab
    }
  }
}
</script>

<style scoped>
.btn_padding-0 {
  padding: 0 !important;
}
@media only screen and (max-width: 600px) {
  .menu_list .v-list-item__title{
    font-size: 14px;
  }

}
.menu_list {

}
</style>
