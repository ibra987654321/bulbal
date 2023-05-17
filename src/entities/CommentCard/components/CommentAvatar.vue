<template>
  <div class="avatar">
    <div v-if="profileDetail.user.image !== null">
      <v-img :width="48" :height="48" class="avatar_item" :src="`img/avatar/${profileDetail.user.image.fileName}`" alt=""></v-img>
    </div>
    <div v-else>
      <v-avatar
          color="primary"
          :width="48" :height="48"
      >
        <span class="white--text text-h5 text-uppercase">{{ initials }}</span>
      </v-avatar>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CommentAvatar",
  props: {
    userId: Number,
  },
  computed: {
    ...mapState(['profileDetail']),
  },
  data:() => ({
    initials: ''
  }),
  async mounted() {
      await this.$store.dispatch('getUserById', this.$props.userId)
          .then(i => {
            this.initials = i.username.slice(0, 2)
          })
  }
}
</script>

<style scoped>

</style>
