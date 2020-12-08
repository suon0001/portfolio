import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#6f1510",
            secondary: "#ECDCA6",
            third: "#962424",
            text1: "#000000",
            text2: "#ECDCA6"
          },
          dark: {
            primary: "#232541",
            secondary: "#15202b",
            third: "#221156",
            text1: "#ffffff",
            text2: "#C0C0C0"
          },
        },
      },
})