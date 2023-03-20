<template>
  <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      :fullscreen="$vuetify.breakpoint.mobile"
  >
    <v-carousel v-model="model">
      <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
      >
        <v-sheet
            :color="color"
            height="100%"
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    id: ''
  },
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
  computed: {
    dialog() {
      return !!this.$props.id;
    }
  }
}
</script>

<style scoped>

</style>
