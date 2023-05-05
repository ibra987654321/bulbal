<template>
  <v-row class="mt-10">
    <v-col  cols="12" sm="4">
      <OwnerInfoForReport/>
    </v-col>
    <v-col  cols="12" sm="8" >
      <DescriptionProfileReport/>
    </v-col>
    <v-col  cols="12" sm="12" >
      <AccommodationsByUser/>
    </v-col>
    <v-col cols="12">
      <indicators/>
    </v-col>
  </v-row>
</template>

<script>
import OwnerInfoForReport from "@/modules/ReportPageComponents/OwnerInfoForReport/OwnerInfoForReport";
import DescriptionProfileReport from "@/modules/ReportPageComponents/DescriptionProfileReport/DescriptionProfileReport";
import indicators from "@/modules/ReportPageComponents/Indicators/indicators";
import AccommodationsByUser from "@/modules/ReportPageComponents/AccommodationsByUser/AccommodationsByUser";
export default {
  name: "Report",
  components: {
    DescriptionProfileReport,
    OwnerInfoForReport,
    indicators,
    AccommodationsByUser
  }
}
</script>

<style scoped>

</style>
