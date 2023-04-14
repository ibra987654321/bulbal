<template>
  <div class="px-3 pb-3">
    <div v-if="!files.length">
      <svg @click="onButtonClick" style="cursor: pointer; " class="size"  viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="147.894" height="147.894" fill="#C4C4C4"/>
        <path d="M72.4659 87.0249V62.0206H74.8757V87.0249H72.4659ZM61.179 75.7379V73.3075H86.1626V75.7379H61.179Z" fill="#7D8871"/>
      </svg>
      <input
          ref="uploader"
          class="d-none"
          type="file"
          accept="image/png, image/jpeg, image/bmp"
          @change="onFileChanged"
      >
    </div>
    <div v-else style="position: relative" v-for="(file,f) in files" :key="f">
      <v-icon color="black" @click="onClickRemove(f)" class="close">mdi-close</v-icon>
      <img v-if="!loading" :ref="'file'" :src="file.src"  class="img-fluid size" :title="'file' + f" />
      <img v-else src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"  class="img-fluid size" :title="'file' + f" />
    </div>
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
  data: () => ({
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    files: [],
    readers: [],
    selectedFile: null,
    isSelecting: false,
    loading: false,
  }),
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      })
      this.$refs.uploader.click()
    },
    onClickRemove(idx) {
      this.files.splice(idx, 1)
    },
    onFileChanged(e) {
      this.loading = true
      if (e.target.files !== undefined) {
        Array.from(e.target.files).forEach(  item => {
          this.files.push(item)
          Array.from(this.files).forEach((file, f) => {
            this.readers[f] = new FileReader();
            this.readers[f].onloadend = (e) => {
              file.src = this.readers[f].result
            }
            this.readers[f].readAsDataURL(this.files[f]);
            const formData = new FormData()
            formData.append('multipartFile', this.files[f])
            this.$store.dispatch('uploadImage',formData)
                .then(() => setTimeout(() =>this.loading = false, 1000))

          })
        })
      }

    }
  },
}
</script>

<style scoped>
.close {
  background-color: white;
  position: absolute;
  right: 2px;
  top: 2px;
  cursor: pointer;
  z-index: 3;
}
.size {
  width: 174px;
  height: 174px;
  border-radius: 8.89236px;
}
@media only screen and (max-width: 600px) {
  .size {
    width: 170px;
    height: 170px;
    border-radius: 8.89236px;
  }
}
</style>
