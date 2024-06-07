<script>
  import AppHeader from "./components/header/AppHeader.vue";
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
      AppHeader,
      AppMain,
    },

    watch: {
      "store.apiInfo.endpoints.query": "search",
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
            .get(
              this.store.apiInfo.url +
                (this.store.apiInfo.search + this.store.apiInfo.movie),
              {
                params,
              }
            )
            .then((response) => {
              this.store.movies = response.data;
              console.log(this.store.movies);
            });

          axios
            .get(
              this.store.apiInfo.url +
                (this.store.apiInfo.search + this.store.apiInfo.tv),
              {
                params,
              }
            )
            .then((response) => {
              this.store.series = response.data;
              console.log(this.store.series);
            });
        } else {
          console.log("Query vuota");
        }

        axios
          .get(
            this.store.apiInfo.url +
              (this.store.apiInfo.movie + this.store.apiInfo.popular),
            {
              params: {
                api_key: this.store.apiInfo.endpoints.api_key,
              },
            }
          )
          .then((response) => {
            console.log(response);
            this.store.popularMovie = response.data;
            console.log(this.store.popularMovie);
          });

        axios
          .get(
            this.store.apiInfo.url +
              (this.store.apiInfo.tv + this.store.apiInfo.popular),
            {
              params: {
                api_key: this.store.apiInfo.endpoints.api_key,
              },
            }
          )
          .then((response) => {
            console.log(response);
            this.store.popularSeries = response.data;
            console.log(this.store.popularSeries);
          });
      },
    },

    created() {
      this.search();
    },
  };
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
