<template>
  <a-row>
    <a-col :lg="4" :xl="5" :md="10" :sm="20" :xs="20" :offset="2">
      <div>
        <a-card :title="form.title">
          <a-button @click="handleClick">View form</a-button>
        </a-card>
      </div>
    </a-col>
  </a-row>
</template>

<script>

export default {
  name: "FormCard",
  props: {
    form:{
        type: Object,
        required: true
    }
  },
  methods:{
    handleClick(){
      this.$emit('showDetail', this.form._id)
    }
  }
};
</script>
