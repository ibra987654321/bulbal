<template>
  <div>
    <title-card
      title="Личная информация"
      btn-title="Просмотреть профиль"
      btn-redirect="/profile"
      small
    >
      <v-row class="px-10 py-10">
        <v-col cols="12">
          <div class="black--text">
            Информация об аккаунте
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">Отображаемое имя</div>
          <v-text-field
              v-model="$store.state.profileEdit.profile.nickName"
              placeholder="Введите отображаемое имя"
              color="secondary"
              outlined
              class="transparent"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">настоящее имя</div>
          <v-text-field
              v-model="$store.state.profileEdit.profile.name"
              placeholder="Анна Ким"
              color="secondary"
              outlined
              class="transparent"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">Телефон</div>
          <v-text-field
              v-model="$store.state.profileEdit.profile.phoneNumber"
              placeholder="Номер телефона"
              color="secondary"
              outlined
              v-mask="'#(###)-##-##-##'"
              class="transparent"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">email</div>
          <v-text-field
              v-model="$store.state.profileEdit.profile.email"
              placeholder="tamkim@icloud.com"
              color="secondary"
              outlined
              class="transparent"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <div class="text-uppercase mb-2">био</div>
          <v-textarea
              v-model="$store.state.profileEdit.profile.description"
              placeholder="Расскажите о себе немного другим любителям путешествий и хозяевам гостиниц."
              color="secondary"
              outlined
              class="transparent"
              hide-details
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">Что вы любите в путешествии?</div>
          <div class="border">
            <v-checkbox
                v-for="(item, index) in checkboxes"
                :key="index"
                v-model="item.value"
                :label="item.name"
                class="mt-1 black--text"
                hide-details
                @change="updateSelectedCheckboxes"
            ></v-checkbox>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">ЧЕМ вы увлекаетесь?</div>
          <div class="border">
            <v-checkbox
                v-model="item.value"
                v-for="item in hobbyCheckboxes"
                :label="item.name"
                class="mt-1 black--text"
                hide-details
                @change="updateSelectedCheckboxes2"
            ></v-checkbox>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">живет в</div>
          <v-select
              v-model="$store.state.profileEdit.profile.liveIn"
              placeholder="Место нахождения"
              color="secondary"
              :items="$store.state.create.regions"
              outlined
              class="transparent"
              hide-details
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">язык</div>
          <v-select
              v-model="$store.state.profileEdit.profile.language"
              placeholder="English (United States)"
              color="secondary"
              :items="['Кыргызский', 'Русский', 'English', 'Турецкий',]"
              outlined
              type="number"
              class="transparent"
              hide-details
          ></v-select>
        </v-col>
<!--        <v-col cols="12" sm="6">-->
<!--          <div class="text-uppercase mb-2">приложить удостоверение личности</div>-->
<!--          <v-file-input-->
<!--              v-model="personalData.document"-->
<!--              placeholder="Приложить документ"-->
<!--              color="secondary"-->
<!--              outlined-->
<!--              class="transparent"-->
<!--              prepend-icon=""-->
<!--              append-icon="mdi-camera"-->
<!--              hide-details-->
<!--          ></v-file-input>-->
<!--        </v-col>-->
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">контактное лицо в чрезвычайной ситуации</div>
          <v-text-field
              v-model="$store.state.profileEdit.profile.contactPerson"
              placeholder="Номер телефона"
              color="secondary"
              outlined
              type="number"
              class="transparent"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12"><hr class="my-5"></v-col>
        <v-col cols="12">
          <div class="black--text">
            Социальные сети
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">instagram</div>
          <v-text-field
              v-model="$store.state.profileEdit.profile.instagramUrl"
              placeholder="URL"
              color="secondary"
              outlined
              type="number"
              class="transparent"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-uppercase mb-2">twitter</div>
          <v-form  aria-autocomplete="off">
            <v-text-field
                v-model="$store.state.profileEdit.profile.twitterUrl"
                placeholder="@twitter username"
                color="secondary"
                outlined
                class="transparent twitter"
                hide-details
            >
