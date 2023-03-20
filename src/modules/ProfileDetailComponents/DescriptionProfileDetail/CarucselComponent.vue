<template>
  <v-carousel hide-delimiter-background hide-delimiters>
    <template v-for="(item, index) in images">
      <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1"
                       :key="index"
      >
        <v-row class="flex-nowrap" style="height:100%">
          <template v-for="(n,i) in columns">
            <template v-if="(+index + i) < images.length">
              <v-col :key="i">
                <v-row class="fill-height "
                       align="center"
                       justify="center"
                >
                  <v-card
                      class="card block"
                      elevation="0"
                  >
                    <v-img
                        :src="require(`./images/Frame${+index + i + 1}.png`)"
                        max-width="200px"
                        class="d-block ml-auto mr-auto"
                    ></v-img>
                  </v-card>
                </v-row>
              </v-col>
            </template>
          </template>
        </v-row>
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<script>
export default {
  name: "CarucselComponent",
  data:() => ({
    images: [1,2,3]
  }),
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  },
}
</script>

<style scoped>

</style>
