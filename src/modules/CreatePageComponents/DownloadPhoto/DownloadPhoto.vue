<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div class="block">
      <create-card
          title="Загрузка фотографии"
          sub-title="Загрузите фотографии"
      >
        <v-row :class="$vuetify.breakpoint.mobile ? '' : 'desktop'">
          <v-col cols="12" sm="3" class="d-flex justify-center">
            <div>
              <svg @click="onButtonClick" style="cursor: pointer" width="200" height="200" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="147.894" height="147.894" fill="#C4C4C4"/>
                <path d="M72.4659 87.0249V62.0206H74.8757V87.0249H72.4659ZM61.179 75.7379V73.3075H86.1626V75.7379H61.179Z" fill="#7D8871"/>
              </svg>
              <input
                  ref="uploader"
                  class="d-none"
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/bmp"
                  @change="onFileChanged"
              >
            </div>
          </v-col>
          <v-col cols=12 sm="3" v-for="(file,f) in files" :key="f" class="d-flex justify-center">
            <div style="position: relative" >
              <v-icon color="black" @click="onClickRemove(file)" class="close">mdi-close</v-icon>
              <img :ref="'file'" src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" width="200" height="200" class="img-fluid" :title="'file' + f" />
            </div>
          </v-col>
        </v-row>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";

export default {
  name: "DownloadPhoto",
  components: {
    CreateCard
  },
  data: () => ({
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    files: [],
    readers: [],
    selectedFile: null,
    isSelecting: false
  }),
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      })
      this.$refs.uploader.click()
    },
    onClickRemove(file) {
      console.log(this.files)
      this.files = this.files.filter(item => item.name !== file.name)
    },
    onFileChanged(e) {
      if (e.target.files !== undefined) {
        Array.from(e.target.files).forEach(item => {
          this.files.push(item)
          Array.from(this.files).forEach((file, f) => {
            this.readers[f] = new FileReader();
            this.readers[f].onloadend = (e) => {
              let fileData = this.readers[f].result
              let imgRef = this.$refs.file[f]
              setTimeout(async () => {
                imgRef.src = await fileData
              },1000)
              // send to server here...
            }

            this.readers[f].readAsDataURL(this.files[f]);

            // do something
          })
        })
      }

    }
  },
}
</script>

<style scoped>
.desktop {
  min-width:870px
}
.close {
  background-color: white;
  position: absolute;
  right: 2px;
  top: 2px;
  cursor: pointer;
  z-index: 3;
}
</style>
