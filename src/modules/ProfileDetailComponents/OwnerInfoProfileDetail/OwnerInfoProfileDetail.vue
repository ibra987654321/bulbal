<template>
  <v-card class=" elevation-0 card_block" style="border: 1px solid #E6E8EC; border-radius: 24px; padding: 30px">
    <div class="d-flex flex-column align-center">
      <v-card-title class="avatar">
        <div v-if="profileDetail.user.image !== null">
          <v-img v-if="!files.length" width="160" height="160" class="avatar_item" :src="`img/avatar/${profileDetail.user.image.fileName}`" alt=""></v-img>
          <div v-else style="position: relative" v-for="(file,f) in files" :key="f">
            <img v-if="!loading" width="160" height="160" class="avatar_item" :ref="'file'" :src="file.src"   :title="'file' + f" />
            <img v-else width="160" height="160" class="avatar_item" src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"   :title="'file' + f" />
          </div>
          <v-img class="check" :src="require('@/assets/icons/check.png')"/>
        </div>
        <div v-else>
          <Avatar width="160" height="160"/>
        </div>

      </v-card-title>
      <div class="text-center">
        <div @click="onButtonClick" class="d-flex justify-center pl-3 edit__profile_icon">
          <svg class="mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.68531 15.3317L2.28918 12.6142C2.4267 11.9954 2.73784 11.4286 3.18611 10.9803L11.3927 2.77368C12.6944 1.47193 14.805 1.47193 16.1067 2.77367L17.226 3.89296C18.5278 5.19471 18.5278 7.30526 17.226 8.607L9.01945 16.8137C8.57118 17.2619 8.00437 17.5731 7.38552 17.7106L4.6681 18.3145C2.88185 18.7114 1.28837 17.1179 1.68531 15.3317ZM3.91616 12.9758L3.31228 15.6932C3.17997 16.2886 3.71113 16.8198 4.30655 16.6875L7.02397 16.0836C7.32156 16.0175 7.59507 15.8711 7.81495 15.6606L4.3392 12.1848C4.12871 12.4047 3.98229 12.6782 3.91616 12.9758ZM5.51743 11.006L8.99374 14.4823L13.6485 9.82748L10.1723 6.35117L5.51743 11.006ZM16.0475 7.42849L14.8271 8.64897L11.3508 5.17266L12.5712 3.95218C13.2221 3.30131 14.2774 3.30131 14.9282 3.95218L16.0475 5.07147C16.6984 5.72234 16.6984 6.77762 16.0475 7.42849Z" fill="#777E90"/>
          </svg>
          <div class="grey--text">Обновить аватар</div>
          <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/png, image/jpeg, image/bmp"
              @change="onFileChanged"
          >
        </div>
        <h3 class="profile__name">{{ profileDetail.user.name }}</h3>
        <div class=" pl-3">
          <v-chip  color="accent" v-for="item in profileDetail.user.hobbies">{{item.name}}</v-chip>
        </div>
      </div>
    </div>
    <v-card-text>
      <div class="mb-4 grey--text text-center">
        Я люблю
        <v-chip v-for="item in profileDetail.user.likeTravels" color="accent" small class="mr-1 mb-1">{{item.name}}</v-chip>
      </div>
    </v-card-text>
    <v-card-text class="mb-5">
      <div class="d-flex justify-center">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15091 11.6665C1.77281 11.6704 0.883213 13.2403 1.73221 14.4298C2.94806 16.133 5.15286 17.5 8.83371 17.5C14.5379 17.5 19.1167 12.8514 18.4757 7.35925L19.4148 5.48108C20.0661 4.17857 18.9344 2.69685 17.5064 2.98245L16.2657 3.23058C15.9368 3.05703 15.5964 2.92606 15.3055 2.83117C14.7385 2.64627 14.0522 2.5 13.417 2.5C12.2759 2.5 11.2911 2.79276 10.5085 3.37994C9.73471 3.96053 9.29887 4.72354 9.05971 5.42421C8.94946 5.74717 8.87604 6.07112 8.82893 6.38203C8.38621 6.24269 7.93478 6.05522 7.49283 5.82629C6.49016 5.30693 5.67937 4.64852 5.222 4.07126C4.45464 3.10275 2.82844 3.17456 2.25779 4.43351C1.4535 6.20789 1.67413 8.31122 2.39708 10.0107C2.6394 10.5803 2.95461 11.1434 3.3397 11.6652C3.27377 11.666 3.21071 11.6663 3.15091 11.6665ZM8.83362 15.8333C5.61417 15.8333 3.94945 14.6672 3.08866 13.4614C3.04998 13.4072 3.08898 13.3333 3.15554 13.3332C4.03124 13.3307 5.82874 13.2892 7.01424 12.5954C7.07555 12.5595 7.06206 12.4691 6.99472 12.4465C4.23125 11.5173 2.66039 7.58216 3.77571 5.12158C3.80128 5.06517 3.87711 5.05772 3.91559 5.10628C5.18965 6.71432 7.97531 8.28933 10.399 8.33242C10.4515 8.33333 10.4913 8.28558 10.4833 8.23361C10.3856 7.60044 10.0127 4.16667 13.4169 4.16667C14.2298 4.16667 15.4393 4.56319 15.8848 4.96942C15.9054 4.98819 15.9333 4.99672 15.9607 4.99125L17.8332 4.61675C17.9012 4.60315 17.9551 4.67371 17.9241 4.73573L16.7627 7.05849C16.7546 7.07462 16.7521 7.09312 16.7552 7.11088C17.5686 11.6833 13.8236 15.8333 8.83362 15.8333Z" fill="#777E90"/>
        </svg>
        <svg class="mx-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8334 3.3333H7.16675C5.3258 3.3333 3.83342 4.82568 3.83342 6.66663V13.3333C3.83342 15.1742 5.3258 16.6666 7.16675 16.6666H13.8334C15.6743 16.6666 17.1667 15.1742 17.1667 13.3333V6.66663C17.1667 4.82568 15.6743 3.3333 13.8334 3.3333ZM7.16675 1.66663C4.40533 1.66663 2.16675 3.90521 2.16675 6.66663V13.3333C2.16675 16.0947 4.40533 18.3333 7.16675 18.3333H13.8334C16.5948 18.3333 18.8334 16.0947 18.8334 13.3333V6.66663C18.8334 3.90521 16.5948 1.66663 13.8334 1.66663H7.16675Z" fill="#777E90"/>
          <path d="M14.6666 6.66667C15.1268 6.66667 15.4999 6.29357 15.4999 5.83333C15.4999 5.3731 15.1268 5 14.6666 5C14.2063 5 13.8333 5.3731 13.8333 5.83333C13.8333 6.29357 14.2063 6.66667 14.6666 6.66667Z" fill="#777E90"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6666 10C14.6666 12.3012 12.8011 14.1667 10.4999 14.1667C8.19873 14.1667 6.33325 12.3012 6.33325 10C6.33325 7.69885 8.19873 5.83337 10.4999 5.83337C12.8011 5.83337 14.6666 7.69885 14.6666 10ZM12.9999 10C12.9999 11.3808 11.8807 12.5 10.4999 12.5C9.11917 12.5 7.99992 11.3808 7.99992 10C7.99992 8.61929 9.11917 7.50004 10.4999 7.50004C11.8807 7.50004 12.9999 8.61929 12.9999 10Z" fill="#777E90"/>
        </svg>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5001 16.6666C14.182 16.6666 17.1667 13.6819 17.1667 9.99996C17.1667 6.31806 14.182 3.3333 10.5001 3.3333C6.81818 3.3333 3.83342 6.31806 3.83342 9.99996C3.83342 13.6819 6.81818 16.6666 10.5001 16.6666ZM10.5001 18.3333C15.1024 18.3333 18.8334 14.6023 18.8334 9.99996C18.8334 5.39759 15.1024 1.66663 10.5001 1.66663C5.89771 1.66663 2.16675 5.39759 2.16675 9.99996C2.16675 14.6023 5.89771 18.3333 10.5001 18.3333Z" fill="#777E90"/>
          <path d="M10.5001 8.33337C10.5001 7.87314 10.8732 7.50004 11.3334 7.50004H12.1668C12.627 7.50004 13.0001 7.12695 13.0001 6.6667C13.0001 6.20647 12.627 5.83337 12.1668 5.83337H11.3334C9.95267 5.83337 8.83342 6.95266 8.83342 8.33337V10H8.00008C7.53985 10 7.16675 10.3731 7.16675 10.8334C7.16675 11.2936 7.53984 11.6667 8.00008 11.6667H8.83342V16.6666C8.83342 17.1269 9.2065 17.5 9.66675 17.5C10.127 17.5 10.5001 17.1269 10.5001 16.6666V11.6667H12.1668C12.627 11.6667 13.0001 11.2936 13.0001 10.8334C13.0001 10.3731 12.627 10 12.1668 10H10.5001V8.33337Z" fill="#777E90"/>
        </svg>
      </div>
    </v-card-text>
    <v-card-text>
      <hr class="mx-10">
    </v-card-text>
    <v-card-text class="d-flex align-center justify-center">
      <svg class="mr-3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.5L9.58504 2.65079C10.141 2.00212 9.68013 1 8.82578 1L2 1L2 8L8.82578 8C9.68013 8 10.141 6.99788 9.58504 6.34921L8 4.5ZM3 7L8.82578 7L6.68292 4.5L8.82578 2L3 2L3 7Z" fill="#777E90"/>
        <path d="M2 0.5C2 0.223858 2.22386 0 2.5 0C2.77614 0 3 0.223858 3 0.5V11.5C3 11.7761 2.77614 12 2.5 12C2.22386 12 2 11.7761 2 11.5V0.5Z" fill="#777E90"/>
      </svg>
      Пожаловаться
    </v-card-text>
  </v-card>
