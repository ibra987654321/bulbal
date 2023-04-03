<template>
  <div>
    <component :is="resolveLayout">
      <router-view></router-view>
    </component>
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
 }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
body {
  font-family: 'Roboto', sans-serif;
}
.card_block {
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.08));
  border: 1px solid #e3e2e2;
}
.w-100 {
  width: 100%;
}
</style>
