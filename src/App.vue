<template>
  <v-app :class="mode">
    <div class="app" :class="mode"  >
      <Toggle :mode="mode" @toggle="toggle" />
      <img id="name" src="@/assets/name.svg" alt="name" />
      <img id="nameD" src="@/assets/nameD.svg" alt="nameD" />
      <img id="golden" src="@/assets/Golden_flower.png" alt="golden" />
      <img id="moon" src="@/assets/Moon_flower.png" alt="moon" />
      <img id="scrollLeft" src="@/assets/Scroll.svg" alt="scroll" />
      <img id="scrollLeftB" src="@/assets/Scroll_black.svg" alt="scrollB" />
      <img id="scrollRight" src="@/assets/Scroll.svg" alt="scroll" />
      <img id="scrollRightB" src="@/assets/Scroll_black.svg" alt="scrollB" />
      <img id="designTop" alt="scroll" />
      <img id="designBottom" alt="scroll" />
      <router-view></router-view>
    </div>
  </v-app>
</template> 

<script>
import Toggle from "@/components/Toggle";

export default {
  name: "app",
  data() {
    return {
      mode: "light"
    };
  },
  components: {
    Toggle
  },
  methods: {
    keyPress(e) {
      if (e.key === "t") {
        this.toggle();
      }
    },
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  },
};
</script>

<style lang="scss">
@import "@/scss/template.scss";
@import "@/scss/variables.scss";
@import "@/scss/toggler.scss";

#designTop {
  background-size: cover;
  margin-top: -5px;
  height:5vh;
  width:100vw;
  background-image: url('./assets/chinese_design.svg') ;
}

#designBottom {
  background-size: cover;
  position: absolute;
  bottom: 0;  
  height:5vh;
  width:100vw;
  background-image: url('./assets/chinese_design.svg') ;
}

#name {
  margin-top: -95px;
  margin-left: 100px;
  width: 250px;
  height: 100px;
  visibility: visible;
}


.app {
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  height: 83vh;
  max-width: 100%;
  position: absolute;  
}

.light {
  background-color: map-get($lightTheme, primary);
  color: map-get($lightTheme, secondary);
}

.dark {
  background-color: map-get($darkTheme, primary);
}

.v-application--wrap {
  background: #ECDCA6;
  min-height: 100vh !important;
}

.dark .v-application--wrap {
   background: map-get($darkTheme, secondary);
} 

.dark #text--size {
  color: map-get($darkTheme, text1);
}
</style>