<template>
  <div style="background-color: #fff" class="px-8 py-5">
    <CountCardIItem v-for="(item, idx) in $store.state.counter.countItemList" :key="idx" :index="idx" :title="item.title" :subtitle="item.subtitle" :object-name="item.objectName"/>
  </div>
</template>

<script>
import CountCardIItem from "@/entities/CountCardIItem/CountCardIItem";
export default {
  name: "CountCardList",
  components: {
    CountCardIItem
  },
  data:() => ({
    data: [
      {title: 'Взрослые', subtitle: 'от 13 лет', objectName: 'people'},
      {title: 'Дети', subtitle: 'от 0 - 12 лет', objectName: 'child'},
      {title: 'Домашние животные', subtitle: 'U', objectName: 'animal'},
    ]
  })
}
</script>

<style scoped>

</style>
