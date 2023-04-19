<template>
  <v-row>
    <v-col cols="12" sm="6">
      <SelectedInfo/>
    </v-col>
    <v-col cols="12" sm="6">
      <BookedCard/>
    </v-col>
  </v-row>
</template>

<script>
import SelectedInfo from "@/modules/ConfirmPayComponents/SelectedInfo/SelectedInfo";
import BookedCard from "@/modules/ConfirmPayComponents/BookedCard/BookedCard";
export default {
  name: "index",
  components: {
    SelectedInfo,
    BookedCard
  }
}
</script>

<style scoped>

</style>
