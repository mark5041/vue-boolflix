<template>
  <main>
      <input type="text" v-model="serchedElement">
      <MovieList 
        :movies="this.MovieList"
      />
  </main>
</template>

<script>
import axios from 'axios'
import MovieList from "./MovieList.vue";

export default {
  name: "Main",
  components: {
    MovieList
  },
  data() {
      return {
        serchedElement: "",
        OriginalPath: "https://api.themoviedb.org/3/search/movie?api_key=a497e9cc421ffc632cdb6b67c77a839e&query=",
        Path: null,
        MovieList: null,
        startEvent: false,
      }
  },
  methods: {
    findMovie(string) 
    {
      if(string != null)
      {
        axios.get(string)
        .then((result) => {
          this.MovieList = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
      }
    },
    onlySpaces(str)
    {
        return str.trim().length === 0;
    },
  },
  watch: 
  {
    serchedElement: 
      function()
      {
          if(this.serchedElement != '' && this.onlySpaces(this.serchedElement) == false)
          {
            if(!this.startEvent)
            {
              this.startEvent = true;
              setTimeout(() => {
                let string = this.serchedElement.replace(/ /g,"+");
                this.Path = this.OriginalPath + string;
                if(this.Path != this.OriginalPath)
                {
                  console.log(this.Path);
                  setTimeout(() => {
                    this.findMovie(this.Path); 
                  }, 200);
                }
                this.startEvent = false;
              }, 500)
            }
          }
          else
          {
            this.Path = null;
            this.MovieList = null;
            this.serchedElement = '';
          }
      },
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
