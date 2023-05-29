<template>
  <v-row>
    <v-col cols="12">
      <v-btn
          color="primary"
          outlined
          rounded
          class="text-none"
          @click="$emit('prev')"
      >Открыть предпросмотр</v-btn>
    </v-col>
    <v-col cols="12">
      <v-btn
          color="primary"
          rounded
          class="text-none btn_width"
          @click="$emit('publish')"
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
.label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 1.5px;
  color: #555555;
}
</style>
