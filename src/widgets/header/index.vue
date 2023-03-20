<template>
  <div>
    <mobileHeader v-if="$vuetify.breakpoint.mobile"/>
    <Header v-else/>
  </div>
</template>
<script>
import Header from "@/widgets/header/components/header";
import mobileHeader from "@/widgets/header/components/mobileHeader";

export default {
  name: 'navbar',
  components: {
    Header,
    mobileHeader
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
