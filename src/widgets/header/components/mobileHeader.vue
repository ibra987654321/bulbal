<template>
  <v-menu
      offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="mobile_search " :class="!showDetail ? 'd-flex align-center' : ''"  v-on="on">
        <div class="d-flex align-center">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.70821 15.0417C12.206 15.0417 15.0415 12.2061 15.0415 8.70833C15.0415 5.21053 12.206 2.375 8.70821 2.375C5.21041 2.375 2.37488 5.21053 2.37488 8.70833C2.37488 12.2061 5.21041 15.0417 8.70821 15.0417Z" stroke="#77836A" stroke-width="1.67297" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.6248 16.6254L13.181 13.1816" stroke="#77836A" stroke-width="1.67297" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="mobile_right my-auto" v-if="showDetail">
            <div class="mobile_place">{{$store.state.header.selectedPlace}}</div>
            <div class="d-flex">
              <div class="mobile_date">
                {{$store.state.header.range.start | dmobi}}
                -
                {{$store.state.header.range.end | dmobi}}
              </div>
              <div class="mobile_guests" >
                {{$store.state.header.countItemList[0].people}} взрослых
              </div>
            </div>
          </div>
          <div class="mobile_right my-auto" v-else>
            <div class="mobile_place ">Поиск</div>
          </div>
        </div>
      </div>
    </template>
    <div class="mobile_card">
      <v-menu
          offset-y
          transition="slide-y-transition"
          :close-on-content-click="false"
          bottom
          rounded="xl"
          :min-width="$vuetify.breakpoint.mobile ? null : 508"
          v-model="place"
      >
        <template v-slot:activator="{ on, attrs }">
          <div
              v-on="on"
              class="mobile_item d-flex align-center"
          >
            <svg class="icon_in_btn" width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09368 0.783649C7.93578 0.432776 8.78057 1.27758 8.42969 2.11967L6.00895 7.92946C5.53556 9.06567 3.8703 8.8736 3.66794 7.65949L3.36594 5.84742L1.55388 5.54542C0.339731 5.34305 0.147683 3.67781 1.28389 3.20439L7.09368 0.783649ZM7.67526 1.8055C7.74543 1.63708 7.57645 1.46812 7.40804 1.5383L1.59826 3.95904C1.21953 4.11685 1.28354 4.67193 1.68825 4.73938L3.50032 5.04139C3.8448 5.09881 4.11474 5.36874 4.17216 5.71324L4.47417 7.52531C4.54162 7.93001 5.0967 7.99401 5.25449 7.6153L7.67526 1.8055Z" fill="#B1B5C3"/>
            </svg>

            <div class="mobile_select__text">
              {{$store.state.header.selectedPlace ? $store.state.header.selectedPlace : 'Куда хотите отправиться? '}}
            </div>
          </div>
        </template>
        <div>
          <SelectPlace/>
        </div>
      </v-menu>
      <v-menu
          offset-y
          transition="slide-y-transition"
          :close-on-content-click="false"
          bottom
          rounded="xl"
          v-model="date"
      >
        <template v-slot:activator="{ on, attrs }">
          <div
              class="mobile_item d-flex align-center date"
              v-on="on"
          >
            <svg class="icon_in_btn" width="13" height="13" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8271 7.13928H7.07747C6.69286 7.13928 6.38106 7.45108 6.38106 7.83569V16.1925C6.38106 16.5771 6.69286 16.8889 7.07747 16.8889H16.8271C17.2117 16.8889 17.5235 16.5771 17.5235 16.1925V7.83569C17.5235 7.45107 17.2117 7.13928 16.8271 7.13928ZM7.07749 5.74646C5.92365 5.74646 4.98828 6.68183 4.98828 7.83566V16.1925C4.98828 17.3463 5.92365 18.2817 7.07749 18.2817H16.8271C17.981 18.2817 18.9163 17.3463 18.9163 16.1925V7.83566C18.9163 6.68183 17.981 5.74646 16.8271 5.74646H7.07749Z" fill="#B1B5C3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5595 11.3177C10.1749 11.3177 9.86313 11.6295 9.86313 12.0141C9.86313 12.3987 10.1749 12.7105 10.5595 12.7105H15.4343C15.819 12.7105 16.1307 12.3987 16.1307 12.0141C16.1307 11.6295 15.819 11.3177 15.4343 11.3177H10.5595ZM8.47033 14.1033C8.08572 14.1033 7.77393 14.4151 7.77393 14.7997C7.77393 15.1843 8.08572 15.4961 8.47033 15.4961H12.6487C13.0333 15.4961 13.3451 15.1843 13.3451 14.7997C13.3451 14.4151 13.0333 14.1033 12.6487 14.1033H8.47033Z" fill="#B1B5C3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47033 4.35372C8.08572 4.35372 7.77393 4.66551 7.77393 5.05012V7.83573C7.77393 8.22033 8.08572 8.53213 8.47033 8.53213C8.85494 8.53213 9.16673 8.22033 9.16673 7.83573V5.05012C9.16673 4.66551 8.85494 4.35372 8.47033 4.35372ZM15.4343 4.3537C15.0497 4.3537 14.7379 4.66549 14.7379 5.0501V7.83571C14.7379 8.22031 15.0497 8.53211 15.4343 8.53211C15.8189 8.53211 16.1307 8.22031 16.1307 7.83571V5.0501C16.1307 4.66549 15.8189 4.3537 15.4343 4.3537Z" fill="#B1B5C3"/>
            </svg>
            <div v-if="!showDate" class="mobile_select__text"> Дата</div>
            <div v-else class="mobile_select__text">
              <div>
                {{$store.state.header.range.start | dmobi}}
                -
                {{$store.state.header.range.end | dmobi}}
              </div>
            </div>
          </div>
        </template>
        <div class="mobile_date">
          <vc-date-picker class="" v-model="$store.state.header.range" :columns="columns" color="teal" is-range/>
        </div>
      </v-menu>
      <v-menu
          offset-y
          transition="slide-y-transition"
          :close-on-content-click="false"
          bottom
          rounded="xl"
          v-model="people"
      >
        <template v-slot:activator="{ on, attrs }">
          <div
              class="guests d-flex align-center"
              v-on="on"
          >
            <svg class="icon_in_btn" width="13" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6099 12.0699C8.85611 12.0699 6.62372 14.3272 6.62372 17.1117V18.5523C6.62372 18.9501 6.3048 19.2725 5.91141 19.2725C5.51801 19.2725 5.1991 18.9501 5.1991 18.5523V17.1117C5.1991 13.5316 8.06931 10.6293 11.6099 10.6293C15.1505 10.6293 18.0207 13.5316 18.0207 17.1117V18.5523C18.0207 18.9501 17.7018 19.2725 17.3084 19.2725C16.915 19.2725 16.5961 18.9501 16.5961 18.5523V17.1117C16.5961 14.3272 14.3637 12.0699 11.6099 12.0699Z" fill="#B1B5C3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4667 10.6293C13.0051 10.6293 14.2523 9.38219 14.2523 7.84374C14.2523 6.30529 13.0051 5.05814 11.4667 5.05814C9.92823 5.05814 8.68107 6.30529 8.68107 7.84374C8.68107 9.38219 9.92823 10.6293 11.4667 10.6293ZM11.4667 12.0222C13.7744 12.0222 15.6451 10.1514 15.6451 7.84375C15.6451 5.53608 13.7744 3.66534 11.4667 3.66534C9.15907 3.66534 7.28833 5.53608 7.28833 7.84375C7.28833 10.1514 9.15907 12.0222 11.4667 12.0222Z" fill="#B1B5C3"/>
            </svg>
            <div class="mobile_select__text">
              {{$store.state.header.countItemList[0].people > 0 ? `${$store.state.header.countItemList[0].people} гостей` : 'Гости'}}
            </div>
          </div>
        </template>
        <div >
          <CountCardList/>
        </div>
      </v-menu>
      <v-btn color="primary" @click="search()" class="text-none mobile_search__btn">Найти</v-btn>
    </div>
  </v-menu>
