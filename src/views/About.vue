<template>
  <div class="home">
    <dashboard-page></dashboard-page>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardPage from "@/components/DashboardPage.vue";

export default {
  name: "Dashboard",
  components: {
    DashboardPage
  }
};
</script>
