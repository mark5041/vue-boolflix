<template>
  <main>
      <MovieList 
        :movies="this.list"
      />
  </main>
</template>

<script>
import MovieList from "./MovieList.vue";

export default {
  name: "Main",
  components: {
    MovieList
  },
  props: {
    list: Array,
  },
  data() {
      return {
        
      }
  },
  methods: {
    
  },
  watch: 
  {
    
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
