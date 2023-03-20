<template>
  <div class="d-flex mt-16 profile__edit" :class="$vuetify.breakpoint.mobile ? 'flex-column' : ''">
    <div>
      <v-tabs
          v-model="model"
          class="py-7 white card_edit_block border-radius"
          color="secondary"
          hide-slider
          :vertical="!$vuetify.breakpoint.mobile"
          :class="$vuetify.breakpoint.mobile ? 'pl-0 ml-0' : 'pl-7'"
      >
        <v-tab
            v-for="(i, idx) in menu"
            :key="idx"
            :href="`#tab-${idx}`"
            class="text-none border-radius d-flex justify-start"
            :class="$vuetify.breakpoint.mobile ? 'flex-column' : ''"
        >
          <div class="d-flex" >
            <v-img width="16" class="mr-2" :src="i.icon"/>
            {{i.title }}
          </div>
        </v-tab>
      </v-tabs>
    </div>
    <v-card
        class="transparent d-flex elevation-0"
        :class="$vuetify.breakpoint.mobile ? 'mx-auto' : 'ml-16'"
    >
      <v-tabs-items v-model="model" class="transparent">
        <v-tab-item
            v-for="(item,i) in menu"
            :key="i"
            :value="`tab-${i}`"
        >
          <component :is="components[i]"></component>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import ProfileEditComponents from "@/modules/ProfileEditComponents/ProfileEditComponents";
import ProfileSecurityComponent from "@/modules/ProfileEditComponents/ProfileSecurityComponent";
import ProfilePaymentsComponent from "@/modules/ProfileEditComponents/ProfilePaymentsComponent";
import ProfileNotificationComponent from "@/modules/ProfileEditComponents/ProfileNotificationComponent";
export default {
  name: "ProfileEdit",
  data () {
    return {
      drawer: false,
      model: 'tab-0',
      menu: [
        {title: 'Личная информация', icon: require('./icons/user.png') },
        {title: 'Вход и безопасность', icon: require('./icons/lock.png') },
        {title: 'Платежи', icon: require('./icons/credit.png') },
        {title: 'Уведомление', icon: require('./icons/bell.png') },
      ],
      components: [ProfileEditComponents, ProfileSecurityComponent, ProfilePaymentsComponent, ProfileNotificationComponent]
    }
  },
}
</script>

<style>
.profile__edit .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
  display: none !important;
}
.card_edit_block {
  filter: drop-shadow(0px 64px 64px rgba(15, 15, 15, 0.11));
  border: 1px solid #e3e2e2;
  margin: 0 20px;
}
.border-radius {
  border-radius: 16px;
}
.color {
  color: black;
}
</style>
