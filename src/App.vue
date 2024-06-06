<script>
  import AppNav from "./components/nav/AppNav.vue";
  import AppMain from "./components/main/AppMain.vue";
  import { store } from "./store.js";
  import axios from "axios";
  export default {
    data() {
      return {
        store,
      };
    },
    components: {
      AppNav,
      AppMain,
    },

    methods: {
      search() {
        const params = {
          api_key: this.store.apiInfo.endpoints.api_key,
          include_adult: this.store.apiInfo.endpoints.include_adult,
          language: this.store.apiInfo.endpoints.language,
          page: this.store.apiInfo.endpoints.page,
          query: this.store.apiInfo.endpoints.query,
        };
        if (this.store.apiInfo.endpoints.query) {
          axios
            .get(this.store.apiInfo.url + this.store.apiInfo.movie, {
              params,
            })
            .then((response) => {
              this.store.movies = response.data;
              console.log(this.store.movies);
            });

          axios
            .get(this.store.apiInfo.url + this.store.apiInfo.tv, {
              params,
            })
            .then((response) => {
              this.store.series = response.data;
              console.log(this.store.series);
            });
        } else {
          console.log("Query vuota");
        }
      },

      searchButton() {
        this.search();
      },

      resetButton() {
        this.store.apiInfo.endpoints.query = "";
        this.search();
      },
    },

    created() {
      this.search();
    },
  };
</script>

<template>
  <AppNav @searchButton="searchButton" @resetButton="resetButton" />
  <AppMain />
</template>

<style lang="scss" scoped></style>
