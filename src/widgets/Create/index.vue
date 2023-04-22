<template>
  <v-card class="create_tabs" elevation="0">
    <div >
      <v-tabs
          v-model="tab"
          hide-slider
      >
        <v-tab
            v-for="(item, idx) in components"
            :key="idx"
            class="pb-6"
        >
          <component :is="icons[idx]" :color="tab === idx"></component>
        </v-tab>
      </v-tabs>
    </div>


    <v-tabs-items v-model="tab">
      <v-tab-item
          transition="fade-transition"
          reverse-transition="fade-transition"
          v-for="(item, idx) in components"
          :key="idx"
      >
        <v-card flat :class="$vuetify.breakpoint.mobile ? 'container' : ''">
          <component :is="components[idx]"  @save="submit($event)"></component>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <success-dialog :dialog="success"></success-dialog>
  </v-card>
</template>

<script>
import HouseComponent from "@/widgets/Create/components/HouseComponent";
import RoomComponent from "@/widgets/Create/components/RoomComponent";
import CompletionComponent from "@/widgets/Create/components/CompletionComponent";
import PreviewComponent from "@/widgets/Create/components/PreviewComponent";
import SuccessDialog from "@/widgets/Create/components/SuccessDialog";
import home from "@/widgets/Create/icons/home";
import room from "@/widgets/Create/icons/room";
import photo from "@/widgets/Create/icons/photo";
import bed from "@/widgets/Create/icons/bed"
import {getObject, setObject} from "@/widgets/Create/helpers/helpers";
export default {
  name: "index",
  components: {
    SuccessDialog
  },
  data: () => ({
    icons: [home,room,bed, photo],
    components: [HouseComponent, RoomComponent, PreviewComponent, CompletionComponent],
    tab: null,
    success: false
  }),
  computed: {
    createObject() {
      return this.$store.state.create.createObject
    }
  },
  watch: {
    createObject: {
      handler(val) {
        if (val === null) {
          setObject(this.$store.state.create.createObject)
          return
        }
        setObject(val)
      },
      deep: true,
    },
  },
  mounted() {
    setTimeout(() => {
      if (getObject() !== null) {
        this.$store.state.create.createObject = getObject()
        return
      }
      this.$store.state.create.createObject = {
        "ownerId": 1, // id user есть сейчас в БД от 1 до 5
        "region": "", // передаешь название региона
        "locality": "", // передаешь название локации
        "titleOfAccommodation": "", // название дома
        "fullDescriptionOfAccommodation": "", // полное описание
        "conveniences": [],
      }
    }, 0)
  },
  methods: {
    submit(v) {
      if (v === 'house') {
        this.tab = 0
      } else if (v === 'room') {
        this.tab = 1
      }else if (v === 'prev') {
        this.tab--
      }else if (v === 'publish') {
        this.success = true
        this.$store.commit('setNullRoomData')
      } else {
        this.tab++
      }

    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
}
</script>

<style scoped>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.shadow {
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.08) !important;
}
</style>
<style lang="scss">
.create_tabs {
  .v-tabs-bar {
    height: 100% !important;
  }
  .v-slide-group__content {
    justify-content: center;
  }
}
</style>
