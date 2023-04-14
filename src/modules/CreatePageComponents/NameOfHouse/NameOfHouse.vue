<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div :style="$vuetify.breakpoint.mobile ? 'max-width: 870px;' : 'min-width: 870px;'">
      <create-card
          title="Название вашего гостевого дома"
          sub-title="Придумайте короткое название. Вы всегда сможете его отредактировать."
      >
        <div class="d-flex align-center">
          <v-text-field
              v-model="$store.state.create.createObject.titleOfAccommodation"
              outlined
              hide-details
          ></v-text-field>
        </div>
      </create-card>
      <create-card
          class="mt-4"
          sub-title="Обращение своим будущим гостям "
      >
        <div class="d-flex align-center">
          <v-textarea
              v-model="$store.state.create.createObject.fullDescriptionOfAccommodation"
              outlined
          ></v-textarea>
        </div>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";

export default {
  name: "NameOfHouse",
  components: {
    CreateCard
  },
  mounted() {
    this.$store.dispatch('getTypeOfHouse')
  }
}
</script>

<style>
.border {
  padding: 3px;
  border: 2px solid #A3B194;
  border-radius: 12px;
}
.select_title {
  font-size: 12px;
  text-transform: uppercase;
}
</style>
