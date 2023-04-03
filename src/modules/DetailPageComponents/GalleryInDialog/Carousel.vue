<template>
  <v-dialog
      v-model="dialog"
      max-width="1300px"
      transition="dialog-bottom-transition"
  >
    <v-carousel v-model="model" height="600px">
      <v-carousel-item
          v-for="(image, i) in images"
          :key="i"
      >
          <v-row  class="fill-height"
                 align="center"
                 justify="center">
            <div
                class="img"
            >
              <v-img
                  :src="image.urls.regular"
              ></v-img>
            </div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    id: '',
    images: Array
  },
  data: () => ({
    model: 0,
    dialog: false,
  }),
  computed: {
    idLocal: {
      get: function() {
        return this.id
      },
      set: function(value) {
        this.$emit('changeId', value)
      }
    }
  },
  watch: {
    'idLocal'(v) {
      if (v) {
        const item = this.$props.images.find(i => v === i.id)
        this.model = this.$props.images.indexOf(item)
        this.dialog = true
      }
    },
    dialog(v) {
      if (!v) {
        this.idLocal = ''
      }
    }
  },
}
</script>

<style scoped>
.img {
}
</style>
