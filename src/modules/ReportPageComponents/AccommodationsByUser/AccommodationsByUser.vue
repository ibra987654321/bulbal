<template>
  <div class="my-16 d-flex">
    <accommodation v-for="accommodation in profileDetail.user.accommodation" :accommodation="accommodation"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {decodeJWT} from "@/helpers/helpers";
import accommodation from "@/modules/ReportPageComponents/AccommodationsByUser/components/accommodation";

export default {
  name: "AccommodationsByUser",
  components: {
    accommodation,
  },
  computed: {
    ...mapState(['profileDetail'])
  },
  mounted() {
    this.$store.dispatch('getUserById', decodeJWT().userId)
  },
}
</script>

<style scoped>

</style>
