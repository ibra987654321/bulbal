<template>
  <div>
<!--    <div id="gallery" class="container-fluid">-->
<!--      <img-->
<!--          v-for="(item, i) in data"-->
<!--          :key="i"-->
<!--          :src="item.urls.regular"-->
<!--          @click="open(item)"-->
<!--      >-->
<!--    </div>-->
<!--        <carousel :id="imageId" :images="data" @changeId="changeId($event)"/>-->
    <v-row>
      <v-col v-for="(item) in data" cols="12">
        <v-row v-if="item.hasOwnProperty('col12')">
          <v-col cols="8" v-if="i.length === 1"  v-for="(i, idx) in item.col12">
            <img
                v-for="img in i"
                :src="'img/' + img.fileName"
                class="img-responsive"
                 @click="open(img)"
            >
          </v-col>
          <v-col v-for="(i) in item.col12" v-if="i.length === 2" cols="4"  >
              <v-row >
                <v-col cols="12" v-for="img in i">
                  <img
                      :src="'img/' + img.fileName"
                      class="img-responsive"
                       @click="open(img)"
                  >
                </v-col>
              </v-row>
            </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="6" v-for="i in item.col6">
            <img
                :src="'img/' + i.fileName"
                class="img-responsive"
                 @click="open(i)"
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <carousel :id="imageId" :images="data" @changeId="changeId($event)"/>
  </div>
</template>

<script>
import {Stack, StackItem} from "vue-stack-grid";
import {mapGetters} from "vuex";
const carousel = () => import('./Carousel')
export default {
  name: "StackForDialogGallery",
  props: {
    data: Array,
    columnMinWidth: Number,
  },
  components: {
    Stack,
    StackItem,
    carousel
  },
  data:() => ({
    imageId: null
  }),
  methods: {
    open(id) {
      this.imageId = id
    },
    changeId(v) {
      this.imageId = v
    },
  }
}
</script>

<style scoped>
#gallery{
  -webkit-column-count:3;
  -moz-column-count:3;
  column-count:3;

  -webkit-column-gap:20px;
  -moz-column-gap:20px;
  column-gap:20px;
}
@media (max-width:800px){
  #gallery{
    -webkit-column-count:2;
    -moz-column-count:2;
    column-count:2;

    -webkit-column-gap:20px;
    -moz-column-gap:20px;
    column-gap:20px;
  }
}
@media (max-width:600px){
  #gallery{
    -webkit-column-count:1;
    -moz-column-count:1;
    column-count:1;
  }
}
#gallery img {
  width:100%;
  height:auto;
  margin: 2% auto;
  border-radius: 14px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.modal-img{
  width:100%;
  height:auto;
}
.modal-body{
  padding:0px;
}
.img-responsive {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1.2/1;
  object-fit: cover;
}
</style>
