<template>
  <main>
      <input type="text" v-model="serchedElement">
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  components: {
    // HelloWorld,
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
        console.log(this.MovieList);
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
          if(this.serchedElement != '' && this.prova1 == null)
          {
            if(!this.startEvent)
            {
              this.startEvent = true;
              setTimeout(() => {
                let string = this.serchedElement.split(" ");
                let newString = "";
                string.forEach((element, index, array) => {
                  if(index == 0 || index + 1 != array.length)
                  {
                    newString += `${element}+`; 
                  }
                  else
                  {
                    newString += `${element}`; 
                  }
                  console.log(element, index , array.length);
                });
                this.Path = this.OriginalPath + newString;
                console.log(this.Path);
                setTimeout(() => {
                  this.findMovie(this.Path); 
                }, 200);
                this.startEvent = false;
              }, 2500)
            }
            
          }
      },
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
