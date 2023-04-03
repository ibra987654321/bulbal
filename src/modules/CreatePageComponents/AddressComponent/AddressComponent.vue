<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div class="block">
      <create-card
          title="Введите адрес своего дома "
          sub-title="Если адрес не находится , то поставьте точку  не карте в то место где находится ваш дом."
      >
        <div class="d-flex align-center">
          <div class="mr-2">
            Адрес :
          </div>
          <v-text-field
              outlined
              dense
              hide-details
          ></v-text-field>
        </div>
        <div class="map mt-4">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23391.888622013073!2d74.637996!3d42.873138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2z0KbQo9CcINCQ0LnRh9Kv0YDTqdC6!5e0!3m2!1sru!2skg!4v1680497429928!5m2!1sru!2skg"
              width="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";

export default {
  name: "AddressComponent",
  components: {
    CreateCard
  },
}
</script>

<style scoped>

</style>
