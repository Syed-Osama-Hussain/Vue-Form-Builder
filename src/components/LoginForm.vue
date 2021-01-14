<template>
  <a-row style="background:#001529;">
    <a-col id="login">
      <h1>Login</h1>
      <base-form
        :fields="fields"
        :doSubmit="handleSubmit"
        btnText="Login >"
        :submittable="true"
        @update-field="handleUpdate"
      ></base-form>
    </a-col>
  </a-row>
</template>

<script>
import { login } from "@/services/auth";
import BaseForm from "@/components/BaseForm";

export default {
  name: "Login",
  components: {
    BaseForm
  },
  data() {
    return {
      fields: [
        {
          name: "email",
          label: "Email",
          required: true,
          placeholder: "Enter your email!",
          type: "text",
          value: ""
        },
        {
          name: "password",
          label: "Password",
          required: true,
          placeholder: "Enter your password!",
          type: "password",
          value: ""
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      try {
        const email = this.fields[0];
        const password = this.fields[1];
        login(email.value, password.value);
        this.$router.push({ name: "Dashboard" });
      } catch (ex) {
        console.log(ex);
      }
    },
    handleUpdate(field, value) {
      const index = this.fields.findIndex(val => val.name === field);
      this.fields[index].value = value;
    }
  }
};
</script>

<style>
#login {
  border: 1px solid black;
  height: 400px;
  background-color: white;
  margin: 40px auto;
  padding: 50px;
}
</style>
