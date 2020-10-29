<template>
  <div>
    <h1 style="color: white">Contact me</h1>
    <v-card
      ><form
        name="contactForm"
        method="post"
        netlify
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactForm" />

        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                color="#00A2A2"
                label="First name"
                name="firstName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                color="#00A2A2"
                label="Last name"
                name="lastName"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="E-mail"
                type="email"
                name="email"
                color="#00A2A2"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                color="#00A2A2"
                label="Subject"
                name="subject"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-textarea
                color="#00A2A2"
                label="Message"
                name="message"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn dark color="#00A2A2" type="submit">
                Submit your question
              </v-btn></v-col
            >
          </v-row>
        </v-container>
      </form></v-card
    >
  </div>
</template>
<script>
</script>