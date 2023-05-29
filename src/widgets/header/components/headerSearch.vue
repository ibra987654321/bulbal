<template>
      <div
          class="d-flex align-center border"
      >
        <v-menu
            offset-y
            nudge-left="100"
            transition="slide-y-transition"
            :close-on-content-click="false"
            bottom
            rounded="xl"
            :min-width="$vuetify.breakpoint.mobile ? null : 508"
            v-model="place"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                class="text-capitalize"
                v-on="on"
                :class="$vuetify.breakpoint.mobile ? 'px-0' : 'px-3'"
            >
              <svg class="icon_in_btn" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4969 1.74319C14.9319 1.14528 16.3715 2.58489 15.7736 4.01989L11.6485 13.9202C10.8418 15.8564 8.00403 15.5291 7.65919 13.4602L7.14454 10.3723L4.05665 9.85764C1.98764 9.51278 1.66038 6.67508 3.59657 5.86834L13.4969 1.74319ZM14.4882 3.48431C14.6078 3.19731 14.3198 2.90939 14.0328 3.02897L4.13248 7.15411C3.48708 7.42303 3.59617 8.36893 4.28583 8.48387L7.37374 8.99853C7.96076 9.09638 8.42077 9.55635 8.51862 10.1434L9.03326 13.2313C9.1482 13.921 10.0941 14.03 10.363 13.3847L14.4882 3.48431Z" fill="#B1B5C3"/>
              </svg>
              {{$store.state.header.selectedPlace ? $store.state.header.selectedPlace : 'Место'}}
            </v-btn>
          </template>
          <div>
            <SelectPlace @selected="place = false"/>
          </div>
        </v-menu>
        <v-menu
            offset-y
            nudge-left="200"
            transition="slide-y-transition"
            :close-on-content-click="false"
            bottom
            rounded="xl"
            v-model="date"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                class="text-capitalize date"
                v-on="on"
                :class="$vuetify.breakpoint.mobile ? 'px-0' : 'px-3'"
            >
              <svg class="icon_in_btn" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8271 7.13928H7.07747C6.69286 7.13928 6.38106 7.45108 6.38106 7.83569V16.1925C6.38106 16.5771 6.69286 16.8889 7.07747 16.8889H16.8271C17.2117 16.8889 17.5235 16.5771 17.5235 16.1925V7.83569C17.5235 7.45107 17.2117 7.13928 16.8271 7.13928ZM7.07749 5.74646C5.92365 5.74646 4.98828 6.68183 4.98828 7.83566V16.1925C4.98828 17.3463 5.92365 18.2817 7.07749 18.2817H16.8271C17.981 18.2817 18.9163 17.3463 18.9163 16.1925V7.83566C18.9163 6.68183 17.981 5.74646 16.8271 5.74646H7.07749Z" fill="#B1B5C3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5595 11.3177C10.1749 11.3177 9.86313 11.6295 9.86313 12.0141C9.86313 12.3987 10.1749 12.7105 10.5595 12.7105H15.4343C15.819 12.7105 16.1307 12.3987 16.1307 12.0141C16.1307 11.6295 15.819 11.3177 15.4343 11.3177H10.5595ZM8.47033 14.1033C8.08572 14.1033 7.77393 14.4151 7.77393 14.7997C7.77393 15.1843 8.08572 15.4961 8.47033 15.4961H12.6487C13.0333 15.4961 13.3451 15.1843 13.3451 14.7997C13.3451 14.4151 13.0333 14.1033 12.6487 14.1033H8.47033Z" fill="#B1B5C3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47033 4.35372C8.08572 4.35372 7.77393 4.66551 7.77393 5.05012V7.83573C7.77393 8.22033 8.08572 8.53213 8.47033 8.53213C8.85494 8.53213 9.16673 8.22033 9.16673 7.83573V5.05012C9.16673 4.66551 8.85494 4.35372 8.47033 4.35372ZM15.4343 4.3537C15.0497 4.3537 14.7379 4.66549 14.7379 5.0501V7.83571C14.7379 8.22031 15.0497 8.53211 15.4343 8.53211C15.8189 8.53211 16.1307 8.22031 16.1307 7.83571V5.0501C16.1307 4.66549 15.8189 4.3537 15.4343 4.3537Z" fill="#B1B5C3"/>
              </svg>
              <div v-if="!showDate"> Дата</div>
              <div v-else>
                <div v-if="!$vuetify.breakpoint.mobile">
                  {{$store.state.header.range.start | date}}
                  -
                  {{$store.state.header.range.end | date}}
                </div>
                <div v-else>
                  {{$store.state.header.range.start | dmobi}}
                  -
                  {{$store.state.header.range.end | dmobi}}
                </div>
              </div>
            </v-btn>
          </template>
          <div>
            <vc-date-picker class="mx-2" v-model="$store.state.header.range" :columns="columns" color="teal" is-range/>
          </div>
        </v-menu>
        <div>
          <v-menu
              offset-y
              nudge-left="100"
              transition="slide-y-transition"
              :close-on-content-click="false"
              bottom
              rounded="xl"
              v-model="people"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  text
                  class="text-capitalize guests d-flex align-center"
                  v-on="on"
                  :class="$vuetify.breakpoint.mobile ? 'px-0' : 'px-3'"
              >
                <svg class="icon_in_btn" width="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6099 12.0699C8.85611 12.0699 6.62372 14.3272 6.62372 17.1117V18.5523C6.62372 18.9501 6.3048 19.2725 5.91141 19.2725C5.51801 19.2725 5.1991 18.9501 5.1991 18.5523V17.1117C5.1991 13.5316 8.06931 10.6293 11.6099 10.6293C15.1505 10.6293 18.0207 13.5316 18.0207 17.1117V18.5523C18.0207 18.9501 17.7018 19.2725 17.3084 19.2725C16.915 19.2725 16.5961 18.9501 16.5961 18.5523V17.1117C16.5961 14.3272 14.3637 12.0699 11.6099 12.0699Z" fill="#B1B5C3"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4667 10.6293C13.0051 10.6293 14.2523 9.38219 14.2523 7.84374C14.2523 6.30529 13.0051 5.05814 11.4667 5.05814C9.92823 5.05814 8.68107 6.30529 8.68107 7.84374C8.68107 9.38219 9.92823 10.6293 11.4667 10.6293ZM11.4667 12.0222C13.7744 12.0222 15.6451 10.1514 15.6451 7.84375C15.6451 5.53608 13.7744 3.66534 11.4667 3.66534C9.15907 3.66534 7.28833 5.53608 7.28833 7.84375C7.28833 10.1514 9.15907 12.0222 11.4667 12.0222Z" fill="#B1B5C3"/>
                </svg>
                {{$store.state.header.countItemList[0].people === 1 ? `${$store.state.header.countItemList[0].people} гость` : $store.state.header.countItemList[0].people > 1 && $store.state.header.countItemList[0].people < 5 ?  `${$store.state.header.countItemList[0].people} гостя` : `${$store.state.header.countItemList[0].people} гостей` }}
              </v-btn>
            </template>
            <div >
             <CountCardList/>
            </div>
          </v-menu>
        </div>
        <div class="d-flex align-center justify-center">
          <svg @click="search()" v-if="$vuetify.breakpoint.mobile" width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.20129 16.1716C12.8971 16.1716 15.8932 13.1755 15.8932 9.47967C15.8932 5.78384 12.8971 2.78778 9.20129 2.78778C5.50546 2.78778 2.5094 5.78384 2.5094 9.47967C2.5094 13.1755 5.50546 16.1716 9.20129 16.1716Z" stroke="#77836A" stroke-width="1.67297" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5661 17.8446L13.9274 14.2059" stroke="#77836A" stroke-width="1.67297" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <v-btn
              v-else
              color="primary"
              @click="search()"
              small
              class="border_r search_btn text-none"
          >
            <svg width="21" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M9.20129 16.1716C12.8971 16.1716 15.8932 13.1755 15.8932 9.47967C15.8932 5.78384 12.8971 2.78778 9.20129 2.78778C5.50546 2.78778 2.5094 5.78384 2.5094 9.47967C2.5094 13.1755 5.50546 16.1716 9.20129 16.1716Z"
                  stroke="white" stroke-width="1.67297" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5661 17.8446L13.9274 14.2059" stroke="white" stroke-width="1.67297" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
            Найти
          </v-btn>
        </div>
      </div>
