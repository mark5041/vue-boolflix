<template>
  <div v-show="movies != null">
    <div v-if="type == 'movie'">
      <ul v-for="(element, index) in movies" :key="index">
          <li>titolo originale: {{element.original_title}}</li>
          <li>titolo: {{element.title}}</li>
          <li>lingua: {{element.original_language}}</li>
          <li>voto: {{element.vote_average}}</li>
          <li>
              <i :class="(element.original_language == 'en') ? 'flag flag-us' : `flag flag-${ element.original_language }`"></i>
          </li>
      </ul>
    </div>
    <div v-else-if="type == 'tv'">
      <ul v-for="(element, index) in movies" :key="index">
          <li>titolo originale: {{element.original_name}}</li>
          <li>titolo: {{element.name}}</li>
          <li>lingua: {{element.original_language}}</li>
          <li>voto: {{element.vote_average}}</li>
          <li>
              <i :class="(element.original_language == 'en') ? 'flag flag-us' : `flag flag-${ element.original_language }`"></i>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: "Main",
  props: {
    movies: Array,
    type: String
  },
  data() {
      return {
        
      }
  },
  watch:
  {
    movies:
      function()
      {
        console.log(this.movies);
      }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
