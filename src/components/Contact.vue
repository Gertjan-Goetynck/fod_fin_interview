<template>
  <div>
    <h1 style="color: white">Contact me</h1>
    <v-card
      ><form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="First name" name="firstName"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Last name" name="lastName"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="E-mail"
                type="email"
                name="email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Subject" name="subject"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-textarea label="Message" name="message"></v-textarea>
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