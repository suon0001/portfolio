<template>

  <div id="product">
    <v-card
      id="cards"
      v-for="(product ,index) in products"
      :key="index"
      class="mx-auto"
      max-width="450"
    >
      <v-img
        id="imgShade"
        class="white--text align-end"
        height="150px"
        v-bind:src="product.imgHolder"
      >
        <div id="text--size">{{ product.headline }}</div>
      </v-img>

      <v-card-actions>
        <router-link
          id="routerLink"
          v-bind:to="{ name: 'Product', params: { 
          id: product.id,
          headline: product.headline,
          description: product.description,
          button: product.button,
          pdfLink: product.pdfLink,
          imgHolder: product.imgHolder,
          semester: product.semester
          }}"
        >
          <v-btn id="explore" text>Explore</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          headline: "CV",
          semester: "2.semester",
          description: "CV December 2020",
          button: "View",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Application.pdf?alt=media&token=1f9c5b0b-243c-4998-8c16-f48ec35a7d5f",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-06%20at%2009.34.27.png?alt=media&token=d712ebb9-9d69-4077-99cc-ac5a04ba7672"
        },

        {
          id: 2,
          headline: "CV Video",
          semester: "2.semester",
          description: "CV Video 2020",
          button: "Download",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/CV.mov?alt=media&token=70f9428a-b753-408c-9f20-70c573ec0542",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-06%20at%2009.28.04.png?alt=media&token=a1851965-b069-4216-926d-56997c16915c"
        },

        {
          id: 3,
          headline: "Business Card",
          semester: "2.semester",
          description: "Simple Business card 2020",
          button: "View",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Business%20Card.pdf?alt=media&token=9c14fa64-0c9e-40db-8929-273c79ae43b5",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-06%20at%2009.31.10.png?alt=media&token=520450ab-11c8-42a9-b2ac-fd9f89043a78"
        },

                {
          id: 4,
          headline: "Charactor Animator",
          semester: "3.semester",
          description: "",
          button: "Download",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Kunstner%20Boksen%20Animation.mp4?alt=media&token=63943c0c-37ac-4897-92f9-c235cf5ee3ee",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-12-08%20at%2012.59.37.png?alt=media&token=1a565972-94f9-4f81-95d6-f972ee8e3608"
        },

        {
          id: 5,
          headline: "Website Assignment",
          semester: "1.semester",
          description: "First website with only use of HTML & CSS 2019",
          button: "View",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-07%20at%2007.5.pdf?alt=media&token=1098b2d6-3751-4f0a-ac7a-667c822ca14b",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-07%20at%2007.52.57.png?alt=media&token=21f120f6-bafc-4a94-b1d6-8fe47db8360b"
        },

        {
          id: 6,
          headline: "Get Going",
          semester: "2.semester",
          description: "Get Going Moodboard 2020",
          button: "View",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Moodboard.png?alt=media&token=2f5e75f2-c652-4dc8-b2d9-1d7d7b3b422c",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Moodboard.png?alt=media&token=2f5e75f2-c652-4dc8-b2d9-1d7d7b3b422c"
        },

        {
          id: 7,
          headline: "Day Night",
          semester: "2.semester",
          description: "Animation for the infomercial video 2020",
          button: "Download",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/streets%20day%20night.mov?alt=media&token=eee4ba5c-2184-440e-b871-8a8425fd310c",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-06%20at%2012.19.13.png?alt=media&token=fff2d875-a0f7-437b-9203-b1e9a2093615"
        },
        {
          id: 8,
          headline: "Mini Me",
          semester: "1.semester",
          description: "One of my first projects, Mini Me 2019",
          button: "View",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Me.png?alt=media&token=e6f5c6f5-4570-497d-a81c-fbfc9c8b8bb3",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-05-06%20at%2009.37.13.png?alt=media&token=42707d38-97a6-451d-91a7-0acdcd54de26"
        },

           {
          id: 9,
          headline: "Webshop",
          semester: "3.semester",
          description: "Webshop assignment with vuetify",
          button: "View",
          pdfLink:
            "https://https://digitalgamesforgamers.netlify.app/",
          imgHolder:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-mmd-2020.appspot.com/o/Screenshot%202020-12-08%20at%2013.15.36.png?alt=media&token=4fcd75af-3da0-4f28-9f27-e1d845f45f2f"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#product {
  display: grid;
  grid-template-columns: 450px 450px 450px 450px;
  grid-template-rows: repeat(2);
  grid-gap: 50px 40px;
  padding-top: 50px;
  padding-left: 100px;
  overflow-x: scroll;
  overflow-y: hidden;
}

#cards {
  background: map-get($lightTheme, third);
}

#text--size {
  display: inline;
  line-height: 250px;
  margin: 0 0 105px 10px;
  font-size: 20px;
  color: map-get($lightTheme, text2);
  text-shadow: 2px 2px map-get($lightTheme, third);
}

#routerLink {
  text-decoration: none;
}

#explore {
  color: map-get($lightTheme, text2);
}
</style>