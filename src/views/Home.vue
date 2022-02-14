<template>
  <div class="home">
    <SideBar @CreateClass="showForm = true" />
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "Home",
  components: {
    SideBar,
  },
  data() {
    return {
      showForm: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row column;
}

.view {
  min-width: 0;
  flex: 1 1 auto;
  background-color: var(--off-white);
  position: relative;
}
</style>
