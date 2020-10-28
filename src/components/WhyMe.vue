<template>
  <div>
    <h1 style="color: white">Why me</h1>
    <v-row>
      <v-col
        md="6"
        sm="12"
        lg="3"
        v-for="quality in qualities"
        :key="quality.title"
      >
        <v-card elevation="2"
          ><v-card-title>{{ quality.title }}</v-card-title>
          <v-card-text v-html="quality.description"></v-card-text
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qualities: [
        {
          title: "Loyalty",
          description:
            "<p>It is common within the software development industry to hop from job to job, always hunting the higher paycheck.</p><p>This is not me.</p><p>I realise that a company invests in their developers when hiring and training them. Being chosen means being given an opportunity</p><p>The least I can do in return as a developer is to be loyal to my employer and to stick with them no matter what.</p><p>Security is worth more to me than the endless hunt for more</p>",
        },
        {
          title: "Loyalty",
          description: "blabla",
        },
        {
          title: "Loyalty",
          description: "blabla",
        },
        {
          title: "Loyalty",
          description: "blabla",
        },
      ],
    };
  },
};
</script>