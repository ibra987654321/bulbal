<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div class="block">
      <create-card
          title="Название вашего гостевого дома"
          sub-title="Придумайте короткое название. Вы всегда сможете его отредактировать."
      >
        <div class="d-flex align-center">
          <v-text-field
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
              v-model="description"
              outlined
              :maxlength="30"
              :counter="30"
          ></v-textarea>
        </div>
      </create-card>
      <v-row class="px-10 py-10">
        <v-col cols="12" sm="6">
          <div class="black--text">
            Цена
          </div>
          <div class="d-flex align-center border">
            <v-text-field
                v-model="price"
                solo
                type="number"
                flat
                hide-details
            ></v-text-field>
            |
            <v-select
                v-model="selectCurrency"
                solo
                flat
                :items="currency"
                prepend-inner-icon="mdi-currency-usd"
                hide-details
            ></v-select>
            |
            <v-select
                v-model="selectCount"
                solo
                flat
                class="center"
                :items="count"
                hide-details
            ></v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="black--text">
            Наша комиссия
          </div>
          <div class="d-flex align-center border">
            <v-text-field
                v-model="percent"
                solo
                flat
                type="number"
                hide-details
            ></v-text-field>
             |
            <v-select
                solo
                flat
                class="center"
                :items="['%']"
                hide-details
            ></v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="black--text">
            Итог
          </div>
          <div class="d-flex align-center border">
            <v-text-field
                v-model="outcome"
                solo
                flat
                type="number"
                hide-details
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
    description: '',
    price: 800,
    percent: 80,
    outcome: '',
    selectCurrency: 'USD',
    selectCount: 'Ночь',
    selectPercent: '%',
    currency: ['USD','KGS', 'EUR'],
    count: ['Ночь','День', 'Неделя'],
  })
}
</script>

<style>
.block {
  max-width: 870px;
}
.border {
  padding: 3px;
  border: 1px solid #A3B194;
  border-radius: 12px;
}
</style>
