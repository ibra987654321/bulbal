<template>
  <div class="px-3 pb-3">
    <div v-if="!files.length">
      <svg @click="onButtonClick" style="cursor: pointer; " width="211" height="373" viewBox="0 0 211 373" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1966_2593)">
          <rect x="4" width="202.24" height="364.35" rx="8.89236" fill="#C4C4C4" shape-rendering="crispEdges"/>
          <path d="M103.466 195.025V170.021H105.876V195.025H103.466ZM92.179 183.738V181.308H117.163V183.738H92.179Z" fill="#7D8871"/>
        </g>
        <defs>
          <filter id="filter0_d_1966_2593" x="0" y="0" width="210.24" height="372.35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1966_2593"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1966_2593" result="shape"/>
          </filter>
        </defs>
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
      <img v-if="!loading" :ref="'file'" :src="file.src"  class="img-fluid main_img_down" :title="'file' + f" />
      <img v-else src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"  class="img-fluid main_img_down" :title="'file' + f" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPhoto",
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
      this.$store.dispatch('deleteImage', this.id)
          .then(() => {
            this.files.splice(idx, 1)
          })
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
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
              const width = img.width;
              const height = img.height;
              const vertical = (width - height) / (width + height) * 100
              if (vertical <= -23.93887945670628) {
                this.readers[f].readAsDataURL(this.files[f]);
                const formData = new FormData()
                formData.append('multipartFile', this.files[f])
                this.$store.dispatch('uploadMainImage',formData)
                    .then(() => setTimeout(() =>this.loading = false, 1000))
              } else {
                this.files = []
                alert('Изображение должно быть не более 1000 пикселей по ширине и высоте');
                // изображение не разрешено, сделайте здесь что-то еще, например, очистите input
              }
            };

          })
        })
      }

    }
  },
}
</script>

<style scoped>
.main_img_down {
  height: auto;
  width: auto;
  max-width:202.24px;
  border-radius: 8.89236px;
}
.close {
  background-color: white;
  position: absolute;
  right: -24px;
  top: 2px;
  cursor: pointer;
  z-index: 3;
}
</style>
