<template>
  <router-link :to="`/detail/${data.id}`" class="text-decoration-none">
    <img
        height="400"
        width="200"
        class="image post_img"
        :data-src="'img/' + data.imageFullName"
        v-lazy
    />
    <div class="rate">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.01846 0.955597L7.85237 4.35268L11.9534 4.90077L8.98595 7.54355L9.68628 11.2771L6.01846 9.51343L2.35063 11.2771L3.05096 7.54355L0.0834656 4.90077L4.18454 4.35268L6.01846 0.955597Z"
            fill="white"/>
      </svg>
      9.0
    </div>
    <div class="d-flex flex-column justify-space-between">
      <div class="black--text title__post font-weight-bold">
        {{data.localityName}}
      </div>
      <div class="black--text d-flex">
        {{ data.price }}сом |
        <div class="ml-2 grey--text">
          ночь
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import {dataImage} from "@/helpers/dataForGallery";

export default {
  props: {
    data: Object
  },
  name: "PostCard",
data:() => ({
  img: [],
}),
  mounted() {
    dataImage('home',500, 50).then(r=> this.img = r)
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  position: relative;
}

.rate {
  padding: 2px 5px;
  color: #fff;
  background: rgba(108, 123, 107, 0.5);
  position: absolute;
  bottom: 61px;
  right: 21px;
  border-radius: 4.1424px;
  font-size: 12.2497px;
  line-height: 16px;
}

.title__post {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12.7452px;
  line-height: 15px;
}
</style>
