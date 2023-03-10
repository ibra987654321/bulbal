<template>
  <Header/>
</template>
<script>
import Header from "@/widgets/header/components/header";

export default {
  name: 'navbar',
  components: {
    Header
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
