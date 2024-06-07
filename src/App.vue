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
      standardSearch() {
        //chiamata ai film più popolari

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
            this.store.popularMovie.list = response.data.results;

            this.store.popularMovie.list.forEach((element) => {
              const id = element.id;

              axios
                .get(
                  this.store.apiInfo.url +
                    this.store.apiInfo.movie +
                    "/" +
                    id +
                    "/credits",
                  {
                    params: {
                      api_key: this.store.apiInfo.endpoints.api_key,
                    },
                  }
                )
                .then((response) => {
                  const credits = response.data;

                  const actors = credits.cast.slice(0, 5);

                  this.store.popularMovie.actors.push(actors);
                });
            });
          });

        //chiamata alle serie popolari

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
            this.store.popularSeries.list = response.data.results;

            this.store.popularSeries.list.forEach((element) => {
              const id = element.id;

              axios
                .get(
                  this.store.apiInfo.url +
                    this.store.apiInfo.tv +
                    "/" +
                    id +
                    "/credits",
                  {
                    params: {
                      api_key: this.store.apiInfo.endpoints.api_key,
                    },
                  }
                )
                .then((response) => {
                  const credits = response.data;

                  const actors = credits.cast.slice(0, 5);

                  this.store.popularSeries.actors.push(actors);
                });
            });
          });
      },

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
              this.store.movies.list = response.data.results;

              this.store.movies.list.forEach((element) => {
                const id = element.id;

                axios
                  .get(
                    this.store.apiInfo.url +
                      this.store.apiInfo.movie +
                      "/" +
                      id +
                      "/credits",
                    {
                      params: {
                        api_key: this.store.apiInfo.endpoints.api_key,
                      },
                    }
                  )
                  .then((response) => {
                    const credits = response.data;

                    const actors = credits.cast.slice(0, 5);

                    this.store.movies.actors.push(actors);
                  });
              });
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
              this.store.series.list = response.data.results;

              this.store.series.list.forEach((element) => {
                const id = element.id;

                axios
                  .get(
                    this.store.apiInfo.url +
                      this.store.apiInfo.tv +
                      "/" +
                      id +
                      "/credits",
                    {
                      params: {
                        api_key: this.store.apiInfo.endpoints.api_key,
                      },
                    }
                  )
                  .then((response) => {
                    const credits = response.data;

                    const actors = credits.cast.slice(0, 5);

                    this.store.series.actors.push(actors);
                  });
              });
            });
        } else {
          console.log("Query vuota");
        }
      },
    },

    created() {
      this.search();
      this.standardSearch();
    },
  };
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
