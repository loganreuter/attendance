<template>
  <div class="side-bar">
    <div class="profile-container">Profile</div>
    <div class="add-class-container">
      <button
        class="add-class"
        @click="$router.push({ path: '/home/create/class' })"
      >
        <span>+</span> Create a Class
      </button>
    </div>
    <div class="label-container">Classes:</div>
    <div class="class-container">
      <ul>
        <li @click="$router.push({ path: '/home/1234' })">ENG45</li>
        <li>ENG35</li>
        <li>MAT22A</li>
      </ul>
    </div>
    <div class="settings-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
        />
      </svg>
      Settings
    </div>
    <div class="logout-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"
        />
      </svg>
      Logout
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 15%;
  min-width: 150px;
  background-color: #fff;
  box-shadow: 0 0 5px -4px #000;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(20, 5%);

  & > div:not(.settings-container):not(.logout-container) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
}

.add-class-container {
  grid-row: 3;

  .add-class {
    border: none;
    outline: none;
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    font-weight: 600;
    background-color: #ddd2;
    color: var(--text-color);
    border-radius: 5px;

    span {
      width: fit-content;
      font-weight: bolder;
      font-size: 20px;
      float: left;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.5);
    }
  }
}

.label-container {
  grid-row: 4;
  border-bottom: 1px solid #ddd8;
}

.class-container {
  grid-row: 5 / 17;
  text-align: center;

  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    li {
      list-style: none;
      padding: 10px 0;
      width: 100%;

      &:hover {
        cursor: pointer;
        background-color: #eee8;
        filter: brightness(0.75);
      }
    }
  }
}

.settings-container {
  grid-row: 19;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 7px;

  svg {
    aspect-ratio: 1/1;
    width: 20px;
    fill: var(--text-color);
  }

  &:hover {
    cursor: pointer;
    background-color: #eee;
    filter: brightness(0.95);
  }
}

.logout-container {
  grid-row: 20;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 7px;

  svg {
    aspect-ratio: 1/1;
    width: 20px;
    fill: var(--text-color);
    transform: rotateY(180deg);
  }

  &:hover {
    cursor: pointer;
    background-color: #eee;
    filter: brightness(0.95);
  }
}
</style>
