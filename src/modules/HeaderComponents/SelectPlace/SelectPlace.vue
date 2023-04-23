<template>
  <v-card elevation="0" class="d-flex align-center justify-space-between">
    <v-card-text>
      <v-text-field
        v-model="searchItems"
        solo
        flat
        hide-details
        dense
        label="Поиск"
      ></v-text-field>
      <v-list dense v-if="filteredItems.length">
        <v-list-item-group
            color="primary"
        >
          <v-list-item
              v-for="(item, i) in filteredItems"
              :key="i"
          >
            <v-list-item-content class="d-flex flex-nowrap">
              <v-img :src="require('@/widgets/header/icons/search.png')" class="mr-2" width="100%" height="100%" max-width="32px"></v-img>
              <v-list-item-title class="search_item" v-text="item" @click="$store.state.header.selectedPlace = item"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <hr class="mt-5"/>
      <div class="select_place">
        <v-list dense >
          <v-list-item-group
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-content :class="$vuetify.breakpoint.mobile ? '' : 'd-flex flex-nowrap'">
                <v-img :src="item.icon" width="100%" height="100%" max-width="32px"></v-img>
                <v-list-item-title v-text="item.text" @click="$store.state.header.selectedTypeOfPlace = item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SelectPlace",
  data: () => ({
    search : '',
    searchItems: '',
    selectedItem: 1,
    selectedPlace: '',
    items: [
      { text: 'Койка-место', icon: require('@/widgets/header/icons/bed.png') },
      { text: 'Комната', icon:  require('@/widgets/header/icons/room.png') },
      { text: 'Дом', icon:  require('@/widgets/header/icons/home.png') },
    ],
  }),
  computed: {
    filteredItems() {
      return this.$store.state.create.regions.filter((item) => {
        if (this.searchItems) {
          return item.toLowerCase().indexOf(this.searchItems.toLowerCase()) !== -1;
        }
      });
    },
  },
}
</script>
<style scoped>
.search_item {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600!important;
  font-size: 16px !important;
  color: #777E90;
}
</style>
<style>
.select_place .v-item-group {
  display: flex !important;
}
</style>
