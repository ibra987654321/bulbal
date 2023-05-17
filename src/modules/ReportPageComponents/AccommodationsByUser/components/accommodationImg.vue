<template>
      <v-row class="user_images">
        <v-col cols="8" v-if="i.length === 1"  v-for="(i, idx) in images">
          <img
              v-for="img in i"
             :src="'img/' + img.fileName"
              class="img-responsive"
          >
        </v-col>
        <v-col cols="4"  >
          <v-row >
            <v-col cols="12">
              <img
                 :src="'img/' + images[1][0].fileName"
                  class="img-responsive"
              >
            </v-col>
            <v-col cols="12" >
              <img
                  :src="'img/' + images[1][1].fileName"
                  class="img-responsive"
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "accommodationImg",
  props: ['id'],
  data:() => ({
    images: []
  }),
  mounted() {
    this.$store.dispatch('getImagesForDetailUser', this.$props.id)
        .then(r => {
          console.log(r[0].col12)
          this.images = r[0].col12
        })
    // this.$store.dispatch('exampleApi')
    //     .then(r =>   this.$store.commit('setImages', r))
  },
}
</script>

<style scoped>
.user_images .col {
  padding: 8px;
}
.img-responsive {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1.2/1;
  object-fit: cover;
}
</style>
