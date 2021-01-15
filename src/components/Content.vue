<template>
  <a-layout-content class="site-layout-background" id="content">
    <a-row id="content-row">
      <a-col :span="2"></a-col>
      <a-col id="dashboard" :span="22">
        <div id="content-div">
          <a-button
            v-if="editMode"
            @click="handleClick"
            :disabled="previewDisabled"
            type="primary"
            htmlType="button"
          >
            Preview
          </a-button>
          <div id="title">
            <form-item
              id="title"
              :field="{
                name: 'title',
                label: '',
                required: true,
                type: 'text',
                value: title
              }"
              :updateValue="handleChangeTitle"
            >
            </form-item>
          </div>
          <div id="form-div">
            <draggable
              id="draggable"
              class="dragArea form-group"
              :list="list"
              :group="{ name: 'people2', pull: false, put: true }"
              item-key="name"
              :key="list.length"
              @add="handleAdd"
            >
              <template #item="{ element }">
                <div>
                  <span id="element-span">{{ element }}</span>
                  <base-form
                    :doSubmit="doSubmit"
                    :fields="fieldDetails"
                    :submittable="!editMode"
                    btnText="Submit"
                    @update-field="handleUpdate"
                  ></base-form>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import FormItem from "@/components/FormItem";
import BaseForm from "@/components/BaseForm";
import draggable from "vuedraggable";

export default {
  name: "MainContent",
  components: {
    FormItem,
    BaseForm,
    draggable
  },
  props: {
    title: {
      type: String,
      required: true
    },
    handleDrop: {
      type: Function,
      required: true
    },
    editMode: {
      type: Boolean,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    },
    previewDisabled: {
      type: Boolean,
      required: true
    },
    handleChangeTitle: {
      type: Function,
      required: true
    },
    fieldDetails: {
      type: Array,
      required: true
    },
    doSubmit: {
      type: Function,
      required: true
    },
    handleUpdate: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      list: ["placeholder"]
    };
  },
  methods: {
    handleAdd(event) {
      this.list = ["placeholder"];
      this.handleDrop(event.clone.innerText);
    }
  }
};
</script>

<style>
#draggable{
  height:290px;
}
#content {
  padding: 20px;
  margin: 0;
  min-height: 280px;
  margin-top: 2%;
}
#element-span {
  visibility: hidden;
}

#title {
  margin-top: 10%;
}

#title .ant-input {
  font-weight: bolder;
  height: 50px;
  font-size: 20px;
}

#form-div {
  border: 1px solid rgb(217, 217, 217);
  margin-top: -25px;
  height: 300px;
  overflow-y: scroll;
  background-color: white;
}

#title .ant-form-item-control-wrapper {
  width: 350px;
}

#content-div {
  width: 350px;
  margin-left: 170px;
}

#content-row {
  background-color: #001529;
  padding-top: 20px;
  margin-top: -2%;
}
</style>
