<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div style="max-width: 870px;">
      <create-card
          title="Расскажите гостям о преимуществах вашего жилья"
          sub-title="Выберите удобства которые есть в вашем доме"
      >
        <v-row>
          <v-col
              cols="4"
              sm="3"
              v-for="item in $store.state.create.advantage"
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
      {id: 1, convenienceName: 'Телевизор', icon: '/img/tv.png', selected: false},
      {id: 2, convenienceName: 'Стиральная машина', icon: '/img/wash.png', selected: false},
      {id: 3, convenienceName: 'Кондиционер', icon: '/img/air.png', selected: false},
      {id: 4, convenienceName: 'Бассейн', icon: '/img/pool.png', selected: false},
      {id: 5, convenienceName: 'Бассейн', icon: '/img/pool.png', selected: false},
      {id: 6, convenienceName: 'Бассейн', icon: '/img/pool.png', selected: false},
      {id: 7, convenienceName: 'Бассейн', icon: '/img/pool.png', selected: false},
      {id: 8, convenienceName: 'Бассейн', icon: '/img/pool.png', selected: false},
    ],
    postAdvantage: [],
    arr: []
  }),
  watch: {
    advantage: {
      handler(val) {
        console.log(val.filter(i => i.selected === true))
      },
      deep: true
    }
  },
  mounted() {
    this.$store.dispatch('getAdvantage')
  },
  methods: {
    selectedColor(item) {
      this.$store.state.create.advantage.map((i) => {
        if (item.id === i.id) {
            if (i.selected) {
              i.selected = false
              const index = this.$store.state.create.createObject.conveniences.findIndex(element => element === item);
              if (index !== -1) {
                this.$store.state.create.createObject.conveniences.splice(index, 1);
              }
            } else {
              item.selected = true
              this.$store.state.create.createObject.conveniences.push(item)
            }

        }
      })
    },
  }
}
</script>

<style scoped>
</style>
