<template>
  <div class="body">
    <span
      >Select a Class or <span class="create-btn">Create</span> a New One</span
    >
  </div>
</template>

<script>
export default {
  name: "Default",
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: none;

  .create-btn {
    width: fit-content;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      color: #111;
    }
  }

  &:hover {
    cursor: default;
  }
}
</style>
