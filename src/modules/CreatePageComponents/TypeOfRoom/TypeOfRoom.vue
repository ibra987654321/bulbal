<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div class="block">
      <create-card
          v-for="item in typeOfRoom"
          title="Описание комнаты"
          sub-title="Опишите коротко вашу комнату. Вы всегда сможете его отредактировать."
          class="mb-5"
      >
        <v-textarea
            v-model="item.name"
            outlined
            :maxlength="30"
            :counter="30"
            class="rounded-lg"
            color="primary"
        ></v-textarea>
        <v-row>
          <v-col cols="12" class="pb-0">
            <p class="mb-0 subtitle" >Сколько гостей можно разместить в вашем дома?</p>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
                v-model="item.beds[0].name"
                :items="items"
                label="Кровати"
                outlined
                class="border"
                hide-details
                dense
                color="primary"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
                v-model="item.beds[0].size"
                :items="[1,2,3,4,5,6,7,8]"
                label="Количество"
                outlined
                class="border"
                hide-details
                dense
                color="primary"
            ></v-select>
          </v-col>
        </v-row>
      </create-card>
      <v-btn
          class="mb-5 text-none"
          outlined
          @click="addRoom(type)"
          rounded
      >
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.50032 4.66666C9.50032 4.11437 9.05261 3.66666 8.50032 3.66666C7.94804 3.66666 7.50032 4.11437 7.50032 4.66666V6.99998H5.16699C4.61471 6.99998 4.16699 7.44771 4.16699 7.99998C4.16699 8.55227 4.61471 8.99998 5.16699 8.99998H7.50032V11.3333C7.50032 11.8856 7.94804 12.3333 8.50032 12.3333C9.05261 12.3333 9.50032 11.8856 9.50032 11.3333V8.99998H11.8337C12.3859 8.99998 12.8337 8.55227 12.8337 7.99998C12.8337 7.44771 12.3859 6.99998 11.8337 6.99998H9.50032V4.66666Z"
                fill="#23262F"/>
        </svg>

        Добавить комнату
      </v-btn>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";

export default {
  name: "TypeOfRoom",
  components: {
    CreateCard,
  },
  data: () => ({
    items: ['Одно местный', 'Двухместный', 'King-size'],
    typeOfRoom: [],
    type: {
      id: 0, // сам генерирует
      name: "", // название комнаты (гостинная, кухня)
      beds: [
        {
          id: 0, // сам генерирует
          name: "", // название кровати (king size и т.д.)
          size: 0 // размер кровати
        }
      ]
    }

  }),
  mounted() {
    this.addRoom({
      id: 0, // сам генерирует
      name: "", // название комнаты (гостинная, кухня)
      beds: [
        {
          id: 0, // сам генерирует
          name: "", // название кровати (king size и т.д.)
          size: 0 // размер кровати
        }
      ]
    })
  },
  watch: {
    typeOfRoom: {
      handler(val, oldVal) {
        console.log(val)
      },
      deep: true
    }
  },
  methods: {
    submit(item) {
      this.$emit('submit', item)
    },
    addRoom(obj) {
      this.typeOfRoom.push(obj)
    }
  }
}
</script>

<style scoped>
.subtitle {
  color: #555555;
}
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
