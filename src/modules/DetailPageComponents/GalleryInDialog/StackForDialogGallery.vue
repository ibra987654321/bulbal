<template>
  <div>
    <stack
        :column-min-width="columnMinWidth"
        :gutter-width="15"
        :gutter-height="15"
        monitor-images-loaded
    >
      <stack-item
          v-for="(item, i) in data"
          :key="i + 'fdsfs'"
          style="transition: transform 300ms"
      >
        <img
            :src="item.urls.small"
            :alt="item.alt_description"
            @click="open(item.id)"
        />
      </stack-item>
    </stack>
    <carousel :id="imageId"/>
  </div>
</template>

<script>
import {Stack, StackItem} from "vue-stack-grid";
const carousel = () => import('./Carousel')
export default {
  name: "StackForDialogGallery",
  props: {
    data: Array,
    columnMinWidth: Number,
  },
  components: {
    Stack,
    StackItem,
    carousel
  },
  mounted() {
    console.log(this.data)
  },
  data:() => ({
    imageId: null
  }),
  methods: {
    open(id) {
      this.imageId = id
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 3px;
}
</style>
