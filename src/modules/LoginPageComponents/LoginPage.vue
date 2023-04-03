<template>
  <div>
    <dialogs max-width="685px" >
      <v-stepper v-model="e1">
        <v-stepper-items>
          <v-stepper-content
              v-for="n in steps"
              :key="`${n}-content`"
              :step="n"
          >
            <component :is="component[n - 1]" @forget="nextStep(n)"></component>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </dialogs>
  </div>
</template>

<script>
const dialogs = () => import('@/entities/Dialog/Dialogs')
const LoginPageCard = () => import('./LoginPageCard')
const ForgetPasswordCard = () => import('./ForgetPasswordCard')
const CodePageCard = () => import('./CodePageCard')
export default {
  name: "LoginPage",
  components: {
    dialogs,
  },
  data:() => ({
    component: [
      LoginPageCard,
      ForgetPasswordCard,
      CodePageCard
    ],
    e1: 1,
    steps: 3,
  }),
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },
  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
  },
}
</script>

<style>
.v-dialog {
  border-radius: 16px !important;
}
.login_block {
  width: 100%;
  max-width: 352px;
}
</style>
