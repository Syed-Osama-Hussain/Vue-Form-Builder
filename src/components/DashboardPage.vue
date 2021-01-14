<template>
  <div>
    <display-modal
      :isModalVisible="isModalVisible"
      :title="title"
      :handleOk="handleOk"
      :handleCancel="handleCancel"
      :fields="fieldDetails"
    ></display-modal>

    <a-layout id="components-layout-demo-top-side-2">
      <nav-bar :user="user"></nav-bar>
      <a-layout
        class="site-layout-background"
        style="height:577px;background:#001529;"
      >
        <side-bar></side-bar>
        <main-content
          :title="title"
          :handleDrop="handleDrop"
          :editMode="editMode"
          :handleClick="handleClick"
          :previewDisabled="previewDisabled"
          :handleChangeTitle="handleChangeTitle"
          :fieldDetails="fieldDetails"
          :handleUpdate="handleUpdate"
          :doSubmit="doSubmit"
        ></main-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import DisplayModal from "@/components/DisplayModal";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/Content";
import { getUser } from "@/services/auth";

export default {
  name: "DashboardPage",
  components: {
    NavBar,
    DisplayModal,
    SideBar,
    MainContent
  },
  created() {
    const user = getUser();
    if (!user) this.$router.push({ name: "Login" });
    this.user = user;
  },
  data() {
    return {
      title: "",
      fieldDetails: [],
      previewDisabled: true,
      editMode: true,
      isModalVisible: false,
      user: ""
    };
  },
  methods: {
    handleOk() {
      this.isModalVisible = false;
    },
    handleCancel() {
      this.isModalVisible = false;
    },
    doSubmit() {
      this.fieldDetails.map(field => {
        if (field.type === "checkbox" && !field.value) {
          field.value = false;
          return;
        }

        if (field.type === "dropdown") {
          field.value = [];
          return;
        }
      });

      this.isModalVisible = true;
    },
    handleChangeTitle({ currentTarget: input }) {
      this.title = input.value;
      if (!input.value) {
        this.previewDisabled = true;
        return;
      }
      this.previewDisabled = false;
    },
    handleDrop(value) {
      let newField = {
        name: `question${this.fieldDetails.length + 1}`,
        label: `Question ${this.fieldDetails.length + 1}`,
        required: false,
        placeholder: "",
        type: value.toLowerCase(),
        value: ""
      };

      const newFieldData = [...this.fieldDetails, newField];
      this.fieldDetails = newFieldData;
    },
    handleClick() {
      this.editMode = false;
    },
    handleUpdate(field, value) {
      const index = this.fieldDetails.findIndex(val => val.name === field);
      this.fieldDetails[index].value = value;
    }
  }
};
</script>
