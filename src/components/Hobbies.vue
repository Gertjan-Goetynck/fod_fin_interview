<template>
  <div>
    <h1>Hobbies</h1>
    <v-img src="../assets/boardgames.jpg"></v-img>
    <!-- <v-carousel v-model="model">
      <v-carousel-item v-for="color in colors" :key="color">
        <v-sheet :color="color" tile>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>