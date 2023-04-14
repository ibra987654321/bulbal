<template>
  <div class="d-flex align-center justify-center fill-height w-100">
    <div :style="$vuetify.breakpoint.mobile ? 'max-width: 870px;' : 'min-width: 870px;'">
      <create-card
          title="Проверьте объяление "
          sub-title="Задайте последние настройки и опубликуйте."
      >
        <v-row>
          <v-col cols="12" sm="4">
            <CompletionCard/>
          </v-col>
          <v-col cols="12" sm="8">
            <CompletionDescription/>
          </v-col>
        </v-row>
      </create-card>
    </div>
  </div>
</template>

<script>
import CreateCard from "@/entities/CreateCard/CreateCard";
import CompletionCard from "@/modules/CreatePageComponents/Completion/components/CompletionCard";
import CompletionDescription from "@/modules/CreatePageComponents/Completion/components/CompletionDescription";
export default {
  name: "CompletionComponent",
  components: {
    CreateCard,
    CompletionCard,
    CompletionDescription
  }
}
</script>

<style scoped>

</style>
