<template>
  <div>
    <h1>Ambitions</h1>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(ambition, i) in ambitionsAtFin"
        :key="i"
        :color="ambition.color"
        :icon="ambition.icon"
        fill-dot
      >
        <v-card :color="ambition.color" dark>
          <v-card-title class="title">
            {{ ambition.title }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p v-html="ambition.body"></p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  data: () => ({
    ambitionsAtFin: [
      {
        color: "#00A2A2",
        icon: "mdi-weight-lifter",
        title: "Give it all I've got during the selection procedure",
        body:
          "The first stage, convincing the recruiters that I've got what it takes to get the job. <br> I know I do, and now it's up to me to show it to others.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-school",
        title: "Secure my spot as a Java trainee",
        body:
          "A first milestone has been reached. Now it's time to really get to work and expand my horizons within the exciting Java world.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-certificate",
        title: "Ace the Java course",
        body:
          "It takes hard work and dedication to learn the ins and outs of an entire programming language in 4 months time, and that is exactly what I plan to do. <br>Go all in and become the best Java developer I can hope to be in this timespan.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-language-java",
        title: "Get started as a Java developer @FIN",
        body:
          "Playtime is over, now it is time for the real deal. <br>It's all about diving in, getting to know the projects and team, and just going for it.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-lock-open",
        title: "Improve and unlock new skills",
        body:
          "There are two main requirements to improve as a developer: practice and research. <br>Practice will naturally come through working on projects, and research happens when new challenges show up. <br>Both these things combined will help me push my limits further and further.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-airplane-takeoff",
        title: "Help elevate the team to new heights",
        body:
          "Contrary to what many people may thing, software development is not a solitary job. It requires constant teamwork and every teammember matters. <br>I see it as my responsibility to do what I can to help improve the team as a whole, both with my code and my input.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-star",
        title: "Work on projects that matter",
        body:
          "What makes working @FIN special to me? Easy. The kind of projects I'll be working on. <br>I never liked the idea of working for a typical web agency, making brochure websites day in day out. <br> What I want is to work on projects with meaning, that help achieve a goal that is more than luring new customers in.",
      },
      {
        color: "#00A2A2",
        icon: "mdi-arrow-top-right",
        title: "Grow within the government agency",
        body:
          "As development skills grow, the developer grows. <br>My goal is to showcase this by starting as a junior developer, progressing to medior, and finally graduating as a senior. <br>Who knows what follows next?",
      },
      {
        color: "#00A2A2",
        icon: "mdi-party-popper",
        title: "Enjoy a long and fullfilling career @FIN",
        body:
          "What I look forward to the most is the prospect of a long carreer @FIN. <br>I want to look back, and be proud of the things I have accomplished. <br>I want to have fond memories of working together with teams of amazing people. <br>That is the ultimate goal.",
      },
    ],
  }),
};
</script>