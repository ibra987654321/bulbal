<template>
  <v-row class="mt-10">
    <v-col  cols="12" sm="4">
      <OwnerInfoForReport/>
    </v-col>
    <v-col  cols="12" sm="8" >
      <DescriptionProfileReport/>
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
export default {
  name: "Report",
  components: {
    DescriptionProfileReport,
    OwnerInfoForReport,
    indicators
  }
}
</script>

<style scoped>

</style>
