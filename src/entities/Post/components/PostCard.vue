<template>
<div>
  <v-card
      elevation="10"
  >
    <v-card-title>
      <v-img
        src="https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=1440"
      ></v-img>
    </v-card-title>
    <v-card-title >
      <v-flex class="d-flex">
        <div>
          Cafe Badilico
        </div>

<!--        <v-row-->
<!--            align="center"-->
<!--            class="mx-0"-->
<!--        >-->
<!--          <v-rating-->
<!--              :value="4.5"-->
<!--              color="amber"-->
<!--              dense-->
<!--              half-increments-->
<!--              readonly-->
<!--              size="14"-->
<!--          ></v-rating>-->

          <div class="grey--text ms-4">
            4.5 (413)
          </div>
<!--        </v-row>-->
      </v-flex>
    </v-card-title>
    <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>
    <v-card-text class="d-flex">
      <div class="font-weight-bold">$97</div>
      <div>night</div>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  provide: true,
  name: "PostCard"
}
</script>

<style scoped>

</style>
