<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div class="block">
      <create-card
          title="Описание комнаты"
          sub-title="Название комнаты"
          class="mb-5"
      >
        <v-select
            v-model="$store.state.create.rooms.typeOfAccommodation"
            :items="$store.state.create.typeOfRoom.typeOfRoom"
            outlined
            class="border mb-2"
            hide-details
            color="primary"
        ></v-select>
        <v-col cols="12" sm="4" class="pl-0 d-flex align-center">
          <div>
            <div class="black--text select_title">
              ЦЕНА на комнату
            </div>
            <div class="d-flex align-center border mt-2">
              <v-text-field
                  v-model="$store.state.create.rooms.price"
                  solo
                  type="number"
                  flat
                  hide-details
                  dense
              ></v-text-field>
            </div>
          </div>
          <div class="mt-3 ml-2">
            сом
          </div>
        </v-col>
        <v-row  class="mt-8 beds">
          <v-col cols="12" class="pb-0">
            <p class="mb-0 subtitle" >Сколько гостей можно разместить в вашем дома?</p>
          </v-col>
          <v-col cols="6" sm="5">
            <div class="light-green--text select_title">
              тип кровати
            </div>
            <div class="d-flex align-center border mt-2">
            <v-select
                v-model="$store.state.create.typeOfBedId"
                :items="$store.state.create.typeOfRoom.typeOfBed"
                item-value="id"
                item-text="name"
                hide-details
                dense
                solo
                flat
                @change="change($event)"
            ></v-select>
            </div>
          </v-col>
          <v-col cols="3" sm="3">
            <div class="light-green--text select_title">
              количество
            </div>
            <div class="d-flex align-center border mt-2">
              <v-select
                  v-model="$store.state.create.rooms.amountOfBed"
                  :items="[1,2,3,4,5,6,7]"
                  hide-details
                  dense
                  solo
                  flat
              ></v-select>
            </div>
          </v-col>
<!--          <v-col cols="3" sm="3" class="d-flex align-center">-->
<!--            <v-btn-->
<!--                class="mx-2 "-->
<!--                fab-->
<!--                :x-small="$vuetify.breakpoint.mobile"-->
<!--                :small="!$vuetify.breakpoint.mobile"-->
<!--                @click="addBed()"-->
<!--            >-->
<!--              <v-icon>-->
<!--                mdi-plus-->
<!--              </v-icon>-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--                v-if="$store.state.create.createObject.beds.length > 1"-->
<!--                class="mx-2 "-->
<!--                fab-->
<!--                :x-small="$vuetify.breakpoint.mobile"-->
<!--                :small="!$vuetify.breakpoint.mobile"-->
<!--                @click="removeBed(idx, bed)"-->
<!--            >-->
<!--              <v-icon dark>-->
<!--                mdi-minus-->
<!--              </v-icon>-->
<!--            </v-btn>-->
<!--          </v-col>-->
          <v-col cols="12" sm="2" class=" d-flex align-center">
            <div>
              <div class="black--text select_title">
                ЦЕНА
              </div>
              <div class="d-flex align-center border mt-2">
                <v-text-field
                    v-model="$store.state.create.rooms.pricePerBed"
                    solo
                    type="number"
                    flat
                    hide-details
                    dense
                ></v-text-field>
              </div>
            </div>
            <div class="mt-3 ml-2">
              сом
            </div>
          </v-col>
        </v-row>
