<template>
  <div class="product">
    <div id="card">
      <router-link to="/">
        <img id="return" src="@/assets/return.png" alt="return" />
      </router-link>
      <v-card id="darkP" max-width="620" class="mr-10">
        <v-list-item>
          <v-list-item-avatar id="profilP"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ product.headline }}</v-list-item-title>
            <v-list-item-subtitle id="by">by Suong Vo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img v-bind:src="product.imgHolder" height="280"></v-img>

        <v-card-text id="descrip">
          {{ product.semester }}
          <br />
          {{ product.description }}
        </v-card-text>

        <v-card-actions>
          <a style="text-decoration: none;" v-bind:href="product.pdfLink" target="_blank">
            <v-btn id="buttonText" text>{{ product.button }}</v-btn>
          </a>
          <!-- <a style="text-decoration: none;" >
            <v-btn id="buttonText" text target="_blank">Download</v-btn>
          </a>-->
          <v-spacer></v-spacer>
          <v-btn id="iconHeart" icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <a style="text-decoration: none;" href="https://www.facebook.com">
            <v-btn id="iconFace" icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </a>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var product = this.$route.params;
    return {
      product: {
        id: product.id,
        headline: product.headline,
        description: product.description,
        button: product.button,
        pdfLink: product.pdfLink,
        imgHolder: product.imgHolder,
        semester: product.semester
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/template.scss";
@import "@/scss/variables.scss";
@import "@/scss/toggler.scss";

#card {
  display: grid;
  grid-template-columns: 50px 600px;
  position: absolute;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  margin-left: 100px;
}

#iconHeart,
#iconFace {
  color: map-get($lightTheme, text2);
}

#iconHeart:hover {
  color: red;
}

#iconFace:hover {
  color: blue;
}

#iconHeart:visited {
  color: red;
}

#buttonText {
  color: map-get($lightTheme, text2);
}
</style>