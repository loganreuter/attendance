<template>
  <div>
    <div class="form-container">
      <div class="wrapper">
        <span class="close" @click="$router.push({ path: '/home/' })"
          >&#215;</span
        >
        <div class="form-field">
          <label for="">Class Title:</label>
          <input type="text" />
        </div>

        <div class="form-field">
          <label for="">Upload Class Roster</label>
          <input type="file" name="" id="" />
        </div>

        <button>Create</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassForm",
};
</script>

<style lang="scss" scoped>
.form-container {
  position: absolute;
  inset: 0;
  margin: auto;
  height: fit-content;
  width: fit-content;
}

.wrapper {
  position: relative;
}

.close {
  font-size: 48px;
  position: absolute;
  top: -4rem;
  right: -4rem;

  &:hover {
    cursor: pointer;
    filter: brightness(0.5);
  }
}

.form-field {
  position: relative;
  font-size: 20px;
  margin-bottom: 4rem;

  label {
    position: absolute;
    top: -1.5rem;
    left: -1rem;
  }

  input[type="text"] {
    font-size: 20px;
    background-color: #fff0;
    border: none;
    outline: none;
    border-bottom: 3px solid var(--disabled-text);
  }
  input[type="file"] {
    margin-top: 0.5rem;
  }
}

button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--disabled-text);
  color: var(--text-color);

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }
}
</style>
