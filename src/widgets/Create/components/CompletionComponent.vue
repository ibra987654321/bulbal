<template>
  <v-row>
    <v-col cols="12">
      <completion-components @prev="$emit('save', 'prev')" @publish="submit()"></completion-components>
    </v-col>
    <v-col  class="d-flex flex-column align-center ">
      <div
          :class="$vuetify.breakpoint.mobile ? '' : 'width'"
          class="d-flex justify-space-between my-lg-16"
      >
<!--        <v-btn-->
<!--            class="text-none px-3 tab_btn"-->
<!--            text-->
<!--            @click="$emit('save', 'prev')"-->
<!--        >-->
<!--          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.90906 7.26521C9.50324 6.8906 8.8706 6.9159 8.496 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.2652 12.1782L8.496 15.6783C8.8706 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.284 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z" fill="#777E90"/>-->
<!--          </svg>-->
<!--          Назад-->
<!--        </v-btn>-->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CompletionComponents from "@/modules/CreatePageComponents/Completion/CompletionComponent";
export default {
  name: "CompletionComponent",
  components: {
    CompletionComponents
  },
  methods: {
    submit() {
      this.$emit('save', 'publish')
    }
  }
}
</script>

<style scoped>
.width {
  min-width:870px
}
</style>
