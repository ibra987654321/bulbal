<template>
  <div class="">
    <stack
        :column-min-width="columnMinWidth"
        :gutter-width="15"
        :gutter-height="15"
        monitor-images-loaded
    >
      <stack-item
          v-for="(item, i) in data"
          :key="i"
          style="transition: transform 300ms"
      >
        <img

            :src="item.urls.small"
            :alt="item.alt_description"
        />
      </stack-item>
    </stack>
  </div>
</template>

<script>
import {Stack, StackItem} from "vue-stack-grid";
export default {
  props: {
    columnMinWidth: Number,
    data: Array,
    itemName: String,

  },
  name: "StackUi",
  components: {
    Stack,
    StackItem,
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 3px;
}
</style>
