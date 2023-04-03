<template>
  <div>
    <div class="container d-flex justify-center align-center">
      <v-progress-circular
          v-if="loading"
          :size="50"
          color="primary"
          indeterminate
      ></v-progress-circular>
      <stack
          v-else
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
    images: [],
    loading: false
  }),
  async mounted() {
    this.loading = true
    dataImage('any', 3000, 8000)
        .then(r => {
          this.images = r
          this.loading = false
        })
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
