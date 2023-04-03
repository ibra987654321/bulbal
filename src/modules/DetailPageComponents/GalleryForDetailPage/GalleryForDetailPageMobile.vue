<template>
  <div>
    <v-carousel>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.urls.small"
          reverse-transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import {dataImage} from "@/helpers/dataForGallery";

export default {
  name: "GalleryForDetailPageMobile",
  data: () => ({
    items: [],
  }),
  async mounted() {
    this.items = await dataImage('nature',null, 6)
  },
}
</script>

<style scoped>

</style>
