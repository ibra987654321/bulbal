<template>
  <div class="">
    <v-row>
      <v-col cols="12" sm="10">
        <title-card
            :title="` ${ postDetail.createObject.region } / ${ postDetail.createObject.locality } / ${postDetail.createObject.address}`"
            small
        >
<!--          <div class="d-flex align-center mt-5">-->
<!--            <div class="mr-2">-->
<!--              12 гостей •-->
<!--            </div>-->
<!--            <div class="mr-2">4 спальни • </div>-->
<!--            <div>-->
<!--              Коворкинг-->
<!--            </div>-->
<!--          </div>-->
        </title-card>
      </v-col>
      <v-col cols="12" sm="2" class="d-flex" :class="$vuetify.breakpoint.mobile ? '': 'justify-end'">
        <div class="d-flex align-center" :class="$vuetify.breakpoint.mobile ? '' : 'flex-column'">
          <Avatar :class="$vuetify.breakpoint.mobile ? 'mr-2' : ''" width="64" height="64" user-id/>
          <div class="user black--text">{{getOwnerData.name}}</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import Avatar from "@/entities/Avatar/Avatar";
import {mapGetters, mapState} from "vuex";

export default {
  name: "NameTitleDetailPage",
  components: {
    titleCard,
    Avatar
  },
  computed: {
    ...mapState(['postDetail']),
    ...mapGetters(['getOwnerData'])
  },
}
</script>

<style scoped>
.user {
  margin-top: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: black;
}
</style>
