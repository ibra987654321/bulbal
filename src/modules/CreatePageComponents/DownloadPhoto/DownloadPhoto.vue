<template>
  <div class="d-flex align-center justify-center fill-height w-100">
<!--    <div :style="$vuetify.breakpoint.mobile ? 'max-width: 870px;' : 'min-width: 870px;'">-->
    <div style="max-width: 870px;">
      <create-card
          title="Загрузка фотографии"
          sub-title="Загрузите фотографию "
      >
        <v-row>
          <v-col cols="12" sm="3">
            <MainPhoto/>
            <div class="ml-4 photo_title">
              Поменять обложку
            </div>
          </v-col>
          <v-col cols="12" sm="9">
            <Photo style="float: left"/>
            <Photo style="float: left"/>
            <Photo style="float: left"/>
            <Photo style="float: left"/>
            <Photo style="float: left"/>
            <Photo style="float: left"/>
          </v-col>
        </v-row>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";
import Photo from "@/modules/CreatePageComponents/DownloadPhoto/Photo";
import MainPhoto from "@/modules/CreatePageComponents/DownloadPhoto/MainPhoto";

export default {
  name: "DownloadPhoto",
  components: {
    CreateCard,
    Photo,
    MainPhoto
  },
  data: () => ({
  }),
  methods: {
    onFileChanged(e) {
    }
  },
}
</script>

<style scoped>
.close {
  background-color: white;
  position: absolute;
  right: 2px;
  top: 2px;
  cursor: pointer;
  z-index: 3;
}
.main_img {
  height: 100%;
  max-height: 364px;
  border-radius: 8.89236px;
}
.photo_title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.5px;

}
</style>
