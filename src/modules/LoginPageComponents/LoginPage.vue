<template>
  <div>
    <dialogs max-width="685px" :destroy-func="destroy">
      <v-stepper v-model="$store.state.login.tab">
        <v-stepper-items>
          <v-stepper-content
              v-for="n in steps"
              :key="`${n}-content`"
              :step="n"
          >
            <component :is="component[n - 1]" @next="nextStep(n, $event)"></component>
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
const RegisterPage = () => import('./RegistrationPage')
export default {
  name: "LoginPage",
  components: {
    dialogs,
  },
  data:() => ({
    component: [
      LoginPageCard,
      ForgetPasswordCard,
      CodePageCard,
      RegisterPage
    ],
    e1: 1,
    steps: 4,
  }),
  watch: {
    steps (val) {
      if (this.$store.state.login.tab > val) {
        this.$store.state.login.tab = val
      }
    },
  },
  methods: {
    nextStep (n, event) {
      if (event === 'login') {
        this.$store.state.login.tab = 1
        return;
      }
      if (event === 'register') {
        this.$store.state.login.tab = 4
        return
      }
      if (event === 'forget') {
        this.$store.state.login.tab = 2
        return
      }
      if (event === 'sign-up') {
        this.$store.state.login.tab = 3
        return
      }
      if (n === this.steps) {
        this.$store.state.login.tab = 1
      } else {
        this.$store.state.login.tab = n + 1
      }
    },
    destroy() {
      setTimeout(() => {
        this.$store.state.login.tab = 1
      }, 300)
    }
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
