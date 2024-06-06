<script>
  import { store } from "../../store.js";
  export default {
    emits: ["searchButton", "resetButton"],
    data() {
      return {
        store,
      };
    },
  };
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="Search character"
      v-model="this.store.apiInfo.endpoints.query"
    />
    <button class="search" value="Search" @click="$emit('searchButton')">
      Search
    </button>
    <button class="reset" value="Reset" @click="$emit('resetButton')">
      Reset
    </button>
  </div>
</template>

<style lang="scss" scoped>
  div {
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;

    input,
    .search,
    .reset {
      padding: 10px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: black;

      &:hover {
        cursor: pointer;
      }
    }
    .search {
      background-color: rgb(253, 182, 120);
      &:hover {
        background-color: rgb(251, 151, 63);
      }
    }
    .reset {
      background-color: rgb(121, 130, 253);
      &:hover {
        background-color: rgb(95, 106, 252);
      }
    }
  }
</style>
