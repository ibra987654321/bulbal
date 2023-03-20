<template>
  <div>
    <PostCard :data="data"/>
  </div>
</template>

<script>
import PostCard from "@/entities/Post/components/PostCard";
export default {
  name: "Post",
  props: {
    data: Object
  },
  components: {
    PostCard
  }
}
</script>

<style scoped>

</style>
