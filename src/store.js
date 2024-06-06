import { reactive } from "vue";

export const store = reactive({
  movies: [],
  series: [],

  apiInfo: {
    url: "https://api.themoviedb.org/3/search",
    movie: "/movie",
    tv: "/tv",
    endpoints: {
      api_key: "63a64502b7a992caa8ecad2d1343ee53",
      include_adult: false,
      query: "",
      language: "en-US",
      page: 1,
    },
  },
});
