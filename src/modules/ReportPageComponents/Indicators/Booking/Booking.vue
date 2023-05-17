<template>
  <div class="book_report">
    <div class="d-flex book_select">
      <v-select
          class="year_select"
          outlined
          hide-details
          v-model="$store.state.reportIndex.bookingReport.currentYear"
          :items="$store.state.reportIndex.bookingReport.yearsArray"
      ></v-select>
      <v-select
          class="month_select"
          outlined
          hide-details
          v-model="$store.state.reportIndex.bookingReport.currentMonth"
          :items="$store.state.reportIndex.bookingReport.monthArray"
          item-text="name"
          item-value="number"
      ></v-select>
    </div>
    <div v-if="!profileDetail.user.bookings.length">У вас брони нету</div>
    <div v-else>
      <v-row class="d-flex align-center">
        <v-col cols="1">Номера</v-col>
        <v-col cols="11" class="title_card">
          <div v-for="item in calendar" class="day_title  item_col">
            <div class="text-center">
              <div class="week_item">
                {{item.week}}
              </div>
              <div class="date_item">
                {{dateFilter(item.date)}}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>


<!--      <v-row v-for="item in bookings" class="">-->
<!--        <v-col cols="1" class="book_item_title">-->
<!--          {{item.bookTitle}}-->
<!--        </v-col>-->
<!--        <v-col cols="11" class="d-flex">-->
<!--          <div-->
<!--              v-for="i in calendar"-->
<!--              class="item_col"-->
<!--              :class="(resetTimeToZero(i.date).getTime() >= resetTimeToZero(new Date(item.checkIn)).getTime() && resetTimeToZero(i.date).getTime() <= resetTimeToZero(new Date(item.checkOut)).getTime()) && item.paymentStatus ? 'red' : (resetTimeToZero(i.date).getTime() >= resetTimeToZero(new Date(item.checkIn)).getTime() && resetTimeToZero(i.date).getTime() <= resetTimeToZero(new Date(item.checkOut)).getTime()) && !item.paymentStatus ? 'green' : ''"-->
<!--          >-->
<!--          </div>-->
<!--        </v-col>-->
<!--      </v-row>-->

      <v-row v-for="item in profileDetail.user.bookings" class="">
        <v-col cols="1" class="book_item_title">
          {{item.bookingStatus}}
        </v-col>
        <v-col cols="11" class="d-flex">
          <div
              v-for="i in calendar"
              class="item_col"
              :class="(resetTimeToZero(i.date).getTime() >= resetTimeToZero(new Date(item.checkIn)).getTime() && resetTimeToZero(i.date).getTime() <= resetTimeToZero(new Date(item.checkOut)).getTime()) ? 'red' :  ''"
          >
          </div>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>

import {mapGetters, mapState} from "vuex";

export default {
  name: "Booking",
  data: () => ({
    "bookings": [
      {
        "id": 0,
        "bookingStatus": true,
        "bookTitle": "Место 6х",
        "paymentStatus": true,
        "checkIn": "2023-05-01T17:59:00.000Z",
        "checkOut": "2023-05-05T10:22:17.738Z",
        "bookingTime": "2023-05-01T10:22:17.738Z",
        "guests": 0,
        "rentPayment": 0,
        "commission": 0,
        "user_id": 0
      },
      {
        "id": 0,
        "bookingStatus": true,
        "bookTitle": "Комната 2х",
        "paymentStatus": false,
        "checkIn": "2023-05-15T10:22:17.738Z",
        "checkOut": "2023-05-25T10:22:17.738Z",
        "bookingTime": "2023-05-01T10:22:17.738Z",
        "guests": 0,
        "rentPayment": 0,
        "commission": 0,
        "user_id": 0
      },
      {
        "id": 0,
        "bookingStatus": true,
        "bookTitle": "Комната lux",
        "paymentStatus": true,
        "checkIn": "2023-05-07T10:22:17.738Z",
        "checkOut": "2023-05-16T10:22:17.738Z",
        "bookingTime": "2023-05-01T10:22:17.738Z",
        "guests": 0,
        "rentPayment": 0,
        "commission": 0,
        "user_id": 0
      }
    ],
  }),
  computed: {
    ...mapGetters(['calendar', 'getCurrentMonth', 'getCurrentYear']),
    ...mapState(['profileDetail'])
  },
  mounted() {
    this.$store.dispatch('initCalendar')
    console.log(this.profileDetail)
  },
  watch: {
    getCurrentMonth() {
      this.$store.dispatch('changeMonth')
    },
    getCurrentYear() {
      this.$store.dispatch('changeMonth')
    }
  },
  methods: {
    dateFilter(value) {
      const options = {}
      options.day = '2-digit'
      return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
    },
    resetTimeToZero(date) {
      date.setHours(0, 0, 0, 0);
      return date;
    }
  }
}
</script>

<style scoped>
.book_select {
  width: 234px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.year_select {
  width: 117px;

  background: #FFFFFF;
  border: 0.640625px solid #D9D9D9;
  border-radius: 6.41px 0px 0px 6.41px;
}
.month_select {
  width: 117px;

  background: #FFFFFF;
  border: 0.640625px solid #D9D9D9;
  border-radius: 0px 6.40625px 6.40625px 0px;
}
.red {
  background-color: #FF3131;
}
.green {
  background-color: #80BF3C;
}
.book_item_title {
  padding-right: 0 !important;
}
.book_report {
  height: 100%;
  min-height: 400px;

}
.book_report .col {
  padding: 0 12px;
}
.title_card {
  display: flex;
}
.item_col {
  border: 0.640625px solid #A9A9A9;
  width: 60px;
  height: 45px;
}
.week_item {
  font-style: normal;
  font-weight: 400;
  font-size: 12.8125px;
  line-height: 19px;
  color: #000000;
}
.date_item {
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 19px;
  color: #000000;
}
</style>
