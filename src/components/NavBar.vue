<template>
  <a-layout-header class="header" id="navbar">
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item id="item-left" key="dashboard"
        ><router-link to="/">Dashboard</router-link></a-menu-item
      >
      <a-menu-item id="item-left" key="dashboard"
        ><router-link to="/forms">Forms</router-link></a-menu-item
      >
      <a-menu-item key="username" class="items-right">{{ user }}</a-menu-item>
      <a-menu-item key="logout" @click="handleLogout" class="items-right"
        >Logout</a-menu-item
      >
    </a-menu>
  </a-layout-header>
</template>
<script>
import { logout } from "@/services/auth";

export default {
  name: "NavBar",
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      current: ["dashboard"]
    };
  },
  methods: {
    handleLogout() {
      logout();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style>
.items-right {
  float: right;
}

#item-left {
  float: left;
}

#navbar {
  width: 100%;
  height: 100%;
  background: white;
}
</style>
