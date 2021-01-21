<template>
  <div @click="$emit('showDetail', form._id)">

  </div>
</template>

<script>

export default {
  name: "FormCard",
  props: {
    form:{
        type: Object,
        required: true
    }
  }
};
</script>
