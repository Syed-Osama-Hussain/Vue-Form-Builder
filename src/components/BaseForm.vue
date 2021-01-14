<template>
  <form id="login-form" @submit.prevent="handleSubmit">
    <form-item
      v-for="field in fields"
      :key="field.name"
      :field="field"
      :updateValue="updateValue"
    ></form-item>
    <div v-if="submittable">
      <a-form-item v-if="btnText === 'Login >'">
        <div id="formBtn">
          <a-button
            type="primary"
            :shape="btnText === 'Login >' ? 'round' : 'default'"
            html-type="submit"
            id="login-form-button"
          >
            {{ btnText }}
          </a-button>
        </div>
      </a-form-item>
      <a-form-item v-else style="float:right; margin-right:30px;">
        <div id="formBtn">
          <a-button type="primary" html-type="submit" id="login-form-button">
            {{ btnText }}
          </a-button>
        </div>
      </a-form-item>
    </div>
  </form>
</template>

<script>
import FormItem from "@/components/FormItem";

export default {
  name: "BaseForm",
  components: {
    FormItem
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    submittable: {
      type: Boolean,
      required: true
    },
    doSubmit: {
      type: Function,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      let value = "";
      if (event.target.type === "checkbox") {
        value = event.target.checked;
      } else {
        value = event.target.value;
      }
      this.$emit("updateField", event.target.name, value);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.doSubmit();
    }
  }
};
</script>

<style>
#login-form {
  max-width: 300px;
  margin-left: 15%;
}
#login-form-button {
  width: 100%;
}
#formBtn {
  margin-left: 55px;
}
</style>
