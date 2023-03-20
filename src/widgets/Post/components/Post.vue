<template>
  <div>
    <div class="container">
      <stack
          :column-min-width="250"
          :gutter-width="15"
          :gutter-height="15"
          monitor-images-loaded
      >
        <stack-item
            v-for="(image, i) in images"
            :key="i"
            class="column"
            style="transition: transform 300ms"
        >
          <PostCard :key="i" :data="image"/>

        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
import PostCard from "@/entities/Post/components/PostCard";
import {Stack, StackItem} from "vue-stack-grid";
import {dataImage} from "@/helpers/dataForGallery";
export default {
  name: "Post",
  components: {
    Stack,
    StackItem,
    PostCard
  },
  data:() => ({
    images: []
  }),
  async mounted() {
    this.images = await dataImage('any', 3000, 8000)
  },
}
</script>

<style scoped>

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
