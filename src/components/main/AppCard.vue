<script>
  export default {
    props: [
      "index",
      "title",
      "originalTitle",
      "originalLanguage",
      "vote",
      "poster",
    ],
  };
</script>

<template>
  <div class="card">
    <img
      v-if="poster !== null"
      class="pic"
      :src="`https://image.tmdb.org/t/p/w342/${poster}`"
      :alt="`${poster}`"
    />
    <div v-else class="alternative"><h1>Not Found</h1></div>
    <p>{{ this.title }}</p>
    <p>{{ this.originalTitle }}</p>
    <img
      class="lang"
      :src="`/node_modules/language-icons/icons/${originalLanguage}.svg`"
      :alt="originalLanguage"
    />
    <p>{{ this.vote }}</p>
    <div class="stars">
      <span
        v-for="star in 5"
        :key="star"
        :class="{ filled: star <= Math.round(vote) / 2 }"
        >★</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    color: white;
    .alternative {
      background-color: black;
      min-width: 250px;
      min-height: 375px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    p,
    .lang {
      margin-top: 5px;
    }
    .pic {
      max-width: 250px;
      max-height: 400px;
      background-size: cover;
    }
    .lang {
      width: 25px;
    }
    .stars {
      margin-top: 5px;
    }
    .filled {
      color: gold; /* Cambia il colore delle stelline riempite */
    }
  }
</style>
