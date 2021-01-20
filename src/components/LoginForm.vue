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
import BaseForm from "@/components/BaseForm";
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    BaseForm
  },
  methods: {
    ...mapActions("user", ["loginUser", "updateField"]),
    async handleSubmit() {
      try {
        await this.loginUser();
        this.$router.push({ name: "Dashboard" });
      } catch (ex) {
        console.log(ex);
      }
    },
    handleUpdate(field, value) {
      this.updateField({ field, value });
    }
  },
  computed: {
    ...mapState("user", ["fields"])
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
