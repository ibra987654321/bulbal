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
import {mapGetters, mapState} from "vuex";
import {decodeJWT} from "@/helpers/helpers";
import {getToken} from "@/helpers/token";

export default {
  name: "Avatar",
  props: {
    width: String,
    height: String,
    userId: Boolean,
  },
  computed: {
    ...mapState(['profileDetail']),
  },
  data:() => ({
    initials: '',
    user: {}
  }),
  mounted() {
    if (!this.$props.userId && getToken()) {
      this.$store.dispatch('getUserById', decodeJWT().userId)
          .then(r => this.user = r)
      this.initials = decodeJWT().sub.slice(0, 2)
      return
    }
    setTimeout(() => {
      this.$store.dispatch('getUserByAccommodationId', this.$route.params.id)
          .then(r => {
            this.$store.dispatch('getUserById', r.id)
                .then(i => {
                  this.user = i
                  this.initials = i.username.slice(0, 2)
                })
          })

    }, 100)

  }
}
</script>

<style scoped>
.avatar_item {
  border-radius: 50%;
}
</style>
