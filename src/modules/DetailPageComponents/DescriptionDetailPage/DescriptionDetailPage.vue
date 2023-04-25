<template>
  <div>
    <div class="mb-4 grey--text" style="font-family: 'Poppins', sans-serif;">
<!--     {{postDetail.createObject.fullDescriptionOfAccommodation}}-->
      <div v-if="showFullText">
        <p>{{ shortText}}</p>
      </div>
      <div v-else>
        <p>{{ shortText.slice(0, 10)  }}</p>
        <div  @click="showFullText = true">Показать ещё</div>
      </div>
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
