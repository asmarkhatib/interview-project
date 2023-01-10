<template>
  <v-card class="mx-auto mb-5 mt-5" max-width="344" title="User Data">
    <v-form @submit.prevent="addMember">
      <v-container>
        <v-text-field
          v-model.trim="name"
          color="primary"
          label="Full Name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model.trim="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model.number="phone"
          color="primary"
          label="Phone no."
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model.number="num1"
          color="primary"
          label="Enter Any Number"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model.number="num2"
          color="primary"
          label="Enter Any Number"
          variant="underlined"
        ></v-text-field>
      </v-container>
      <p v-if="!isValid" class="invalid">
        Please Fill Above Information Carefully. May be Try Again Sometime.
      </p>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" type="submit">
          Add User

          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
// import ViewUserData from "./ViewUserData.vue";
export default {
  //   components: {
  //     ViewUserData,
  //   },
  data() {
    return {
      name: "",
      email: "",
      phone: null,
      num1: null,
      num2: null,

      isValid: true,
    };
  },

  methods: {
    addMember() {
      if (
        this.name === "" ||
        this.email === "" ||
        !this.email.includes("@") ||
        this.phone === null ||
        this.num1 === null ||
        this.num2 === null
      ) {
        this.isValid = false;
        return;
      }
      let sum = this.num1 + this.num2;
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        sum: sum,
      };

      this.$store.dispatch("userInfo", data);
      
      this.$router.replace('/viewData')

      this.name = "";
      this.email = "";
      this.phone = null;
      this.num1 = null;
      this.num2 = null;
    },
  },
};
</script>

<style scoped>
.invalid {
  font-size: 10px;
  font-family: sans-serif;
  color: red;
  padding: 10px;
}
</style>
