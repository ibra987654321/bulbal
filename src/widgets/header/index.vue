<template>
  <div>
    <Header/>
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
<style>
.border_r {
  border-radius: 10.0378px;
}
</style>
