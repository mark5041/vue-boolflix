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
        Path: "",
        MovieList: null,
        startEvent: false,
      }
  },
  methods: {
    findMovie(string) 
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
  watch: 
  {
    serchedElement: 
      function()
      {
          if(this.serchedElement != '' && this.Path == null)
          {
            if(!this.startEvent)
            {
              this.startEvent = true;
              setTimeout(() => {
                let string = this.serchedElement.split(" ");
                let newString = "";
                string.forEach((element, index, array) => {
                  if((index == 0 && index + 1 != array.length) || index + 1 != array.length)
                  {
                    newString += `${element}+`; 
                  }
                  else
                  {
                    newString += `${element}`; 
                  }
                });
                this.Path = this.OriginalPath + newString;
                if(this.Path != this.OriginalPath)
                {
                  setTimeout(() => {
                    this.findMovie(this.Path); 
                  }, 200);
                }
                this.startEvent = false;
              }, 2500)
            }
          }
          else
          {
            this.Path = null;
            this.MovieList = null;
          }
      },
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
