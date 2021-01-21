<template>
    <div>
        <form-card v-for="form in forms" :key="form._id" :form="form"></form-card>
    </div>
  
</template>

<script>
import { getForms } from "@/services/formService";
import FormCard from "@/components/FormCard";

export default {
  name: "FormList",
  async created() {
    this.forms = await getForms();
  },
  data() {
    return {
      forms: []
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push({ name: "FormDetail", params:{ id } });
    }
  }
};
</script>
