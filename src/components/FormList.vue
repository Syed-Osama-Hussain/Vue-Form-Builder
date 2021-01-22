<template>
    <div>
      <form-card v-for="form in pagedData" :key="form._id" :form="form" @showDetail="handleClick"></form-card>
      <pagination v-model="page" :records="this.forms.length" :per-page="4" @paginate="handlePaginate"/>
    </div>
  
</template>

<script>
import { getForms } from "@/services/formService";
import FormCard from "@/components/FormCard";
import Pagination from "v-pagination-3";
import { paginate } from "@/utils/paginate";

export default {
  name: "FormList",
  components:{
    FormCard,
    Pagination
  },
  async created() {
    const { data } = await getForms();
    this.forms = data
  },
  data() {
    return {
      forms: [],
      page: 1
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push({ name: "FormDetail", params:{ id } });
    },
    handlePaginate(){
      console.log(this.page)
    }
  },
  computed:{
    pagedData(){
      return paginate(this.forms, this.page, 4)
    }
  }
};
</script>
