<template>
  <div>
    <stack
        :column-min-width="300"
        :gutter-width="15"
        :gutter-height="15"
        monitor-images-loaded
    >
      <stack-item
          v-for="(item, i) in data"
          :key="i"
          style="transition: transform 300ms"
      >
        <slot :src="item.urls.small"></slot>
      </stack-item>
    </stack>
  </div>
</template>

<script>
import {Stack, StackItem} from "vue-stack-grid";

export default {
  name: "StackForDialogGallery",
  components: {
    Stack,
    StackItem,
  },
}
</script>

<style scoped>

</style>
