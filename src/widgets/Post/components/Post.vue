<template>
  <div>
    <div class="container d-flex justify-center align-center">
      <v-progress-circular
          v-if="$store.state.loading"
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
            v-for="(image, i) in data"
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
import PostCard from "@/modules/PostComponents/PostCard";
import {Stack, StackItem} from "vue-stack-grid";
export default {
  name: "Post",
  components: {
    Stack,
    StackItem,
    PostCard
  },
  data:() => ({
  }),
  computed: {
    data() {
      return this.$store.state.mainPageData
    }
  },
  async mounted() {
    await this.$store.dispatch('getMainPageData')
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
