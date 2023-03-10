<template>
  <title-card
      title="Lorem ipsum dolor sit consectetur adipisicing elit."
      :small="true"
  >
    <div class="d-flex align-center">
      <div>
        Hosted by
      </div>
      <v-avatar class="mx-3" color="indigo" size="30">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <div class="font-weight-bold">
        Азамат Байсалов
      </div>
    </div>

  </title-card>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
export default {
  name: "NameTitleDetailPage",
  components: {
    titleCard
  }
}
</script>

<style scoped>

</style>
