<template>
  <div>
    <transition
        name="main"
        mode="out-in"
    >
      <component :is="resolveLayout">
        <router-view/>
      </component>
    </transition>
  </div>
</template>

<script>
import LayoutContent from "@/layouts/content";
import LayoutCreate from "@/layouts/Create"
export default {
  name: 'App',
  components: {
    LayoutContent,
    LayoutCreate
  },
 computed: {
    resolveLayout() {
      if (this.$route.name === null) return null

      if (this.$route.meta.layout === 'create') return 'layout-create'

      return 'layout-content'
    }
 },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@font-face {
  font-family: 'poppins_regular';
  src: url("./assets/fonts/poppins-regular-webfont.eot");
  src: local('@'), url("./assets/fonts/poppins-regular-webfont.woff")format('woff'), url("./assets/fonts/poppins-regular-webfont.woff2")format('woff2'), url("./assets/fonts/poppins-regular.ttf")format('ttf');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Inter', sans-serif;
}
.inter {
  font-family: 'Inter', sans-serif;
}
.poppins {
  font-family: 'poppins_regular', sans-serif;
}
.card_block {
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.08));
  border: 1px solid #e3e2e2;
}
.w-100 {
  width: 100%;
}
.main-enter-active,
.main-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.main-enter,
.main-leave-active {
  opacity: 0
}
.post_img {
  border-radius: 12px;
}
</style>
