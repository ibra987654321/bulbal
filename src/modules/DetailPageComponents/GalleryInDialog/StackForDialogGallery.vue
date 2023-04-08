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
          style="transition: transform 300ms; cursor: pointer"
      >
        <img
            :src="item.urls.small"
            class="post_img"
            :alt="item.alt_description"
            @click="open(item.id)"
        />
      </stack-item>
    </stack>
    <carousel :id="imageId" :images="data" @changeId="changeId($event)"/>
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
  },
  data:() => ({
    imageId: null
  }),
  methods: {
    open(id) {
      this.imageId = id
    },
    changeId(v) {
      this.imageId = v
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
