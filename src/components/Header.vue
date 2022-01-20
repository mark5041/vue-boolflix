<template>
  <header>
      <input type="text" v-model="serchedElement">
      <button @click="changeCategory('tv')">Serie TV</button>
      <button @click="changeCategory('movie')">Film</button>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: "Header",
  data() {
      return {
        serchedElement: "",
        OriginalPath: "https://api.themoviedb.org/3/search/",
        typeOfEntertainment: "movie",
        API_Key: "?api_key=a497e9cc421ffc632cdb6b67c77a839e&query=",
        Path: null,
        List: null,
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
            this.List = result.data.results;
        })
        .catch((error) => {
            console.log(error);
        })
      }
    },
    changeCategory(string)
    {
        if(this.typeOfEntertainment != string)
        {
            this.typeOfEntertainment = string;
            this.resetSearch();
        }
    },
    resetSearch()
    {
        this.serchedElement = "";
        this.List = null;
        this.Path = null;
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
                this.Path = this.OriginalPath + this.typeOfEntertainment + this.API_Key + string;
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
            this.resetSearch();
          }
      },
      List:
        function()
        {   
            this.$emit('searchResult', this.List);
            this.$emit('Entertainment', this.typeOfEntertainment);
        }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
