<template>
  <div>
    <h1 style="color: white">Why me</h1>
    <v-row>
      <v-col
        lg="4"
        md="6"
        sm="12"
        xs="12"
        v-for="quality in qualities"
        :key="quality.title"
      >
        <v-card elevation="2" height="100%"
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
            "<p>It is common within the software development industry to hop from job to job, always hunting the higher paycheck.</p><p>This is not me.</p><p>I realise that a company invests in their developers when hiring and training them. Being chosen means being given an opportunity</p><p>The least I can do in return as a developer is to be loyal to my employer and to stick with them no matter what.</p><p>Security is worth more to me than the endless hunt for more.</p>",
        },
        {
          title: "Accuracy",
          description:
            "<p>One of my key qualities as a developer is my accuracy. I want code to work, preferably in the most efficient way possible</p><p>I rather write good code while taking a bit more time, than writing code quickly that is littered with bugs.</p><p>I try to anticipate future situations and problems, to make sure that the software responds as expected as often as possible.</p>",
        },
        {
          title: "Determination",
          description:
            "<p>Let's be honest. While software development usually is fun, it can also be frustrating.</p><p>We've all had situations where there was a bug we simply could not find the cause of.</p><p>The key thing to do here is to stay calm and not give up.</p><p>All bugs can be solved. Sometimes it was a silly mistake like a typo. Sometimes you can find the solution on the internet. Other times you need the fresh set of eyes of a colleague.</p><p>I won't just leave bugs for what they are, unless time is of the essence. In those cases there are often workarounds to avoid the bug all together.</p>",
        },

        {
          title: "Eagerness to learn",
          description:
            "<p>Software development is a huge industry, that evolves at a rapid pace.</p><p>This means that it is important to never stop learning.</p><p>Even within a single programming language, things keep on evolving.</p><p>Add entire new technologies to this, and it is obvious why my eagerness to learn is a huge boon.</p><p>The endless posibilities to keep on researching and learning new things are why I love software development. I am always prepared to investigate new trends and cutting edge technologies.</p>",
        },
        {
          title: "Teamplayer",
          description:
            "<p>Modern software development is a team sport. The stereotype of developers being locked away in dark basements couldn't be further from the truth.</p><p>Modern projects are usually of a scope that cannot be handled by a single person. Sometimes it are small teams of two people, sometimes it are massive frontend and backend divisions.</p><p>Teamwork in development means taking your responsibilties. It means being willing to give input, and realising when your idea may not be the way to go. Teamwork is being able to take criticism, and seeing it as a direction in which you can grow. It can also mean being modest enough to ask for help, and kind enough to give it.</p> <p>Teamwork can mean many things, and I am convinced I can show many of these qualities in a group setting.</p>",
        },
        {
          title: "Can work independently",
          description:
            "<p>While  team work is important, a software developer also needs to be capeable of working on his own.</p><p>At the end of the day, you need to be capeable of writing your own code and interpreting your assignments.</p><p>A chain is only as strong as it's weakest link, and the same goes for a development team.</p><p>While knowing when to ask for help is an integral part of being a good teamplayer, knowing the resources at your disposal to solve problems is just as important.</p>",
        },
      ],
    };
  },
};
</script>