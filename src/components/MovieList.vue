<template>
  <div v-show="movies != null">
    <div>
      <ul v-for="(element, index) in movies" :key="index">
          <li v-show="element.original_title != null && element.original_title != element.title">titolo originale: {{element.original_title}}</li>
          <li v-show="element.title != null">titolo: {{element.title}}</li>
          <li v-show="element.original_name != null && element.original_name != element.name">titolo originale: {{element.original_name}}</li>
          <li v-show="element.name != null">titolo: {{element.name}}</li>
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
  },
  data() {
      return {
        
      }
  },
  watch:
  {

  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
