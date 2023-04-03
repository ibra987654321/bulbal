<template>
    <v-stepper v-model="e1" class="fill-height">
      <v-stepper-items class="fill-height d-flex align-center ">
        <v-stepper-content
            v-for="n in steps"
            :key="`${n}-content`"
            :step="n"
            class=""
        >
          <div >
            <component :is="components[n - 1]" @submit="submit($event)"></component>
            <div class="d-flex mx-auto mb-2 mt-4" style="max-width: 870px">
              <v-btn
                  text
                  @click="prevStep(n)"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1465_2504)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 15.2652C17.5032 14.8906 16.8706 14.9159 16.496 15.3217L13.2652 18.8217C12.9116 19.2047 12.9116 19.7952 13.2652 20.1782L16.496 23.6783C16.8706 24.0841 17.5032 24.1094 17.9091 23.7348C18.3149 23.3602 18.3402 22.7276 17.9656 22.3217L16.284 20.5L26 20.5C26.5523 20.5 27 20.0523 27 19.5C27 18.9477 26.5523 18.5 26 18.5L16.284 18.5L17.9656 16.6783C18.3402 16.2725 18.3149 15.6398 17.9091 15.2652Z" fill="#777E90"/>
                    <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1465_2504">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text @click="nextStep(n)">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1465_2507)">
                    <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.0909 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="#777E90"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1465_2507">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>
            </div>
          </div>
        </v-stepper-content>
      </v-stepper-items>
<!--        <v-progress-linear :value="e1"></v-progress-linear>-->
    </v-stepper>
</template>

<script>
import typeOfHouse from "@/modules/CreatePageComponents/TypeOfHouse/TypeOfHouse";
import typeOfRoom from "@/modules/CreatePageComponents/TypeOfRoom/TypeOfRoom";
import typeOfAdvantages from "@/modules/CreatePageComponents/TypeOfAdvantages/TypeOfAdvantages";
import addressComponent from "@/modules/CreatePageComponents/AddressComponent/AddressComponent";
import nameOfHouse from "@/modules/CreatePageComponents/NameOfHouse/NameOfHouse";
import downloadPhoto from "@/modules/CreatePageComponents/DownloadPhoto/DownloadPhoto";
export default {
  name: "index",
  data: () => ({
    components: [typeOfHouse, typeOfRoom, typeOfAdvantages, addressComponent, nameOfHouse, downloadPhoto],
    e1: 6,
    steps: 6
  }),
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },

  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    prevStep (n) {
      if (n < this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n - 1
      }
    },
    submit(v) {
      console.log(v)
    }
  },
}
</script>

<style scoped>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
</style>
