<template>
  <v-row>
    <v-col cols="12">
      <address-component></address-component>
    </v-col>
    <v-col cols="12">
      <name-of-house></name-of-house>
    </v-col>
    <v-col cols="12">
      <type-of-advantages></type-of-advantages>
    </v-col>
<!--    <v-col cols="12">-->
<!--      <description-home></description-home>-->
<!--    </v-col>-->
<!--    <v-col cols="12">-->
<!--      <download-photo></download-photo>-->
<!--    </v-col>-->
    <v-col cols="12" class="d-flex flex-column align-center ">
      <div
          :class="$vuetify.breakpoint.mobile ? '' : 'width'"
          class="d-flex justify-space-around my-lg-16"
      >
        <v-btn
            color="primary"
            class="text-none px-3 save_btn"
            rounded
            @click="$emit('save', 'house')"
        >
          Сохранить
        </v-btn>
        <v-btn
            class="text-none px-3"
            rounded
            outlined
        >
          Автосохранение
        </v-btn>
      </div>

    </v-col>
  </v-row>
</template>

<script>
import typeOfAdvantages from "@/modules/CreatePageComponents/TypeOfAdvantages/TypeOfAdvantages";
import addressComponent from "@/modules/CreatePageComponents/AddressComponent/AddressComponent";
import nameOfHouse from "@/modules/CreatePageComponents/NameOfHouse/NameOfHouse";
import downloadPhoto from "@/modules/CreatePageComponents/DownloadPhoto/DownloadPhoto";
import DescriptionHome from "@/modules/CreatePageComponents/DescriptionHome/DescriptionHome";
export default {
  name: "HouseComponent",
  components: {typeOfAdvantages, addressComponent, nameOfHouse, downloadPhoto, DescriptionHome},
  data: () => ({
  })
}
</script>

<style scoped>
.width {
  min-width:870px
}
.save_btn {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  padding: 20px 30px !important;
}
</style>
