<script>
  export default {
    props: ["index", "title", "originalTitle", "originalLanguage", "vote"],
  };
</script>

<template>
  <div class="card">
    <p>{{ this.title }}</p>
    <p>{{ this.originalTitle }}</p>
    <img
      :src="`/node_modules/language-icons/icons/${originalLanguage}.svg`"
      :alt="originalLanguage"
    />
    <p>{{ this.vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: 250px;
    height: 250px;
    background-color: wheat;

    img {
      width: 20px;
      height: 15px;
    }
  }
</style>
