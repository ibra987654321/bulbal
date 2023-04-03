<template>
  <div>
    <input
        ref="uploader"
        class="d-none"
        type="file"
        multiple
        accept="image/png, image/jpeg, image/bmp"
        @change="onFileChanged"
    >
    {{data.name}}
    <img :ref="'file'" :src="urls" width="200" height="200" class="img-fluid" :title="'file' + idx" />
<!--    <img :ref="'file'" src="//placehold.it/400/99cc77" width="200" height="200" class="img-fluid" :title="'file' + idx" />-->
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    data: null,
    idx: Number,
    src: Array
  },
  computed: {
    urls() {
      return this.$props.src[this.$props.idx].result
    }
  }
}
</script>

<style scoped>

</style>
