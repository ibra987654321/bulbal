<template>
  <v-row>
    <v-col cols="6" class="pr-1 pt-1 pb-0">
      <div class="gallery">
        <v-img
            :src="image[5].urls.regular"
            :lazy-src="`https://picsum.photos/10/6?image=20`"
            class="grey lighten-2 img"
            aspect-ratio="1.2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-skeleton-loader
                  ref="skeleton"
                  type="image"
                  class="mx-auto"
              ></v-skeleton-loader>
            </v-row>
          </template>
        </v-img>
        <gallery-dialog class="btn_gallery"></gallery-dialog>
      </div>
    </v-col>
    <v-col cols="6">
      <v-row class="">
        <v-col
            v-for="n in images"
            :key="n"
            class="d-flex child-flex px-1 py-1"
            cols="6"
        >
          <v-img
              :src="n.urls.regular"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              class="grey lighten-2"
              aspect-ratio="1.2"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-skeleton-loader
                    ref="skeleton"
                    type="image"
                    class="mx-auto"
                ></v-skeleton-loader>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import galleryDialog from "@/modules/DetailPageComponents/GalleryInDialog/GalleryDialog";
import {dataImage} from "@/helpers/dataForGallery";
export default {
  name: "GalleryForDetailPage",
  components: {
    galleryDialog
  },
  data:() => ({
    images: [],
    image: ''
  }),
  async mounted() {
    this.images = await dataImage('nature',null, 4)
    this.image = await dataImage('any',null, 500)
  },
}
</script>

<style scoped>
.gallery {
  position: relative;
}
.btn_gallery {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 10;
}
</style>
