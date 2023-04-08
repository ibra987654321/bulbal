<template>
  <v-row>
    <v-col cols="12">
      <download-photo></download-photo>
    </v-col>
    <v-col>
      <div
          :class="$vuetify.breakpoint.mobile ? '' : 'width'"
          class="d-flex justify-space-around my-lg-16"
      >
        <v-btn
            color="primary"
            class="text-none px-3 save_btn"
            rounded
            @click="$emit('save', 'photo')"
        >
          Сохранить
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import DownloadPhoto from "@/modules/CreatePageComponents/DownloadPhoto/DownloadPhoto";
export default {
  name: "PhotoComponent",
  components: {
    DownloadPhoto
  }
}
</script>

<style scoped>
.width {
  min-width:870px
}
.save_btn {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  padding: 20px 30px !important;
}
</style>