<!--              <template #append >-->
<!--                <div>-->
<!--                  <v-btn-->
<!--                      type="submit"-->
<!--                      rounded-->
<!--                      class="text-capitalize transparent my-auto"-->
<!--                  >-->
<!--                    Подтвердить-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </template>-->
            </v-text-field>
          </v-form>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn
              color="primary"
              rounded
              large
              class="text-capitalize px-8 mr-2"
              @click="$store.dispatch('profileEdit')"
          >
            Сохранить
          </v-btn>
          <v-btn
              outlined
              rounded
              large
              class="text-capitalize transparent  px-8"
              @click="$store.commit('emptyEditProfile')"
          >
            <svg class="mr-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528758 0.528514C0.789108 0.268165 1.21122 0.268165 1.47157 0.528514L5.00017 4.05711L8.52876 0.528514C8.78911 0.268165 9.21122 0.268165 9.47157 0.528514C9.73192 0.788864 9.73192 1.21097 9.47157 1.47132L5.94298 4.99992L9.47157 8.52851C9.73192 8.78886 9.73192 9.21097 9.47157 9.47132C9.21122 9.73167 8.78911 9.73167 8.52876 9.47132L5.00017 5.94273L1.47157 9.47132C1.21122 9.73167 0.789108 9.73167 0.528758 9.47132C0.268409 9.21097 0.268409 8.78886 0.528758 8.52851L4.05736 4.99992L0.528758 1.47132C0.268409 1.21097 0.268409 0.788864 0.528758 0.528514Z" fill="#777E90"/>
            </svg>
            Очистить все
          </v-btn>
        </v-col>
      </v-row>
      <div class="d-none">{{hobbiesComputed, checkboxesComputed}}</div>
    </title-card>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import {decodeJWT} from "@/helpers/helpers";
export default {
  name: "ProfileEditComponents",
  components: {
    titleCard
  },
  data: () => ({
    myInputModel: '',
    checkboxes: [
      {value: false, name: 'Горные походы'},
      {value: false, name: 'Пляжный отдых'},
      {value: false, name: 'Общение, знакомства, дружба'},
      {value: false, name: 'Самобытность, традиции, folk'},
      {value: false, name: 'Тихие, уединенные места'},
      {value: false, name: 'Потрясающие виды'},
      {value: false, name: 'Заброшенные города и деревни'},
    ],
    hobbyCheckboxes: [
      {value: false, name: 'я цифровой кочевник'},
      {value: false, name: 'я общественный активист'},
      {value: false, name: 'я занимаюсь йогой'},
      {value: false, name: 'я занимаюсь горным спортом'},
      {value: false, name: 'я спортсмен'},
      {value: false, name: 'я исследователь '},
      {value: false, name: 'я ученный'},
    ],
    personalData: {
      nickName: '',
      name: '',
      phoneNumber: '',
      email: '',
      bio: '',
      location: '',
      language: '',
      document: '',
      extraPhoneNumber: '',
    },
  }),
  mounted() {
    this.$store.dispatch('getUserForEditById', decodeJWT().userId)
  },
  computed: {
    hobbiesComputed() {
      return this.hobbyCheckboxes.map(obj1 => {
        if (this.$store.state.profileEdit.profile.hobbies.length) {
          let obj3 = this.$store.state.profileEdit.profile.hobbies.find(obj2 => obj2.name === obj1.name);
          if (obj3) {
            obj1.value = true;
          }
        }
      });
    },
    checkboxesComputed() {
      return this.checkboxes.map(obj1 => {
        if (this.$store.state.profileEdit.profile.likeTravels) {
          let obj3 = this.$store.state.profileEdit.profile.likeTravels.find(obj2 => obj2.name === obj1.name);
          if (obj3) {
            obj1.value = true;
          }
        }
      });
    },
  },
  methods: {
    updateSelectedCheckboxes() {
      this.$store.state.profileEdit.profile.likeTravels = this.checkboxes.filter(checkbox => checkbox.value)
    },
    updateSelectedCheckboxes2() {
      this.$store.state.profileEdit.profile.hobbies = this.hobbyCheckboxes.filter(checkbox => checkbox.value)
    },
  }
}
</script>

<style scoped>
.border {
  border: 2px solid #E6E8EC;
  border-radius: 12px;
  padding: 14px 34px;
}
</style>
<style>
.v-text-field--outlined {
  border: 2px solid #E6E8EC;
  border-radius: 12px;
}
.twitter .v-input__append-inner {
  margin: 0 !important;
  min-height: 52px;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
