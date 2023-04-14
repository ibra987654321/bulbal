<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0 px-0" v-if="$vuetify.breakpoint.mobile">
        <div>
          <GalleryForDetailPageMobile/>
        </div>
      </v-col>
      <div :class="$vuetify.breakpoint.mobile ? 'container' : ''">
        <v-col cols="12" :class="!$vuetify.breakpoint.mobile ? 'mt-10' : ''">
          <v-row class="d-flex justify-space-between">
            <v-col cols="12" sm="6">
              <TitleForDetailPage/>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <v-btn text small>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_240_2946)">
                    <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9986 18.0399C17.028 18.5914 16.6047 19.0623 16.0532 19.0917C15.3005 19.1318 14.7044 19.1809 14.2385 19.23C13.6129 19.296 13.2328 19.6803 13.1696 20.2331C13.0789 21.0267 13 22.2278 13 24C13 25.7723 13.0789 26.9733 13.1696 27.767C13.2329 28.3207 13.6121 28.7039 14.2367 28.7698C15.3308 28.8853 17.1392 29 20 29C22.8608 29 24.6692 28.8853 25.7632 28.7698C26.3879 28.7039 26.7671 28.3207 26.8304 27.767C26.9211 26.9733 27 25.7723 27 24C27 22.2278 26.9211 21.0267 26.8304 20.2331C26.7672 19.6803 26.3871 19.296 25.7615 19.23C25.2956 19.1809 24.6995 19.1318 23.9468 19.0917C23.3953 19.0623 22.972 18.5914 23.0014 18.0399C23.0308 17.4884 23.5017 17.0651 24.0532 17.0945C24.8361 17.1363 25.4669 17.1879 25.9712 17.2411C27.4556 17.3976 28.6397 18.4507 28.8175 20.0059C28.9188 20.8923 29 22.1715 29 24C29 25.8285 28.9188 27.1078 28.8175 27.9941C28.6398 29.5484 27.4585 30.602 25.9732 30.7588C24.7919 30.8834 22.9108 31 20 31C17.0892 31 15.2081 30.8834 14.0268 30.7588C12.5415 30.602 11.3602 29.5484 11.1825 27.9941C11.0812 27.1078 11 25.8285 11 24C11 22.1715 11.0812 20.8923 11.1825 20.0059C11.3603 18.4507 12.5444 17.3976 14.0288 17.2411C14.5331 17.1879 15.1639 17.1363 15.9468 17.0945C16.4983 17.0651 16.9692 17.4884 16.9986 18.0399Z" fill="#777E90"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2071 14.2071C16.8166 14.5976 16.1834 14.5976 15.7929 14.2071C15.4024 13.8166 15.4024 13.1834 15.7929 12.7929L19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289L24.2071 12.7929C24.5976 13.1834 24.5976 13.8166 24.2071 14.2071C23.8166 14.5976 23.1834 14.5976 22.7929 14.2071L21 12.4142L21 22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22L19 12.4142L17.2071 14.2071Z" fill="#777E90"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_240_2946">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>
              <v-btn text small>
                <v-img src="@/assets/images/like.png"/>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="!$vuetify.breakpoint.mobile">
          <div>
            <GalleryForDetailPage/>
          </div>
        </v-col>
        <v-col  cols="12" class="mt-15">
          <v-row>
            <v-col  cols="12" sm="7" class="mr-16">
              <v-row>
                <v-col cols="12">
                  <div>
                    <NameTitleDetailPage/>
                  </div>
                  <hr>
                </v-col>
                <v-col cols="12">
                  <RoomCountDetailPage/>
                </v-col>
                <v-col cols="12">
                  <DescriptionDetailPage/>
                </v-col>
                <v-col cols="12">
                  <FacilitiesDetailPage/>
                </v-col>
              </v-row>
            </v-col>
            <v-col  cols="12" sm="4" class="d-flex justify-center">
              <BookCardDetailPage/>
            </v-col>
            <v-col cols="12">
              <div
                  :class="$vuetify.breakpoint.mobile ? '' : 'width'"
                  class="d-flex justify-space-between my-lg-16"
              >
                <v-btn
                    class="text-none px-3 tab_btn"
                    text
                    @click="$emit('save', 'room')"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.90906 7.26521C9.50324 6.8906 8.8706 6.9159 8.496 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.2652 12.1782L8.496 15.6783C8.8706 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.284 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z" fill="#777E90"/>
                  </svg>
                  Назад
                </v-btn>
                <v-btn
                    class="text-none px-3 tab_btn"
                    text
                    @click="submit()"
                >
                  Далее
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.0909 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="#777E90"/>
                  </svg>

                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import TitleForDetailPage from "@/modules/DetailPageComponents/TitleForDetailPage/TitleForDetailPage";
import GalleryForDetailPage from "@/modules/DetailPageComponents/GalleryForDetailPage/GalleryForDetailPage";
import GalleryForDetailPageMobile from "@/modules/DetailPageComponents/GalleryForDetailPage/GalleryForDetailPageMobile";
import titleCard from "@/ui/titleCard/titleCard";
import NameTitleDetailPage from "@/modules/DetailPageComponents/NameTitleDetailPage/NameTitleDetailPage";
import RoomCountDetailPage from "@/modules/DetailPageComponents/RoomCountDetailPage/RoomCountDetailPage";
import DescriptionDetailPage from "@/modules/DetailPageComponents/DescriptionDetailPage/DescriptionDetailPage";
import FacilitiesDetailPage from "@/modules/DetailPageComponents/FacilitiesDetailPage/FacilitiesDetailPage";
import BookCardDetailPage from "@/modules/DetailPageComponents/BookCardDetailPage/BookCardDetailPage";
import OwnerInfoDetailPage from "@/modules/DetailPageComponents/OwnerInfoDetailPage/OwnerInfoDetailPage";
import CommentDetailPage from "@/modules/DetailPageComponents/CommentDetailPage/CommentDetailPage";
import {getSavedObject} from "@/widgets/Create/helpers/helpers";
export default {
  name: "PreviewComponent",
  props: {
    id: String
  },
  components: {
    TitleForDetailPage,
    GalleryForDetailPage,
    GalleryForDetailPageMobile,
    titleCard,
    NameTitleDetailPage,
    RoomCountDetailPage,
    DescriptionDetailPage,
    FacilitiesDetailPage,
    BookCardDetailPage,
    OwnerInfoDetailPage,
    CommentDetailPage,
  },
  mounted() {
    this.$store.dispatch('getAccommodationById', getSavedObject().id)
  },
  methods: {
    submit(event) {
      this.$emit('save', 'next')
    }
  }
}
</script>

<style scoped>

</style>
