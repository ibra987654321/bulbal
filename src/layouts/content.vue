<template>
  <v-app >
    <Header/>
    <v-main class="mt-8">
      <v-container>
        <transition
            name="fade"
            mode="out-in"
        >
          <router-view/>
        </transition>
      </v-container>
    </v-main>
    <Footer/>
    <loginPage/>
    <SnackBars/>
    <booking-drawer></booking-drawer>
  </v-app>
</template>

<script>
import Header from "@/widgets/header";
const loginPage = () => import('@/modules/LoginPageComponents/LoginPage')
const SnackBars = () => import('@/entities/snackbars/snackbars')
import bookingDrawer from "@/modules/DetailPageComponents/BookCardDetailPage/BookingDrawer";
import Footer from "@/widgets/footer/footer";
export default {
  components: {
    Header,
    loginPage,
    SnackBars,
    bookingDrawer,
    Footer
  },
  data: () => ({
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
body {
  font-family: 'Roboto', sans-serif;
}
.card_block {
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.08));
  border: 1px solid #e3e2e2;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
