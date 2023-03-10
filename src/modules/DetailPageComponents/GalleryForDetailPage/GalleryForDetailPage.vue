<template>
  <v-row>
    <v-col cols="6" class="pr-1 ">
      <div class="gallery">
        <v-img
            :src="`https://picsum.photos/500/300?image=20`"
            :lazy-src="`https://picsum.photos/10/6?image=20`"
            class="grey lighten-2 rounded-bl-lg rounded-tl-lg"
            aspect-ratio="1.3"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <gallery-dialog class="btn_gallery"></gallery-dialog>
      </div>
    </v-col>
    <v-col cols="6">
      <v-row class="">
        <v-col
            v-for="n in 4"
            :key="n"
            class="d-flex child-flex px-1 py-1"
            cols="6"
        >
          <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              class="grey lighten-2"
              aspect-ratio="1.3"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import galleryDialog from "@/modules/GalleryInDialog/GalleryDialog";
export default {
  name: "GalleryForDetailPage",
  components: {
    galleryDialog
  }
}
</script>

<style scoped>
.gallery {
  position: relative;
}
/*.btn_gallery {*/
/*  position: absolute;*/
/*  bottom: 30px;*/
/*  left: 30px;*/
/*  z-index: 10;*/
/*}*/
.btn_gallery {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 10;
}
</style>
