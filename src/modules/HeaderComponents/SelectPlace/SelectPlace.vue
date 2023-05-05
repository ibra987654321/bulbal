<template>
  <v-card elevation="0" class="d-flex align-center justify-space-between">
    <v-card-text class="search_room">
      <v-text-field
        v-model="searchItems"
        solo
        flat
        hide-details
        dense
        label="Поиск"
        class="search_text_field"
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
              <v-img :src="require('@/widgets/header/icons/search.png')" class="mr-2" width="100%" height="100%" :max-width="$vuetify.breakpoint.mobile ? '21px' : '32px'"></v-img>
              <v-list-item-title class="search_item" v-text="item" @click="$store.state.header.selectedPlace = item"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <hr :class="$vuetify.breakpoint.mobile ? 'mt-1' : 'mt-5'"/>
      <div class="select_place">
        <v-list dense >
          <v-list-item-group
              color="primary"
              :class="$vuetify.breakpoint.mobile ? 'd-flex flex-column' : ''"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-content class="d-flex flex-nowrap">
                <v-img :src="item.icon" width="100%" height="100%" :max-width="$vuetify.breakpoint.mobile ? '21px' : '32px'"></v-img>
                <v-list-item-title class="selected_item" v-text="item.text" @click="$store.state.header.selectedTypeOfPlace = item.text"></v-list-item-title>
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
      // { text: 'Дом', icon:  require('@/widgets/header/icons/home.png') },
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
  font-family: 'poppins_regular', sans-serif;
  font-style: normal;
  font-weight: 600!important;
  color: #777E90;
}


</style>
<style>
.select_place .v-item-group {
  display: flex !important;
  font-size: 16px !important;

}
@media only screen and (max-width: 600px) {
  .search_room .v-label, .search_item {
    font-size: 11.1181px !important;
  }
  .search_text_field {
    font-family: 'poppins_regular', sans-serif;
    font-size: 11.1181px;
  }
  .selected_item {
    font-family: 'poppins_regular', sans-serif;
    margin: auto 10px;
    font-size: 9.03346px !important;
  }
}
</style>
