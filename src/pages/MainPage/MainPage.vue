<template>
  <div>
    <PostList/>
  </div>
</template>

<script>
import PostList from "@/widgets/Post/PostList";
export default {
  name: "MainPage",
  components: {
    PostList
  },
  beforeRouteLeave(to, from, next) {
    if (from.name === 'main' ) {
      this.$store.commit('setRoute', true)
      next();
    } else {
      next();
    }
  }
}
</script>

<style scoped>

</style>
