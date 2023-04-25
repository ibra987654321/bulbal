<template>
       <v-card class="booking_card_fixed mx-2">
         <v-card-title class="d-flex justify-space-between">
           <div class="d-flex flex-column justify-space-between">
             <div class="d-flex">
               <div class="font-weight-bold mr-1">{{ priceForBooking }}сом </div> \ <small class="ml-1 poppins"> ночь</small>
             </div>
             <reviews rate="4.6" count="56" class="poppins"></reviews>

           </div>
           <v-btn color="primary" @click.stop="$store.state.mobileBook = !$store.state.mobileBook"  class="ml-3  text-capitalize" style="max-width: 205px" rounded>
             Бронировать
           </v-btn>
         </v-card-title>
       </v-card>
</template>
<script>
import {mapGetters} from "vuex";
import reviews from "@/entities/reviews/reviews";

export default {
  name: "BookingForMobile",
  components: {reviews},
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'About', icon: 'mdi-forum' },
    ],
  }),
  computed: {
    ...mapGetters(['priceForBooking', 'getQuantityPersons']),
  },
  watch: {
    '$store.state.header.range'(v) {
      if (v) {
        this.$store.commit('changeRange', v)
        this.menu1 = false
        this.calculator()

      }
    },
    priceForBooking(v) {
      this.pricer = v
    },
    getQuantityPersons(v) {
      if (v) {
        this.$store.commit('setPerson', v)
        this.calculator()
      }
    },
  },
  mounted() {
    this.calculator()
  },

  methods: {
    book() {
      this.$router.push({name: "confirm"})
    },
    rangeDate() {
      const timeDiff = Math.abs(this.$store.state.header.range.end.getTime() - this.$store.state.header.range.start.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    },
    calculator(price) {
      const p = price ? price : this.priceForBooking
      this.items[0].text = `${p} x ${this.rangeDate()} ночей на ${this.$store.state.header.countItemList[0].people} человек`
      this.items[0].count = this.$store.state.postDetail.createObject.price * this.rangeDate() * this.$store.state.header.countItemList[0].people
      this.items[2].count = this.items[0].count + this.items[1].count
      return this.priceForBooking
    }
  }
}
</script>

<style scoped>
.booking_card_fixed {
  z-index: 5;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
