<template>
  <v-app>
    <v-main>
      <navigation-menu :menuItems="menuItems"></navigation-menu>
      <full-page :options="options" id="fullpage">
        <div class="section">
          <v-container>
            <intro></intro>
          </v-container>
        </div>
        <div class="section">
          <v-container> <hobbies></hobbies></v-container>
        </div>
        <div class="section">
          <v-container> <why-me></why-me> </v-container>
        </div>
        <div class="section">
          <v-container>
            <ambitions></ambitions>
          </v-container>
        </div>
        <div class="section">
          <h3>Contact</h3>
        </div>
      </full-page>
    </v-main>
  </v-app>
</template>

<script>
import nav from "./components/Nav.vue";
import intro from "./components/Intro.vue";
import hobbies from "./components/Hobbies.vue";
import ambitions from "./components/Ambitions.vue";
import whyMe from "./components/WhyMe.vue";
export default {
  name: "App",

  components: {
    "navigation-menu": nav,
    ambitions,
    whyMe,
    hobbies,
    intro,
  },
  data() {
    return {
      options: {
        licenseKey: "F1A479E3-0DFA4E81-A1E657D3-51FA6B1A",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: ["intro", "hobbies", "whyMe", "ambitions", "contact"],
        sectionsColor: [
          "#00A2A2",
          "#fff",
          "#00A2A2",
          "#fff",
          "#00A2A2",
          "#fff",
          "#303030",
        ],
      },
    };
  },
  computed: {
    menuItems() {
      return this.options.anchors.map((anchor) => {
        let title = anchor.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
        title = title[0].toUpperCase() + title.slice(1);
        return { url: anchor, title };
      });
    },
  },
};
</script>
<style scoped>
@import "https://unpkg.com/fullpage.js/dist/fullpage.min.css";
.content {
  width: 900px;
  margin: 0 auto;
}
</style>