<template>
  <v-card elevation="0" class="transparent" >
    <v-card-title class="pl-0 pt-0" :class="$vuetify.breakpoint.mobile ? 'd-flex flex-column align-center' : ''">
      <div v-if="!small"><h2 class="font-weight-medium title__content">{{title}}</h2></div>
      <div v-else class="small">{{title}}</div>
      <v-spacer></v-spacer>
      <v-btn
          v-if="btnTitle"
          :to="btnRedirect"
          class="text-none"
          outlined
          elevation="0"
          rounded
          :class="$vuetify.breakpoint.mobile ? 'mt-3' : ''"
      >{{btnTitle}}</v-btn>
    </v-card-title>
    <v-card-subtitle v-if="subtitle" class="pl-0">{{subtitle}}</v-card-subtitle>
   <v-card-text class="pl-0">
     <slot></slot>
   </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    small: {
      type: Boolean,
      default: false
    },
    subtitle: String,
    btnTitle: String,
    btnRedirect: String,
  },
  name: "titleCard"
}
</script>

<style scoped>
.title__width {
  width: 800px;
}
.title__content {
  font-size: 48px;
  line-height: 56px;
}
.small {
  font-size: 30px;
}
</style>
