<template>
  <div>
    <h1>Hobbies</h1>
    <v-carousel height="auto" hide-delimiters>
      <v-carousel-item eager v-for="(hobby, i) in hobbies" :key="i">
        <v-sheet color="#00A2A2">
          <v-row
            ><v-img :src="hobby.imgSrc" style="background-color: #00a2a2"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row> </template></v-img
            ><v-card
              style="position: absolute; bottom: 0; right: 0"
              width="100%"
              color="#00A2A2"
            >
              <v-card-title>{{ hobby.title }}</v-card-title>
              <v-list-item v-for="quality in hobby.qualities" :key="quality">
                <v-list-item-content>
                  <v-list-item-title style="font-size: 1.2em">{{
                    quality
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    hobbies: [
      {
        title: "Rock climbing",
        qualities: [
          "Problem solving",
          "Perseverance",
          "Functioning under stress",
        ],
        imgSrc:
          "https://res.cloudinary.com/dm45s9j8e/image/upload/v1603919345/rock-climbing_ssb9fj.jpg",
      },
      {
        title: "Board games",
        qualities: ["Teamwork", "Analytical thinking"],
        imgSrc:
          "https://res.cloudinary.com/dm45s9j8e/image/upload/v1603919375/boardgames_tjjgpc.jpg",
      },
      {
        title: "Comics",
        qualities: ["Placing yourself in the mind of others", "Creativity"],
        imgSrc:
          "https://res.cloudinary.com/dm45s9j8e/image/upload/v1603919374/comics_ptkyim.jpg",
      },
    ],
  }),
};
</script>
<style scoped>
@media (max-width: 960px) {
  .v-image {
    height: 700px;
  }
}
</style>