<!--        <div class="mt-8">-->
<!--          <v-btn-->
<!--              class="mb-5 mr-4 text-none btn_border"-->
<!--              outlined-->
<!--              @click="addRoom(idx)"-->
<!--              rounded-->
<!--          >-->
<!--            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                    d="M9.50032 4.66666C9.50032 4.11437 9.05261 3.66666 8.50032 3.66666C7.94804 3.66666 7.50032 4.11437 7.50032 4.66666V6.99998H5.16699C4.61471 6.99998 4.16699 7.44771 4.16699 7.99998C4.16699 8.55227 4.61471 8.99998 5.16699 8.99998H7.50032V11.3333C7.50032 11.8856 7.94804 12.3333 8.50032 12.3333C9.05261 12.3333 9.50032 11.8856 9.50032 11.3333V8.99998H11.8337C12.3859 8.99998 12.8337 8.55227 12.8337 7.99998C12.8337 7.44771 12.3859 6.99998 11.8337 6.99998H9.50032V4.66666Z"-->
<!--                    fill="#23262F"/>-->
<!--            </svg>-->

<!--            Добавить комнату-->
<!--          </v-btn>-->
<!--          <v-btn-->
<!--              v-if="showBtn"-->
<!--              class="mb-5 text-none btn_border"-->
<!--              outlined-->
<!--              @click="removeRoom(item)"-->
<!--              rounded-->
<!--          >-->
<!--            <v-icon dark>-->
<!--              mdi-minus-->
<!--            </v-icon>-->
<!--            Удалить комнату-->
<!--          </v-btn>-->
<!--        </div>-->
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";

export default {
  name: "TypeOfRoom",
  components: {
    CreateCard,
  },
  data: () => ({
    items: ['Одно местный', 'Двухместный', 'King-size'],
    typeOfRoom: []
  }),
  computed: {
    // showBtn() {
    //   return this.$store.state.create.createObject.rooms.length > 1
    // }
  },
  mounted() {
    this.$store.dispatch('getTypeOfRoom')
    this.$store.dispatch('getTypeOfBed')
  },
  methods: {
    submit(item) {
      this.$emit('submitItem', item)
    },
    change(id) {
      const bed = this.$store.state.create.typeOfRoom.typeOfBed.find(i => i.id === id)
      this.$store.commit('setBed', bed)
    },
    // addRoom() {
    //   const room = {
    //     id: this.generateUniqueId(), // сам генерирует
    //     name: "", // название комнаты (гостинная, кухня)
    //     beds: [
    //       {
    //         id: this.generateUniqueId(), // сам генерирует
    //         name: "", // название кровати (king size и т.д.)
    //         size: 0 // размер кровати
    //       }
    //     ]
    //   }
    //   this.$store.state.create.createObject.rooms.push(room)
    // },
    // addBed() {
    //   const bed =  {
    //     id: this.generateUniqueId(),
    //     name: "", // название кровати (king size и т.д.)
    //     size: 0 // размер кровати
    //   }
    //   this.$store.state.create.createObject.beds.push(bed)
    // },
    // removeRoom(obj) {
    //   const index = this.$store.state.create.createObject.rooms.findIndex(element => element.id === obj.id);
    //   if (index !== -1) {
    //     this.$store.state.create.createObject.rooms.splice(index, 1);
    //   }
    // },
    // removeBed(idx, obj) {
    //     const index = this.$store.state.create.createObject.beds.findIndex(element => element.id === obj.id);
    //     if (index !== -1) {
    //       this.$store.state.create.createObject.beds.splice(index, 1);
    //     }
    // },
    // generateUniqueId() {
    //   return Math.random().toString();
    // }
  }
}
</script>

<style scoped>
.subtitle {
  color: #555555;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1.5px;
}
.item {
  border: #6C7B6B 2px solid;
  border-radius: 12px;
  margin-bottom: 10px;
}

.block {
  max-width: 870px;
}

.list-item-content {
  font-size: 25px;
}


@media only screen and (max-width: 600px) {
  .list-item-content {
    font-size: 18px;
    line-height: 24px;
  }

}
.btn_border {
  padding: 20px 30px !important;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #E6E8EC;
  border-radius: 90px;
  font-family: 'Inter';
  font-style: normal;
 }
</style>
<style>
.beds .v-select__slot {
  max-height: 22px !important;
}
</style>
