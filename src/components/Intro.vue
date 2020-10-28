<template>
  <div>
    <vue-typer
      style="color: white"
      :type-delay="35"
      :repeat="0"
      :eraseOnComplete="false"
      text="Hey!

My name is Gertjan Goetynck, and I'm a 29 year old web developer.
I am applying for a training to join the Java@FIN team.
Scroll down or click the menu item you would like to visit to get to know a bit more about me, my motivations and why I am a good fit for the team.

If you have any questions, feel free to ask! I look forward to answering them."
    ></vue-typer>
  </div>
</template>
<script>
import { VueTyper } from "vue-typer";

export default {
  components: {
    VueTyper,
  },
};
</script>
<style >
.vue-typer .typed {
  color: white !important;
  font-size: 2em;
}
.vue-typer .custom.caret {
  background-color: white;
}
</style>