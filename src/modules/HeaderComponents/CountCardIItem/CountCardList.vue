<template>
  <div style="background-color: #fff" class="px-8 py-5">
    <CountCardIItem v-for="(item, idx) in $store.state.header.countItemList" :key="idx" :index="idx" :title="item.title" :subtitle="item.subtitle" :object-name="item.objectName"/>
  </div>
</template>

<script>
import CountCardIItem from "@/modules/HeaderComponents/CountCardIItem/CountCardIItem";
export default {
  name: "CountCardList",
  components: {
    CountCardIItem
  },
}
</script>

<style scoped>

</style>
