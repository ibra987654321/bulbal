<template>
  <div>
    <v-row>
      <v-col cols="3" v-for="i in 6" :key="i">
        <PostLink :key="i"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostLink from "@/features/components/Post/components/PostLink";
export default {
  name: "Post",
  components: {
    PostLink
  },
}
</script>

<style scoped>

</style>