</template>

<script>
import {mapState} from "vuex";
import {decodeJWT} from "@/helpers/helpers";
import Avatar from "@/entities/Avatar/Avatar";

export default {
  name: "OwnerInfoProfileDetail",
  components: {Avatar},
  computed: {
    ...mapState(['profileDetail'])
  },
  mounted() {
    this.$store.dispatch('getUserById', decodeJWT().userId)
  },
  data: () => ({
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    files: [],
    readers: [],
    selectedFile: null,
    isSelecting: false,
    loading: false,
    id: ''
  }),
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      })
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.files = []
      this.loading = true
      if (e.target.files !== undefined) {
        Array.from(e.target.files).forEach(  item => {
          this.files.push(item)
          Array.from(this.files).forEach((file, f) => {
            this.readers[f] = new FileReader();
            this.readers[f].onloadend = (e) => {
              file.src = this.readers[f].result
            }
            this.readers[f].readAsDataURL(this.files[f]);
            const formData = new FormData()
            formData.append('multipartFile', this.files[f])
            this.$store.dispatch('uploadAvatar',formData)
                .then((r) => {
                  this.loading = false
                })

          })
        })
      }

    }
  }
}
</script>

<style scoped>
.profile__name {
  font-weight: 700;
  font-size: 32px;
}
.edit__profile_icon {
  cursor: pointer;
  margin: 0 auto;
}
.avatar {
  position: relative;
}
.avatar_item {
  border-radius: 50%;
}
.check {
  position: absolute;
  top: 24px;
  right: 14px;
}

</style>
<style>
.v-chip__content {
  color: black;
}
</style>
