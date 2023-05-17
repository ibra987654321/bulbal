<template>
  <div class="avatar">
    <div v-if="user.image !== null">
      <v-img :width="width" :height="height" class="avatar_item" :src="`img/avatar/${user.image.fileName}`" alt=""></v-img>
    </div>
    <div v-else>
      <v-avatar
          color="primary"
          :width="width" :height="height"
      >
        <span class="white--text text-h5 text-uppercase">{{ initials }}</span>
      </v-avatar>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {getToken} from "@/helpers/token";
import {decodeJWT} from "@/helpers/helpers";

export default {
  name: "navAvatar",
  props: {
    width: String,
    height: String,
  },
  computed: {
    ...mapState(['profileDetail']),
  },
  data:() => ({
    initials: '',
    user: {}
  }),
  mounted() {
      this.$store.dispatch('getUserById', decodeJWT().userId)
          .then(r => this.user = r)
      this.initials = decodeJWT().sub.slice(0, 2)
  }
}
</script>

<style scoped>
.avatar_item {
  border-radius: 50%;
}
</style>
