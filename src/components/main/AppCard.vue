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
    <div class="image">
      <img
        v-if="poster !== null"
        class="pic"
        :src="`https://image.tmdb.org/t/p/w342/${poster}`"
        :alt="`${poster}`"
      />
      <div v-else class="alternative">
        <h1>No image Found</h1>
      </div>
    </div>
    <div class="text">
      <p>{{ this.title }}</p>
      <!--<p>{{ this.originalTitle }}</p>-->
      <img
        class="lang"
        :src="`/node_modules/language-icons/icons/${originalLanguage}.svg`"
        :alt="originalLanguage"
      />
      <!--<p>{{ this.vote }}</p>-->
      <div class="stars">
        <span
          v-for="star in 5"
          :key="star"
          :class="{ filled: star <= Math.round(vote) / 2 }"
          >★</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    color: white;
    width: 342px;
    height: 500px;
    position: relative;

    .image {
      position: relative;
      display: block;
      height: 100%;

      .pic {
        height: 100%;
        width: 100%;
      }
      .alternative {
        height: 100%;
        display: grid;
        place-items: center;
        background-color: black;
      }
    }

    .text {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      padding-left: 50px;
      padding-right: 50px;

      p,
      .lang {
        margin-top: 5px;
      }
      .lang {
        width: 25px;
      }
      .stars {
        margin-top: 5px;
      }
      .filled {
        color: gold;
      }
    }

    &:hover .text {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      gap: 15px;
    }
  }
</style>
