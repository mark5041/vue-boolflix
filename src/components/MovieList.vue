<template>
  <div v-show="movies != null">
      <ul v-for="(element, index) in movies" :key="index">
        <li>titolo originale: {{element.original_title}}</li>
        <li>titolo: {{element.title}}</li>
        <li>lingua: {{element.original_language}}</li>
        <li>voto: {{element.vote_average}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "Main",
  props: {
    movies: Array,
    path: String,
  },
  data() {
      return {
        
      }
  },
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
