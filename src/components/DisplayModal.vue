<template>
  <div>
    <a-modal
      :visible="isModalVisible"
      :title="title"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <div style="background-color:lightgrey">
        <pre>{{ previewData }}</pre>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "DisplayModal",
  props: {
    title: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    isModalVisible: {
      type: Boolean,
      required: true
    },
    handleOk: {
      type: Function,
      required: true
    },
    handleCancel: {
      type: Function,
      required: true
    }
  },
  computed: {
    previewData() {
      let FieldData = {};
      this.fields.map(field => (FieldData[field.label] = field.value));
      return JSON.stringify(FieldData, null, 2);
    }
  }
};
</script>
