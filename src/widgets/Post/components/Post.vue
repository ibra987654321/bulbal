<template>
  <div>
    <div class="container d-flex flex-column justify-center align-center" v-scroll="onWindowScroll">
      <stack
          :column-min-width="200"
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
      <v-progress-circular
          v-if="$store.state.loading"
          :size="50"
          color="primary"
          class="mx-auto"
          indeterminate
      ></v-progress-circular>
      <div v-if="$store.state.empty">{{emptyText}}</div>
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
    images: [],
    emptyText: 'Контента больше нет!'
  }),
  computed: {
    data() {
      return this.$store.getters.getMainData
    }
  },
  async mounted() {
    await this.$store.dispatch('getMainPageData')
  },
  watch: {
    '$store.state.page'() {
      this.$store.dispatch('getMainPageData')
    }
  },
  methods: {
    next() {
      this.$store.state.page++
    },
    onWindowScroll() {
      const scroll = document.documentElement.getBoundingClientRect()
      if (scroll.bottom < document.documentElement.clientHeight + 150) {
        if(!this.$store.state.empty) {
          this.next()
          return
        }
        this.$store.commit('setLoading', false)
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(from)
    console.log(to)
    // if (from.name === 'testing' && (to.name === 'login'  || to.name === 'profile') ) {
    //   next(false);
    // } else {
    //   next();
    // }
  }
}
</script>

<style scoped>

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
