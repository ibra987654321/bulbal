<template>
  <div class="w-100">
    <h2 class="font-weight-medium text-break title__content">{{title}}</h2>
    <p v-if="subTitle" class="subtitle">{{subTitle}}</p>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateCard",
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped>
.subtitle {
  color: #555555;
}
.title__content {
  font-size: 30px;
  line-height: 56px;
}
@media only screen and (max-width: 600px) {
  .title__content {
    font-size: 20px;
    line-height: 24px;
  }

}
</style>
