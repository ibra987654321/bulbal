<template>
  <v-card elevation="0" class="d-flex align-center justify-space-between">
    <v-card-subtitle>
      <div class="font-weight-bold title_count">
        {{title}}
      </div>
      <div class="v-size--small subtitle_count">{{subtitle}}</div>
    </v-card-subtitle>
    <div class="d-flex">
      <svg @click="decrement" style="cursor: pointer" :width="$vuetify.breakpoint.mobile ? 20 : 24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z" :fill="count === 0 ? '#E6E8EC' : '#B1B5C3'"/>
      </svg>
      <div class="count mx-3 title_count">
        {{count}}
      </div>
      <svg @click="increment" style="cursor: pointer" :width="$vuetify.breakpoint.mobile ? 20 : 24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill="#B1B5C3"/>
      </svg>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    index: Number,
    title: String,
    subtitle: String,
    objectName: String
  },
  name: "CountCardIItem",
  data:() => ({
    count: 0
  }),
  methods: {
    increment() {
      this.count++;
      this.$store.state.header.countItemList[this.index][this.objectName] = this.count
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
        this.$store.state.header.countItemList[this.index][this.objectName] = this.count
      }
    },

  }
}
</script>

<style scoped>
.title_count {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
.subtitle_count {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
}
@media only screen and (max-width: 600px) {
  .title_count {
    font-size: 13.3084px;
  }
  .subtitle_count {
    font-size: 9.98131px;
  }
}
</style>
