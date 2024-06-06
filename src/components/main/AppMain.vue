<script>
  import { store } from "../../store.js";
  import AppCard from "./AppCard.vue";
  export default {
    data() {
      return { store };
    },
    components: { AppCard },
  };
</script>

<template>
  <div class="container">
    <h2>Film</h2>
    <div class="row">
      <div class="col" v-for="(movie, index) in this.store.movies.results">
        <AppCard
          :index="index"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :originalLanguage="movie.original_language"
          :vote="movie.vote_average"
        />
      </div>
    </div>

    <h2>Serie TV</h2>
    <div class="row">
      <div class="col" v-for="(serie, index) in this.store.series.results">
        <AppCard
          :index="index"
          :title="serie.name"
          :originalTitle="serie.original_name"
          :originalLanguage="serie.original_language"
          :vote="serie.vote_average"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    max-width: 1800px;
    margin: 0 auto;
    overflow-x: hidden;
    padding-top: 100px;

    .row {
      display: flex;
      overflow-x: scroll;

      .col {
        margin: 5px;
      }
    }
  }
</style>
