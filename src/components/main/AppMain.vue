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
    <div v-show="this.store.apiInfo.endpoints.query !== ''">
      <h2>Film</h2>
      <div class="row dragscroll">
        <div class="col" v-for="(movie, index) in this.store.movies.list">
          <AppCard
            :index="index"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :originalLanguage="movie.original_language"
            :vote="movie.vote_average"
            :poster="movie.poster_path"
            :actors="this.store.movies.actors[index]"
          />
        </div>
      </div>

      <h2>Serie TV</h2>
      <div class="row dragscroll">
        <div class="col" v-for="(serie, index) in this.store.series.list">
          <AppCard
            :index="index"
            :title="serie.name"
            :originalTitle="serie.original_name"
            :originalLanguage="serie.original_language"
            :vote="serie.vote_average"
            :poster="serie.poster_path"
            :actors="this.store.series.actors[index]"
          />
        </div>
      </div>
    </div>

    <h2>Film più popolari</h2>
    <div class="row dragscroll">
      <div class="col" v-for="(movie, index) in this.store.popularMovie.list">
        <AppCard
          :index="index"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :originalLanguage="movie.original_language"
          :vote="movie.vote_average"
          :poster="movie.poster_path"
          :actors="this.store.popularMovie.actors[index]"
        />
      </div>
    </div>

    <h2>Serie TV del momento</h2>
    <div class="row dragscroll">
      <div class="col" v-for="(serie, index) in this.store.popularSeries.list">
        <AppCard
          :index="index"
          :title="serie.name"
          :originalTitle="serie.original_name"
          :originalLanguage="serie.original_language"
          :vote="serie.vote_average"
          :poster="serie.poster_path"
          :actors="this.store.popularSeries.actors[index]"
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

    .row {
      display: flex;
      overflow-x: hidden;
      margin-top: 25px;
      margin-bottom: 25px;

      .col {
        margin: 5px;
      }
    }
  }
</style>
