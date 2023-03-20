import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#A3B194",
                white: "#ffffff",
                secondary: '#313031',
                accent: "#f5f5f5",
                gray: '#F5F5F5'
            }
        }
    }
});
