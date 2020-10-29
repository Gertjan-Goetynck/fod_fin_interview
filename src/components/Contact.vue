<template>
  <div>
    <h1 style="color: white">Contact me</h1>
    <v-card>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form
          name="contactForm"
          method="post"
          netlify
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contactForm" />

          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="firstName"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.firstName"
                    color="#00A2A2"
                    label="First name"
                    name="firstName"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="12" md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="lastName"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.lastName"
                    color="#00A2A2"
                    label="Last name"
                    name="lastName"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    type="email"
                    name="email"
                    color="#00A2A2"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="subject"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.subject"
                    color="#00A2A2"
                    label="Subject"
                    name="subject"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="message"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.message"
                    color="#00A2A2"
                    label="Message"
                    name="message"
                    :error-messages="errors"
                  ></v-textarea>
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  color="#00A2A2"
                  type="submit"
                  :disabled="invalid"
                  style="color: white"
                >
                  Submit your question
                </v-btn></v-col
              >
              <v-col
                ><span class="caption float-right"
                  >*All fields in this form are required</span
                ></v-col
              >
            </v-row>
          </v-container>
        </form>
      </validation-observer>
    </v-card>
  </div>
</template>
<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "This field cannot be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>