<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div :style="$vuetify.breakpoint.mobile ? 'max-width: 870px;' : 'min-width: 870px;'">
      <create-card
          title="Введите адрес своего дома "
          sub-title="Если адрес не находится , то поставьте точку  не карте в то место где находится ваш дом."
      >
        <div :class="$vuetify.breakpoint.mobile ? '' : 'desktop'">
          <div class="d-flex align-center ">
            <div class="mr-2 mt-4">
              Адрес :
            </div>
            <div class="d-flex align-center mx-2 mt-4">
              <v-select
                  v-model="regionData"
                  outlined
                  label="Регион"
                  item-value="id"
                  item-text="name"
                  :error-messages="regionErrors"
                  :items="$store.state.create.regions"
                  hide-details
                  dense
                  @input="$v.regionData.$touch()"
                  @blur="$v.regionData.$touch()"
                  @change="change($event)"
              ></v-select>
            </div>
            <v-select
                v-model="$store.state.create.createObject.locality"
                outlined
                dense
                :error-messages="localityErrors"
                :items="$store.state.create.locality"
                @input="$v.localityData.$touch()"
                @blur="$v.localityData.$touch()"
                hide-details
                class="mt-4"
            ></v-select>
          </div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23391.888622013073!2d74.637996!3d42.873138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2z0KbQo9CcINCQ0LnRh9Kv0YDTqdC6!5e0!3m2!1sru!2skg!4v1680497429928!5m2!1sru!2skg"
              width="100%"
              allowfullscreen=""
              loading="lazy"
              class=" map"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";
import {getObject} from "@/widgets/Create/helpers/helpers";
import {required} from "vuelidate/lib/validators";
import { validationMixin } from 'vuelidate'

export default {
  name: "AddressComponent",
  mixins: [validationMixin],
  components: {
    CreateCard
  },
  data:() => ({
    regionData: '',
    localityData: ''
  }),
  computed: {
    region() {
      return this.$store.state.create.createObject.regionId
    },
    locality() {
      return this.$store.state.create.createObject.locality
    },
    regionErrors () {
      const errors = []
      if (!this.$v.regionData.$dirty) return errors
      !this.$v.regionData.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    localityErrors () {
      const errors = []
      if (!this.$v.localityData.$dirty) return errors
      !this.$v.localityData.required && errors.push('Поле не должно быть пустым')
      return errors
    },
  },
  watch: {
    region(v) {
      this.regionData = v
    },
    locality(v) {
      this.localityData = v
    }
  },
  created() {
    this.regionData = this.$store.state.create.createObject.regionId
    this.$store.dispatch('getRegion')
    if (getObject().regionId) {
      this.change(getObject().regionId)
    }
  },
  validations: {
    regionData: { required },
    localityData: { required },
  },
  methods: {
    change(id) {
      const region = this.$store.state.create.regions.find(i => i.id === id)
      this.$store.commit('setRegion', region)
      this.$store.dispatch('getLocality', id)
    },
  }
}
</script>

<style scoped>
.map {
  margin:60px 0;
  border:0;
  height: 100%;
  min-height: 260px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
