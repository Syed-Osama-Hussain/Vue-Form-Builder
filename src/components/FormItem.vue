<template>
  <div>
    <a-form-item
      v-if="field.type === 'text' || field.type === 'password'"
      :label="field.label"
      :labelCol="{ span: 12, offset: 0 }"
      labelAlign="left"
      :required="field.required"
    >
      <a-input
        :placeholder="field.placeholder"
        @input="updateValue"
        :checked="field.value"
        :type="field.type"
        :name="field.name"
        :required="field.required"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-if="field.type === 'checkbox'" :required="field.required">
      <a-checkbox @change="updateValue" :type="field.type" :name="field.name">
        {{ field.label }}
      </a-checkbox>
    </a-form-item>
    <a-form-item
      v-if="field.type === 'dropdown'"
      :required="field.required"
      :label="field.label"
      :labelCol="{ span: 12, offset: 0 }"
      labelAlign="left"
    >
      <a-select :name="field.name" placeholder="Select your answer"> </a-select>
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  inheritAttrs: false,
  props: {
    field: {
      type: Object,
      required: true
    },
    updateValue: {
      type: Function,
      required: true
    }
  }
};
</script>
