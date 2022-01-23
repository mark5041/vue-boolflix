<template>
  <div id="app">
    <Header 
      @searchResult="getSearch($event)"
    />
    <Main 
      :list="this.SeriesList"
    />
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: 
  {
    Header,
    Main,
  },
  data() {
    return {
      SeriesList: null,
      typeOfEntertinement: "movie",
    }
  },
  methods:
  {
    getSearch(array)
    {
      this.SeriesList = array;
    },
  },
  watch:
   {

   },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
</style>
