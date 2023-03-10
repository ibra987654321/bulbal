<template>
 <div>
    <v-card class="rounded-lg elevation-0 card_block">
      <div class="d-flex justify-space-between">
        <div class="">
          <v-card-title class="d-flex justify-space-between">
            <div>
              $119/<small>ночь</small>
            </div>
          </v-card-title>
          <v-card-subtitle class="d-flex pl-0 align-center">
            <v-rating
                v-model="rating"
                length="1"
                icon-label="custom icon label text {0} of {1}"
            ></v-rating>
            (287 просмотров)
          </v-card-subtitle>
        </div>
        <v-card-title>
          <v-avatar  color="indigo" size="40">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-card-title>
      </div>
      <v-card-text>
        <v-row>
          <v-col
              cols="12"
          >
            <v-menu
                v-model="menu1"
                :close-on-content-click="true"
                max-width="290"
            >
            <v-date-picker
                v-model="dates"
                range
            ></v-date-picker>
              <template v-slot:activator="{ on, attrs }">
                <v-card
                    color="accent"
                    class="elevation-0 rounded-tl-lg rounded-tr-lg px-2">
                  <v-row>
                    <v-col   v-bind="attrs"
                             v-on="on" cols="6">
                      <div class="d-flex justify-space-around">
                        <v-icon>
                          mdi-calendar
                        </v-icon>
                        <div class="d-flex flex-column">
                          <small>Прибытие</small>
                          {{dates[0] | date}}
                        </div>
                      </div>
                    </v-col>
                    <v-col   v-bind="attrs"
                             v-on="on" cols="6">
                      <div class="d-flex justify-space-around">
                        <v-icon>
                          mdi-calendar
                        </v-icon>
                        <div class="d-flex flex-column">
                          <small>Выезд</small>
                          {{dates[1] | date}}
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
            </v-menu>
          </v-col>
          <v-col cols="12" class="pt-0">
            <div class="accent rounded-bl-lg rounded-br-lg">
              <v-select
                  label="Для кого"
                  color="secondary"
                    hide-details
                  prepend-inner-icon="mdi-map"
                  :items="['1 гость','2 гость','3 гость']"
                  class=" mt-0 px-5 pb-3 elevation-0"></v-select>
            </div>
          </v-col>
          <v-col cols="12" class="d-flex">
            <v-btn outlined rounded class="text-capitalize"  >Сохранить
              <v-icon
                  right
                  dark
              >
                mdi-plus
              </v-icon>
            </v-btn>
            <v-btn color="primary" class="ml-3 text-capitalize"  rounded >
              Бронировать
              <v-icon
                  right
                  dark
              >
                mdi-store
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <div>
              <v-list disabled>
                <v-list-item-group
                    v-model="selectedItem"
                >
                  <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      link

                  >
                    <v-list-item-content>
                      <v-list-item-title class="black--text rounded-lg" v-if="selectedItem === i" v-text="item.text"></v-list-item-title>
                      <v-list-item-title class="grey--text" v-else v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                      {{item.count}}
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

    </v-card>
 </div>
</template>

<script>
export default {
  name: "BookCardDetailPage",
  components: {
  },
  data:() => ({
    rating: 1,
    dates: ['2019-05-10', '2019-05-20'],
    menu1: false,
    selectedItem: 2,
    items: [
      { text: '11$ x 7 ночей', count: '77$' },
      { text: 'Плата за обслуживание', count: '10$' },
      { text: 'Итог', count: '87$' },
    ],
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' | ')
    },
  },
}
</script>

<style scoped>
.accent {
  background-color: gray;
}
.card_block {
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.08));
  border: 1px solid #e3e2e2;
}
</style>
