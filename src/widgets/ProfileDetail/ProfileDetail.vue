<template>
  <v-row class="mt-10">
    <v-col  cols="12" sm="4">
      <OwnerInfoProfileDetail/>
    </v-col>
    <v-col  cols="12" sm="8" >
     <DescriptionProfileDetail/>
    </v-col>
  </v-row>
</template>

<script>
import OwnerInfoProfileDetail from "@/modules/ProfileDetailComponents/OwnerInfoProfileDetail/OwnerInfoProfileDetail";
import DescriptionProfileDetail
  from "@/modules/ProfileDetailComponents/DescriptionProfileDetail/DescriptionProfileDetail";
export default {
  name: "ProfileDetail",
  components: {
    OwnerInfoProfileDetail,
    DescriptionProfileDetail
  }
}
</script>

<style scoped>

</style>
