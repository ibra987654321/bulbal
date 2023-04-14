<template>
  <v-row>
    <v-col cols="12">
      <v-btn
        color="primary"
        outlined
        rounded
        class="text-none"
        :to="`/detail-preview/${getSavedObject.id}`"
      >Открыть предпросмотр</v-btn>
    </v-col>
    <v-col cols="12">
      <v-btn
        color="primary"
        rounded
        class="text-none btn_width"
      >Опубликовать</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {getSavedObject} from "@/widgets/Create/helpers/helpers";
export default {
  name: "CompletionDescription",
  setup() {
    return {
      getSavedObject: getSavedObject()
    }
  }
}
</script>

<style scoped>
.btn_width {
  width: 100%;
  max-width:220px ;
}
</style>
