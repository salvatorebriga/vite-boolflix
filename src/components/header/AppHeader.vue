<script>
  import { store } from "../../store.js";
  export default {
    data() {
      return {
        store,
      };
    },
  };
</script>

<template>
  <header>
    <div class="colL">
      <h1>BOOLFLIX</h1>
    </div>
    <div class="colR">
      <input
        type="text"
        placeholder="Search Film or TV series"
        v-model="this.store.apiInfo.endpoints.query"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;

    .colL {
      width: 50%;
      display: flex;
      align-items: center;
      color: red;
      font-size: 30px;
    }

    .colR {
      display: flex;
      width: 50%;
      justify-content: right;
      align-items: center;

      input,
      button {
        padding: 5px;
        border: 1px solid rgb(67, 0, 0);
        font-size: 15px;
        font-weight: 600;
      }

      button {
        background-color: red;
      }
    }
  }
</style>
