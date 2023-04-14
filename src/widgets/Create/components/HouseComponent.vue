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
    <v-col cols="12" class="d-flex flex-column align-center ">
      <div
          :class="$vuetify.breakpoint.mobile ? '' : 'width'"
          class="d-flex justify-end my-lg-16"
      >

        <v-btn
            class="text-none px-3"
            text
            @click="save()"
        >
          Далее
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.0909 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="#777E90"/>
          </svg>

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
import {validationMixin} from "vuelidate";
export default {
  name: "HouseComponent",
  mixins: [validationMixin],
  components: {typeOfAdvantages, addressComponent, nameOfHouse, downloadPhoto, DescriptionHome},
  data: () => ({
    loading: false,
    createObject: {}
  }),
  computed: {
  },
  validations: {
  },
  mounted() {
  },
  methods: {
    save() {
      this.$store.dispatch('postItem')
          .then((r) => {
            if (r !== 'invalid') {
              this.$emit('save', 'next')
            }
          })
    }
  }
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
