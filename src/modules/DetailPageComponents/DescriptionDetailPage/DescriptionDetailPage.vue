<template>
  <div>
    <div class="mb-4 grey--text" style="font-family: 'Poppins', sans-serif;">
      <div v-if="showFullText">
        <p>{{ postDetail.createObject.fullDescriptionOfAccommodation}}</p>
      </div>
      <div v-else>
        <p>{{ postDetail.createObject.fullDescriptionOfAccommodation.slice(0, 100)  }}</p>
      </div>
      <div class="black--text" style="cursor: pointer" @click="showFullText = !showFullText">{{showFullText ? 'Скрыть' : 'Показать ещё >'}}</div>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "DescriptionDetailPage",
  computed: {
    ...mapState(['postDetail'])
  },
  data:() => ({
    shortText: 'lorem fdsfsdf s df sd f sdfsdfsdfs df s df s df sdfsdfsdf sdf sdfsd fs df s df s df s df s df sd f s dfsdfsdfsdfsd fsdfsdfsdfds',
    showFullText: false,
  })
}
</script>

<style scoped>

</style>