</template>

<script>
import CountCardList from "@/modules/HeaderComponents/CountCardIItem/CountCardList";
import SelectPlace from "@/modules/HeaderComponents/SelectPlace/SelectPlace";
import {useScreens} from "vue-screen-utils";
export default {
  name: "mobileHeader",
  components: {
    CountCardList,
    SelectPlace
  },
  data:() => ({
    showDetail: false,
    showDate: false,
    date: false,
    place: false,
    people: false,
    selectPlaceType: 'searchAccommodations'
  }),
  watch: {
    '$store.state.header.range'(v) {
      if (v) {
        this.showDate = true
        this.showDetail = true
        this.$store.commit('changeRange', v)
        this.date = false
      }
    },
    '$store.state.header.selectedPlace'(v) {
      if (v && this.$store.state.header.selectedTypeOfPlace) {
        this.showDetail = true
        this.place = false
        this.date = true
      }
    },
    '$store.state.header.selectedTypeOfPlace'(v) {
      if (v === 'Комната') {
        this.$store.commit('setSelectType', 'searchAccommodations')
      } else {
        this.$store.commit('setSelectType', 'searchBeds')
      }
      if (v && this.$store.state.header.selectedPlace) {
        this.showDetail = true
        this.place = false
        this.date = true
      }
    },
    date(v) {
      if (!v) {
        this.people = true
      }
    }
  },
  methods: {
    search() {
      if (this.$router.currentRoute.name !== 'search') {
        this.$router.push({name:'search'})
        return
      }
      this.$store.dispatch('searchByFilter', this.$store.state.header.selectPlaceType)
    },
  },
  setup() {
    const { mapCurrent } = useScreens({
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    });
    const columns = mapCurrent({ lg: 2 }, 1);
    const expanded = mapCurrent({ lg: false }, true);
    return {
      columns,
      expanded
    }
  }
}
</script>

<style scoped>
.mobile_search {
  font-family: 'poppins_regular', sans-serif;
  border: 1px solid #A3B194;
  border-radius: 4px;
  width: 100%;
  max-width: 293px;
  height: 35px;
  padding-left:12px;
  padding-top: 2px;
  line-height: 15px;
  font-style: normal;
  font-weight: 500;
}
.mobile_card {
  padding: 10px;
  border-radius: 0 0 21px 21px !important;
}
.mobile_right {
  margin-left: 12px;
}
.mobile_place {
  font-size: 12px;
  color: #000000;
}
.mobile_date {
  font-size: 10px;
  color: #696969
}
.mobile_guests {
  margin-left: 9px;
  font-size: 10px;
  color: #696969;
}

.mobile_select__text {
  font-size: 10px;
  line-height: 13px;
  color: #777A81;
  margin: 10px 0;
}
.mobile_item {
  border-bottom:0.71px solid #D9DBDF;
}
.mobile_search__btn {
  font-family: 'poppins_regular', sans-serif;
  font-size: 12px;
  line-height: 22px;
  color: #FFFFFF;
  width: 100%;
  border-radius: 0px 0px 16px 16px ;
}
</style>
<style>
.v-menu__content {
  border-radius: 0 0 21px 21px !important;
}
.mobile_date .vc-day-content, .vc-weekday {
  font-size: 12px !important;
}
.mobile_date .vc-title {
  font-size: 14px !important;
}
.mobile_card {
  background-color: #FFFFFF;
  padding: 10px;
}
</style>
