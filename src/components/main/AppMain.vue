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
    <div class="row">
      <div class="col" v-for="(movie, index) in this.store.movie.results">
        <AppCard
          :index="index"
          :title="movie.title"
          :originalTitle="movie.originalTitle"
          :originalLanguage="movie.original_language"
          :vote="movie.vote_average"
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
      overflow-x: scroll;

      .col {
        margin: 5px;
      }
    }
  }
</style>
