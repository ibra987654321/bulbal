<template>
  <div>
    <v-card class="rounded-lg elevation-0 card_block">
      <div class="d-flex justify-space-between">
        <div class="d-flex">
          <v-card-title class="d-flex justify-space-between">
            <div class="d-flex justify-space-between">
              <div>
                <img :src="require('./primary img.png')" alt="" width="140px">
              </div>
            </div>
          </v-card-title>
          <div>
            <v-card-subtitle class="d-flex pl-0 align-center poppins">
              Гостевой дом Жыргалан с видом
              на Иссык-Куль
            </v-card-subtitle>
            <v-card-subtitle class="d-flex pl-0 align-center poppins">
              <svg class="mx-2 my-2 ml-3" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1128 1.28584L13.9159 4.83396L17.9638 5.40522C19.8601 5.67275 20.7269 8.01285 19.2651 9.39572L16.3576 12.1438L17.0419 16.016C17.3923 17.9996 15.287 19.3318 13.6291 18.4871L9.99983 16.6358L6.37158 18.4865C4.71129 19.334 2.6077 17.9973 2.95772 16.016L3.64203 12.1438L0.734898 9.3961C-0.727986 8.01223 0.141888 5.67263 2.03558 5.40525L6.08385 4.83394L7.88788 1.28584C8.75916 -0.428539 11.2417 -0.428688 12.1128 1.28584Z" fill="#FFD166"/>
              </svg>
              <div class="font-weight-bold text--black mr-2">4.8</div>
              (56 отзывов)
            </v-card-subtitle>
          </div>

        </div>
      </div>
      <v-card-text>
        <v-row class="poppins">
          <v-col cols="12" class="title_confirm black--text">Детали цены</v-col>
          <v-col cols="12">
            <div>
              <v-list disabled >
                <v-list-item-group
                    v-model="selectedItem"
                    class="result"
                >
                  <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      link
                      class="poppins"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="black--text rounded-lg " v-if="selectedItem === i"
                                         v-text="item.text"></v-list-item-title>
                      <v-list-item-title class="grey--text" style="font-size: 14px" v-else v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon v-if="selectedItem === i" class="font-weight-bold">
                      {{ item.count }}
                    </v-list-item-icon>
                    <v-list-item-icon v-else>
                      {{ item.count }}
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
  name: "BookedCard",
  data: () => ({
    selectedItem: 2,
    items: [
      {text: '800  x  7 ночей', count: '77$'},
      {text: 'За обслуживание Bulbal', count: '10$'},
      {text: 'Итог', count: '87$'},
    ],
  })
}
</script>

<style scoped>
.title_confirm {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.card_block {
  max-width: 450px;
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.08));
  background: #FCFCFD;
  border: 1px solid #E6E8EC;
  border-radius: 24px !important;
  padding: 10px;
}
.result {
  margin: 0 auto;
  max-width: 342px;
}
.count {
  background: #F4F5F6;
  border-radius: 9.2459px;
}
</style>
