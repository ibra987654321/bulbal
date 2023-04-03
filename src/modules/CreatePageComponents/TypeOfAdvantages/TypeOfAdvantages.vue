<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div class="block">
      <create-card
          title="Расскажите гостям о преимуществах вашего жилья"
          sub-title="Выберите удобства которые есть в вашем доме"
      >
        <v-row>
          <v-col
              cols="12"
              sm="3"
              v-for="item in advantage"
              class="d-flex flex-column"
          >
              <card-of-advantage
                  :item="item"
                  @selected="selectedColor($event)"
              >
              </card-of-advantage>
          </v-col>
        </v-row>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";
import CardOfAdvantage from "@/modules/CreatePageComponents/TypeOfAdvantages/CardOfAdvantage";

export default {
  name: "TypeOfAdvantages",
  components: {
    CreateCard,
    CardOfAdvantage
  },
  data:() => ({
    advantage: [
      {id: Date.now(), title: 'Телевизор', icon: require('@/assets/icons/create_icons/tv.png'), selected: false},
      {id: Date.now(), title: 'Стиральная машина', icon: require('@/assets/icons/create_icons/wash.png'), selected: false},
      {id: Date.now(), title: 'Кондиционер', icon: require('@/assets/icons/create_icons/air.png'), selected: false},
      {id: Date.now(), title: 'Бассейн', icon: require('@/assets/icons/create_icons/pool.png'), selected: false},
      {id: Date.now(), title: 'Бассейн', icon: require('@/assets/icons/create_icons/pool.png'), selected: false},
      {id: Date.now(), title: 'Бассейн', icon: require('@/assets/icons/create_icons/pool.png'), selected: false},
      {id: Date.now(), title: 'Бассейн', icon: require('@/assets/icons/create_icons/pool.png'), selected: false},
      {id: Date.now(), title: 'Бассейн', icon: require('@/assets/icons/create_icons/pool.png'), selected: false},
    ],
    postAdvantage: [],
    arr: []
  }),
  watch: {
    advantage: {
      handler(val) {
        // console.log(val.filter(i => i.selected === true))
      },
      deep: true
    }
  },
  methods: {
    selectedColor(item) {
      this.advantage.map((i) => {
        if (item === i) {
            if (i.selected) {
              i.selected = false
              this.postAdvantage.splice(i, 1)
            } else {
              i.selected = true
              this.postAdvantage.push(item)
            }
          }
      })
    },
  }
}
</script>

<style scoped>
.block {
  max-width: 870px;
}
</style>
