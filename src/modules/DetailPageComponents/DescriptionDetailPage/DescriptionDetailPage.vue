<template>
  <div>
    <div class="mb-4 grey--text">
     {{postDetail.createObject.fullDescriptionOfAccommodation}}
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "DescriptionDetailPage",
  computed: {
    ...mapState(['postDetail'])
  }
}
</script>

<style scoped>

</style>
