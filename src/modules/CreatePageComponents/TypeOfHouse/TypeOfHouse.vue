<template>
   <div class="d-flex align-center justify-center fill-height w-100">
     <div class="block">
       <create-card title="Какой тип жилья будет в распоряжении гостей?">
         <v-list>
           <v-list-item-group
               v-model="selectedItem"
               color="primary"
           >
             <v-list-item
                 v-for="(item, idx) in typeOfHome"
                 :key="idx"
                 class="item"
                 @click="submit(item)"
             >
               <v-list-item-icon>
                 <v-img :src="item.icon"></v-img>
               </v-list-item-icon>
               <v-list-item-content class="list-item-content">
                 {{ item.title }}
               </v-list-item-content>
             </v-list-item>
           </v-list-item-group>
         </v-list>
       </create-card>
     </div>
   </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";
export default {
  name: "TypeOfHouse",
  components: {
    CreateCard
  },
  data:() => ({
    selectedItem: '',
    typeOfHome: [
      {title: 'Дом', icon: require('@/assets/icons/create_icons/home.png')},
      {title: 'Комната', icon: require('@/assets/icons/create_icons/room.png')},
      {title: 'Койка-место', icon: require('@/assets/icons/create_icons/bads.png')},
    ]
  }),
  methods: {
    submit(item) {
      this.$emit('submit', item)
    }
  }

}
</script>

<style scoped>
.item {
  border: #6C7B6B 2px solid;
  border-radius: 12px;
  margin-bottom: 10px;
}
.block {
  max-width: 870px;
}
.list-item-content {
  font-size: 25px;
}
@media only screen and (max-width: 600px) {
  .list-item-content {
    font-size: 18px;
    line-height: 24px;
  }

}
</style>
