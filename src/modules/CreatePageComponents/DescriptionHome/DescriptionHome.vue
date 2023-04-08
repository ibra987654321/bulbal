<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div :style="$vuetify.breakpoint.mobile ? 'max-width: 870px;' : 'min-width: 870px;'">
      <create-card
          title="Описание дома"
          sub-title="Сколько гостей можно разместить в вашем дома?"
      >
      </create-card>
      <v-row class=" py-10">
        <v-col cols="6" sm="3">
          <div class="black--text select_title">
            СПАЛЬНИ
          </div>
          <div class="d-flex align-center border">
            <v-select
                v-model="descriptionHome.bedRoom"
                solo
                flat
                :items="[1,2,3,4,5,6,7,8,9,10]"
                hide-details
                dense
            ></v-select>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div class="black--text select_title">
            КРОВАТИ
          </div>
          <div class="d-flex align-center border">
            <v-select
                v-model="descriptionHome.beds"
                solo
                flat
                :items="[1,2,3,4,5,6,7,8,9,10]"
                hide-details
                dense
            ></v-select>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div class="black--text select_title">
            ГОСТИ
          </div>
          <div class="d-flex align-center border">
            <v-select
                v-model="descriptionHome.guests"
                solo
                flat
                :items="[1,2,3,4,5,6,7,8,9,10]"
                hide-details
                dense
            ></v-select>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div class="black--text select_title">
            ДУШЕВАЯ
          </div>
          <div class="d-flex align-center border">
            <v-select
                v-model="descriptionHome.shower"
                solo
                flat
                :items="[1,2,3,4,5,6,7,8,9,10]"
                hide-details
                dense
            ></v-select>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";

export default {
  name: "DescriptionHome",
  components: {
    CreateCard
  },
  data: () => ({
    descriptionHome: {
      bedRoom: '',
      beds: '',
      guests: '',
      shower: '',
    }
  })
}
</script>

<style scoped>
.block {
  max-width: 870px;
}
.select_title {
  font-size: 12px;
}
</style>
