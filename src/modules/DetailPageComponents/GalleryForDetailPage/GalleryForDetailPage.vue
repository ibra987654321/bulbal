<template>
  <v-row>
    <v-col cols="6" class="pr-1 pt-1 pb-0">
      <div class="gallery">
        <v-img
            :src="'img/' + oneImage['fileName']"
            :lazy-src="`https://picsum.photos/10/6?image=20`"
            class="grey lighten-2 gallery_img "
            aspect-ratio="1.2"
        >
        </v-img>
<!--        <v-skeleton-loader-->
<!--            v-else-->
<!--            type="image"-->
<!--        ></v-skeleton-loader>-->
        <gallery-dialog :id="accId" class="btn_gallery"></gallery-dialog>
      </div>
    </v-col>
    <v-col cols="6">
      <v-row class="">
        <v-col
            v-for="(n, i) in completedFiveImages"
            :key="i"
            class="d-flex child-flex px-2 py-2"
            cols="6"
        >
          <v-img
              :src="'img/' + n.fileName"
              :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
              class="grey lighten-2 gallery_item_img"
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
import {mapGetters, mapState} from "vuex";
export default {
  name: "GalleryForDetailPage",
  props: {
    id: String
  },
  components: {
    galleryDialog
  },
  data:() => ({
    loading: false,
  }),
  computed: {
    ...mapGetters([
      'completedFiveImages', 'oneImage'
    ]),
    accId() {
      return this.$props.id
    }
  },
  async mounted() {
    await this.$store.dispatch('getFiveImagesForDetail', this.accId)
  },
}
</script>

<style lang="scss">
.gallery {
  position: relative;
  .v-skeleton-loader__image {
    border-radius: 12px;
    height: 490px;
  }
}
.gallery_img {
  border-radius: 20px;
}
.gallery_item_img {
  border-radius: 14px;
}
.btn_gallery {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  height: 100%;
  min-height: 40px;
}
</style>
