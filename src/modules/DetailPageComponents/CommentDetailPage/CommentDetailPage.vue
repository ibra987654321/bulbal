<template>
  <div :class="$vuetify.breakpoint.mobile ? 'container' : ''">
    <div>
      <v-card elevation="0" class="transparent" >
        <v-card-title class="pl-0 pt-0 d-flex justify-space-between" :class="$vuetify.breakpoint.mobile ? '' : ''">
          <div><h2 class="title_comment_content">Добавить отзыв</h2></div>
<!--          <svg  width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <g clip-path="url(#clip0_240_2688)">-->
<!--              <path d="M7.38799 2.08514C7.61959 1.54844 8.3806 1.54844 8.6122 2.08514L10.0656 5.45307C10.1636 5.68033 10.3795 5.83454 10.6263 5.85361L14.3535 6.14161C14.9514 6.18782 15.189 6.93852 14.7265 7.32038L11.9235 9.63457C11.7258 9.7978 11.6392 10.0599 11.7008 10.3088L12.5635 13.7943C12.7054 14.3676 12.0871 14.8286 11.5781 14.529L8.33831 12.6217C8.12957 12.4988 7.87061 12.4988 7.66188 12.6217L4.42204 14.529C3.91318 14.8286 3.29481 14.3676 3.43667 13.7943L4.29931 10.3088C4.3609 10.0599 4.27432 9.7978 4.07662 9.63457L1.27368 7.32038C0.811173 6.93852 1.04878 6.18782 1.64677 6.14161L5.37388 5.85361C5.62066 5.83454 5.83656 5.68032 5.93463 5.45307L7.38799 2.08514Z" fill="#FFD166"/>-->
<!--              <path d="M26.388 2.08514C26.6196 1.54844 27.3806 1.54844 27.6122 2.08514L29.0656 5.45307C29.1636 5.68033 29.3795 5.83454 29.6263 5.85361L33.3535 6.14161C33.9514 6.18782 34.189 6.93852 33.7265 7.32038L30.9235 9.63457C30.7258 9.7978 30.6392 10.0599 30.7008 10.3088L31.5635 13.7943C31.7054 14.3676 31.0871 14.8286 30.5781 14.529L27.3383 12.6217C27.1296 12.4988 26.8706 12.4988 26.6619 12.6217L23.422 14.529C22.9132 14.8286 22.2948 14.3676 22.4367 13.7943L23.2993 10.3088C23.3609 10.0599 23.2743 9.7978 23.0766 9.63457L20.2737 7.32038C19.8112 6.93852 20.0488 6.18782 20.6468 6.14161L24.3739 5.85361C24.6207 5.83454 24.8366 5.68032 24.9346 5.45307L26.388 2.08514Z" fill="#FFD166"/>-->
<!--              <path d="M45.3877 2.08514C45.6193 1.54844 46.3804 1.54844 46.612 2.08514L48.0653 5.45307C48.1634 5.68033 48.3793 5.83454 48.6261 5.85361L52.3532 6.14161C52.9511 6.18782 53.1887 6.93852 52.7262 7.32038L49.9233 9.63457C49.7256 9.7978 49.639 10.0599 49.7006 10.3088L50.5632 13.7943C50.7051 14.3676 50.0868 14.8286 49.5779 14.529L46.3381 12.6217C46.1293 12.4988 45.8704 12.4988 45.6616 12.6217L42.4218 14.529C41.9129 14.8286 41.2946 14.3676 41.4364 13.7943L42.2991 10.3088C42.3607 10.0599 42.2741 9.7978 42.0764 9.63457L39.2734 7.32038C38.8109 6.93852 39.0485 6.18782 39.6465 6.14161L43.3736 5.85361C43.6204 5.83454 43.8363 5.68032 43.9344 5.45307L45.3877 2.08514Z" fill="#FFD166"/>-->
<!--              <path d="M64.388 2.08514C64.6196 1.54844 65.3806 1.54844 65.6122 2.08514L67.0656 5.45307C67.1636 5.68033 67.3795 5.83454 67.6263 5.85361L71.3535 6.14161C71.9514 6.18782 72.189 6.93852 71.7265 7.32038L68.9235 9.63457C68.7258 9.7978 68.6392 10.0599 68.7008 10.3088L69.5635 13.7943C69.7054 14.3676 69.0871 14.8286 68.5781 14.529L65.3383 12.6217C65.1296 12.4988 64.8706 12.4988 64.6619 12.6217L61.422 14.529C60.9132 14.8286 60.2948 14.3676 60.4367 13.7943L61.2993 10.3088C61.3609 10.0599 61.2743 9.7978 61.0766 9.63457L58.2737 7.32038C57.8112 6.93852 58.0488 6.18782 58.6468 6.14161L62.3739 5.85361C62.6207 5.83454 62.8366 5.68032 62.9346 5.45307L64.388 2.08514Z" fill="#FFD166"/>-->
<!--              <path d="M83.388 2.08514C83.6196 1.54844 84.3806 1.54844 84.6122 2.08514L86.0656 5.45307C86.1636 5.68033 86.3795 5.83454 86.6263 5.85361L90.3535 6.14161C90.9514 6.18782 91.189 6.93852 90.7265 7.32038L87.9235 9.63457C87.7258 9.7978 87.6392 10.0599 87.7008 10.3088L88.5635 13.7943C88.7054 14.3676 88.0871 14.8286 87.5781 14.529L84.3383 12.6217C84.1296 12.4988 83.8706 12.4988 83.6619 12.6217L80.422 14.529C79.9132 14.8286 79.2948 14.3676 79.4367 13.7943L80.2993 10.3088C80.3609 10.0599 80.2743 9.7978 80.0766 9.63457L77.2737 7.32038C76.8112 6.93852 77.0488 6.18782 77.6468 6.14161L81.3739 5.85361C81.6207 5.83454 81.8366 5.68032 81.9346 5.45307L83.388 2.08514Z" fill="#FFD166"/>-->
<!--            </g>-->
<!--            <defs>-->
<!--              <clipPath id="clip0_240_2688">-->
<!--                <rect width="92" height="16" fill="white"/>-->
<!--              </clipPath>-->
<!--            </defs>-->
<!--          </svg>-->
        </v-card-title>
        <v-card-text class="pl-0">
          <div class="d-flex justify-space-between">
            <div>
              Чем больше отзывов вы оставляете, тем больше скидок мы вам делаем
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div class="poppins">
      <v-form  aria-autocomplete="off">
        <v-text-field
            v-model="$store.state.postDetail.comments.text"
            hide-details
            color="secondary"
            label="Поделитесь своими мыслями"
            outlined
            class="input"
        >
          <template #append >
            <div class="block_btn">
              <v-btn
                  :loading="getLoading"
                  color="primary"
                  type="submit"
                  rounded
                  class="text-capitalize search__btn"
                  @click="submit($event)"
              >
                Отправить
              </v-btn>
            </div>
          </template>
        </v-text-field>
      </v-form>
    </div>
    <v-card elevation="0" class="transparent mt-5" >
      <v-card-title class="pl-0 pt-0 d-flex justify-space-between" :class="$vuetify.breakpoint.mobile ? '' : ''">
        <div><h2 class="title_comment_content">{{ getComments.length }} отзывов</h2></div>
      </v-card-title>
    </v-card>
    <comment-card class="poppins" v-for="(comment,i) in getComments" :key="i" :item="comment"></comment-card>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import CommentCard from "@/entities/CommentCard/CommentCard";
import {mapGetters} from "vuex";
export default {
  name: "CommentDetailPage",
  components: {
    titleCard,
    CommentCard
  },
  data: () => ({
    text: ''
  }),
  computed: {
    ...mapGetters(['getComments', 'getLoading'])
  },
  mounted() {
    this.listOfData()
  },
  methods: {
    listOfData() {
      this.$store.dispatch('getCommentsByAccommodationId', Number(this.$route.params.id))
    },
    submit(e) {
      e.preventDefault()
      this.$store.dispatch('postCommentsByAccommodationId', {
        accommodationId: Number(this.$route.params.id),
      })
    }
  }
}
</script>
<style scoped>
.search__btn {
  max-height: 100px;
}
.block_btn {
}
</style>
<style>
.input {
  border-radius: 14px;
  border: 1px solid #E6E8EC;
}
.title_comment_content {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.v-input__append-inner {
  margin: 0 !important;
  min-height: 52px;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
