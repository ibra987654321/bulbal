<template>
  <div :class="$vuetify.breakpoint.mobile ? 'container' : ''">
    <title-card
      title="Добавить отзыв"
    >
      <div class="d-flex justify-space-between">
        <div>
          Чем больше отзывов вы оставляете, тем больше скидок мы вам делаем
        </div>
      </div>
    </title-card>
    <div>
      <v-text-field
          hide-details
          color="secondary"
          label="Поделитесь своими мыслями"
          outlined
      >
        <template #append>
          <v-btn
              color="primary"
              type="submit"
              rounded
              class="text-capitalize"
          >
            Отправить
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.38774 2.08526C7.61934 1.54856 8.38036 1.54856 8.61196 2.08526L10.0653 5.45319C10.1634 5.68045 10.3793 5.83466 10.6261 5.85373L14.3532 6.14173C14.9511 6.18794 15.1887 6.93864 14.7262 7.3205L11.9233 9.63469C11.7256 9.79792 11.639 10.0601 11.7006 10.3089L12.5633 13.7945C12.7051 14.3677 12.0868 14.8287 11.5779 14.5291L8.33807 12.6218C8.12932 12.4989 7.87036 12.4989 7.66163 12.6218L4.42179 14.5291C3.91293 14.8287 3.29457 14.3677 3.43644 13.7945L4.29906 10.3089C4.36065 10.0601 4.27407 9.79792 4.07637 9.63469L1.27344 7.3205C0.810929 6.93864 1.04853 6.18794 1.64653 6.14173L5.37364 5.85373C5.62042 5.83466 5.83632 5.68045 5.93439 5.45319L7.38774 2.08526Z" fill="#FCFCFD"/>
            </svg>
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <title-card
        title="3 комментария"
        small
    >
    </title-card>
    <comment-card v-for="i in 5" :key="i"></comment-card>
  </div>
</template>

<script>
import titleCard from "@/ui/titleCard/titleCard";
import CommentCard from "@/entities/CommentCard/CommentCard";
export default {
  name: "CommentDetailPage",
  components: {
    titleCard,
    CommentCard
  }
}
</script>

<style scoped>
.text-field--enclosed, .v-input__append-inner {
  margin: auto !important;
}
</style>
