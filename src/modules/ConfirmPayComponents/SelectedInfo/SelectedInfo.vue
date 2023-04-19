<template>
  <title-card
      title="Подтвердить и оплатить"
      small
  >
    <v-row class="confirm">
      <v-col cols="12" class="title_confirm poppins black--text">Твое путешествие</v-col>
      <v-col
          cols="6"
      >
        <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            max-width="290"
        >
          <vc-date-picker class="mx-2" v-model="$store.state.header.range" color="teal" is-range/>
          <template v-slot:activator="{ on, attrs }">
            <v-card
                color="accent"
                class="elevation-0 py-2 rounded-lg px-2">

              <div class="d-flex justify-space-around align-center">
                <div class="d-flex flex-column black--text">
                  <small class="grey--text">Дата</small>
                  {{ $store.state.header.range.start | date }} - {{ $store.state.header.range.end | date }}
                </div>
                <svg
                    v-on="on"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M3 22C3 21.4477 3.44771 21 4 21H20C20.5523 21 21 21.4477 21 22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 3 22Z"
                      fill="#777E90"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.7071 3.12126C16.3166 2.73074 15.6834 2.73074 15.2929 3.12126L14.4142 3.99991L18 7.5857L18.8787 6.70705C19.2692 6.31652 19.2692 5.68336 18.8787 5.29284L16.7071 3.12126ZM6.91425 11.4999L13 5.41412L16.5858 8.99991L10.5 15.0857L6.91425 11.4999ZM5.50003 12.9142L5 13.4142V17H8.58579L9.08582 16.4999L5.50003 12.9142ZM13.8787 1.70705C15.0503 0.535476 16.9497 0.535476 18.1213 1.70705L20.2929 3.87862C21.4645 5.0502 21.4645 6.94969 20.2929 8.12126L10 18.4142C9.62493 18.7893 9.11622 19 8.58579 19H5C3.89543 19 3 18.1045 3 17V13.4142C3 12.8838 3.21071 12.375 3.58579 12L13.8787 1.70705Z"
                        fill="#777E90"/>
                </svg>
              </div>
            </v-card>
          </template>
        </v-menu>
      </v-col>
     <v-col
          cols="6"
      >
        <v-menu
            v-model="people"
            :close-on-content-click="false"
            max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
                color="accent"
                class="elevation-0 py-2 rounded-lg px-2 d-flex justify-space-between align-center"
            >
              <div class="d-flex flex-column">
                <small class="grey--text">Дата</small>
                  {{$store.state.header.countItemList[0].people > 0 ? `${$store.state.header.countItemList[0].people} гостей` : 'Гости'}}
              </div>

              <svg
                  v-on="on"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 22C3 21.4477 3.44771 21 4 21H20C20.5523 21 21 21.4477 21 22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 3 22Z"
                    fill="#777E90"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.7071 3.12126C16.3166 2.73074 15.6834 2.73074 15.2929 3.12126L14.4142 3.99991L18 7.5857L18.8787 6.70705C19.2692 6.31652 19.2692 5.68336 18.8787 5.29284L16.7071 3.12126ZM6.91425 11.4999L13 5.41412L16.5858 8.99991L10.5 15.0857L6.91425 11.4999ZM5.50003 12.9142L5 13.4142V17H8.58579L9.08582 16.4999L5.50003 12.9142ZM13.8787 1.70705C15.0503 0.535476 16.9497 0.535476 18.1213 1.70705L20.2929 3.87862C21.4645 5.0502 21.4645 6.94969 20.2929 8.12126L10 18.4142C9.62493 18.7893 9.11622 19 8.58579 19H5C3.89543 19 3 18.1045 3 17V13.4142C3 12.8838 3.21071 12.375 3.58579 12L13.8787 1.70705Z"
                      fill="#777E90"/>
              </svg>
            </v-card>

          </template>
          <div >
            <CountCardList/>
          </div>
        </v-menu>
      </v-col>
      <v-col cols="12" class="title_confirm poppins black--text">Оплатить</v-col>
      <v-col cols="12">
        <div class="text-uppercase mb-2">Сохраненная контактная информация</div>
        <v-select
            v-model="$store.state.profileEdit.profile.liveIn"
            placeholder="tam@ui8.net"
            color="secondary"
            outlined
            dense
            class="transparent"
            hide-details
        ></v-select>
      </v-col>
     <v-col cols="12"> <hr class="my-5" style="background: #E6E8EC;"></v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column black--text">
          Кредитная карта
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <div class="d-flex">
          <svg width="34" class="mr-4 cursor" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_631_8219)">
              <path d="M14.8965 11.0735H12.2114L13.8909 0.688965H16.5758L14.8965 11.0735Z" fill="#00579F"/>
              <path d="M24.6293 0.942109C24.0997 0.731994 23.2596 0.5 22.221 0.5C19.5693 0.5 17.7021 1.91399 17.6906 3.93556C17.6686 5.42707 19.0275 6.25549 20.0439 6.75281C21.0827 7.26099 21.4358 7.59269 21.4358 8.04566C21.4253 8.74135 20.5964 9.06203 19.8233 9.06203C18.7513 9.06203 18.1769 8.8967 17.304 8.50965L16.9504 8.34373L16.5747 10.6748C17.2045 10.9617 18.3647 11.2163 19.5693 11.2275C22.3867 11.2275 24.2209 9.83539 24.2427 7.68108C24.2534 6.49894 23.5358 5.59314 21.9888 4.85296C21.0497 4.37782 20.4745 4.05743 20.4745 3.57127C20.4856 3.12931 20.961 2.67663 22.0211 2.67663C22.894 2.65446 23.5354 2.86428 24.0213 3.07425L24.2641 3.18452L24.6293 0.942109Z" fill="#00579F"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4357 0.688965H31.5127L33.6789 11.0734H31.1927C31.1927 11.0734 30.9494 9.88017 30.8723 9.51558H27.4249C27.3252 9.79163 26.8613 11.0734 26.8613 11.0734H24.0439L28.0323 1.55057C28.3087 0.876615 28.7953 0.688965 29.4357 0.688965ZM29.2703 4.4891C29.2703 4.4891 28.4194 6.79802 28.1982 7.3946H30.4301C30.3197 6.8754 29.8112 4.3897 29.8112 4.3897L29.6235 3.49491C29.5445 3.72529 29.4303 4.04201 29.3532 4.25568C29.3009 4.40057 29.2657 4.49806 29.2703 4.4891Z" fill="#00579F"/>
              <path d="M9.96767 0.688965L7.33807 7.77018L7.05072 6.33404C6.56456 4.6769 5.03986 2.87645 3.33838 1.98122L5.747 11.0624H8.58642L12.8069 0.688965H9.96767Z" fill="#00579F"/>
              <path d="M4.8965 0.688965H0.576423L0.532227 0.898787C3.90216 1.76053 6.13399 3.83776 7.05095 6.33448L6.11182 1.56188C5.95721 0.89864 5.48206 0.710843 4.8965 0.688965Z" fill="#FAA61A"/>
            </g>
            <defs>
              <clipPath id="clip0_631_8219">
                <rect width="33.1466" height="10.7275" fill="white" transform="translate(0.532227 0.5)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="26" class=" cursor" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_631_8230)">
              <g clip-path="url(#clip1_631_8230)">
                <path d="M9.44385 1.71094H16.4438V14.2887H9.44385V1.71094Z" fill="#FF5F00"/>
                <path d="M9.88891 8C9.88891 5.44444 11.0889 3.17778 12.9333 1.71111C11.5778 0.644447 9.86669 0 8.00002 0C3.57779 0 0 3.57778 0 8C0 12.4222 3.57779 16 8.00002 16C9.86669 16 11.5778 15.3556 12.9333 14.2889C11.0889 12.8444 9.88891 10.5556 9.88891 8Z" fill="#EB001B"/>
                <path d="M25.8894 8C25.8894 12.4222 22.3116 16 17.8894 16C16.0227 16 14.3116 15.3556 12.9561 14.2889C14.8227 12.8222 16.0005 10.5556 16.0005 8C16.0005 5.44444 14.8005 3.17778 12.9561 1.71111C14.3116 0.644447 16.0227 0 17.8894 0C22.3116 0 25.8894 3.6 25.8894 8Z" fill="#F79E1B"/>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_631_8230">
                <rect width="25.8895" height="16" fill="white"/>
              </clipPath>
              <clipPath id="clip1_631_8230">
                <rect width="25.8895" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </div>
      </v-col>
      <v-col cols="12">
        <div class="text-uppercase mb-2">номер карты</div>
        <v-text-field
            v-model="card"
            placeholder="9224 1111 2222 3333"
            color="secondary"
            outlined
            v-mask="'#### #### #### ####'"
            dense
            class="transparent"
            hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="text-uppercase mb-2">ДАТА ОКОНЧАНИЯ СРОКА</div>
        <v-text-field
            v-model="cardEndDate"
            placeholder="MM / YY"
            color="secondary"
            outlined
            dense
            v-mask="'## / ##'"
            class="transparent"
            hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="text-uppercase mb-2">CVC</div>
        <v-text-field
            v-model="cardCVC"
            placeholder="111"
            color="secondary"
            outlined
            dense
            v-mask="'###'"
            class="transparent"
            hide-details
        ></v-text-field>
      </v-col>
      <v-col>
        <v-checkbox label="Сохранить карту"></v-checkbox>
      </v-col>
      <v-col cols="12" class="title_confirm poppins black--text">Сообщение хозяину</v-col>
      <v-col cols="12" >
        <v-textarea
            color="secondary"
            outlined
            dense
            flat
            hide-details
        ></v-textarea>
      </v-col>
      <v-col>
        <v-btn color="primary" @click="booking()" rounded class="text-none" large>Подтвердить и оплатить</v-btn>
      </v-col>
    </v-row>
    <confirmModal/>
  </title-card>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import CountCardList from "@/modules/HeaderComponents/CountCardIItem/CountCardList";
import confirmModal from "@/modules/ConfirmPayComponents/components/confirmModal";
export default {
  name: "SelectedInfo",
  components: {
    titleCard,
    CountCardList,
    confirmModal
  },
  data:() => ({
    menu1: false,
    people: false,
    card: '',
    cardEndDate: '',
    cardCVC: ''
  }),
  methods: {
    booking() {
      this.$store.dispatch('bookingAccommodation')
    }
  }
}
</script>

<style scoped>
.title_confirm {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.confirm .v-text-field--outlined {
  border: 2px solid #E6E8EC;
  border-radius: 12px;
}
</style>
