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
              :maxlength="30"
              :counter="30"
          ></v-textarea>
        </div>
      </create-card>
      <v-row class=" py-10">
        <v-col cols="12" sm="6">
          <div class="black--text select_title">
            Цена
          </div>
          <div class="d-flex align-center border">
            <v-text-field
                v-model="$store.state.create.createObject.price"
                solo
                type="number"
                flat
                hide-details
                dense
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
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
  data:() => ({
    price: 800,
  }),
  mounted() {
    this.$store.dispatch('getTypeOfHouse')
  }
}
</script>

<style>
.border {
  padding: 3px;
  border: 1px solid #A3B194;
  border-radius: 12px;
}
.select_title {
  font-size: 12px;
  text-transform: uppercase;
}
</style>