</template>

<script>
import CountCardList from "@/modules/HeaderComponents/CountCardIItem/CountCardList";
import SelectPlace from "@/modules/HeaderComponents/SelectPlace/SelectPlace";
import { useScreens } from 'vue-screen-utils';
export default {
  name: "headerSearch",
  components: {
    CountCardList,
    SelectPlace
  },
  data:() => ({
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
        this.$store.commit('changeRange', v)
        this.date = false
      }
    },
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
.border {
  height: 46px;
  border: 1px solid #6C7B6B;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  transition-duration: 0.5s;
}
.icon_in_btn {
  margin-right: 12px;
}
</style>
<style>
.border .v-btn__content {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Inter';
}
.border .date {
  border-radius: 0px;
  border-right: 1px solid #C1C1C1;
  border-left: 1px solid #C1C1C1;
}
.border .guests {
  width: 100%;
  min-width: 161px !important;
}
.border .guests .v-btn__content{
  justify-content: flex-start;
}
.search_btn  {
  text-transform: none;
  font-weight: normal;
  width: 100%;
  height: 100%;
  min-height: 33px;
  min-width: 90px;
  margin-right: 9.01px;
}
.search_btn  .v-btn__content {
  font-size: 14px !important;
}
@media only screen and (max-width: 600px) {
  .border {
    max-width: 400px;
  }
  .border .date .v-btn__content {
   padding: 0 15px;
  }
  .border .v-btn__content {
    font-size: 10px;
    height: 24px;
  }
  .border .v-btn {
    height: 24px !important;
  }
  .icon_in_btn {
    margin-right: 2px !important;
  }
  .border .guests {
    width: 100%;
    min-width: 65px !important;
  }
}
.vc-pane-layout {
  padding: 20px !important;
}
</style>
