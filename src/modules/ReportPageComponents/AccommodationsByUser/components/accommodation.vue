<template>
  <div class="accommodation_card mx-4">
    <accommodationImg :id="accommodation.id"/>
    <div class="title_accommodation">{{accommodation.titleOfAccommodation}}</div>
  </div>
</template>

<script>
import accommodationImg from "@/modules/ReportPageComponents/AccommodationsByUser/components/accommodationImg";
export default {
  name: "accommodation",
  components: {accommodationImg},
  props: {
    accommodation: Object
  }
}
</script>

<style scoped>
.accommodation_card {
  width: 100%;
  max-width: 518px;
}
.title_accommodation {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-top: 14px;
  color: #000000;
}
</style>
