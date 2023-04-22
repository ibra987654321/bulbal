<template>
  <v-card
      class="flex d-flex flex-column"
      @click="selected(data)"
      :class="data.selected ? 'card_item' : ''"
  >
    <v-card-text>
      <v-img class="mx-auto" width="57px" :src="'img/icon/' + data.icon"></v-img>
    </v-card-text>
    <v-card-text class="text-center pt-0 card_item__text">
      {{data.name}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardOfAdvantage",
  props: ['item'],
  computed: {
    data() {
      return this.$props.item
    }
  },
 methods: {
   selected(v) {
     this.$emit('selected', v)
   }
 }
}
</script>

<style scoped>
.card_item {
  border: 1.5px solid #000000;
  background-color: #ececec;
}
.card_item__text {
  font-weight: 600;
  font-size: 16px;
}
@media only screen and (max-width: 600px) {
  .card_item__text {
    font-size: 12px;
  }

}
</style>
