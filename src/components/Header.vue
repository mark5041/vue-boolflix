<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BOOTFLIX</a>
        
        <div class="navbar-collapse float-end" id="navbarSupportedContent">
          <div class="d-flex">
            <input type="text" v-model="serchedElement">
            <button class="mx-4" :class="(typeOfEntertainment == 'tv') ? 'active' : ''" @click="changeCategory('tv')">Serie TV</button>
            <button :class="(typeOfEntertainment == 'movie') ? 'active' : ''" @click="changeCategory('movie')">Film</button>
          </div>
        </div>
      </div>
    </nav>
      <!-- <div class="left-col">
        <span class="title">BOOTFLIX</span>
      </div>
      <div class="right-col">
        <input type="text" v-model="serchedElement">
        <button @click="changeCategory('tv')">Serie TV</button>
        <button @click="changeCategory('movie')">Film</button>
      </div> -->
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: "Header",
  data() {
      return {
        serchedElement: "",
        InitialPath: "https://api.themoviedb.org/3/movie/upcoming?api_key=a497e9cc421ffc632cdb6b67c77a839e",
        OriginalPath: "https://api.themoviedb.org/3/search/",
        typeOfEntertainment: null,
        API_Key: "?api_key=a497e9cc421ffc632cdb6b67c77a839e&query=",
        languagePath: "&language=it",
        Path: null,
        multipleSearch: true,
        List: null,
        startEvent: false,
      }
  },
  created()
  {
      this.findMovie(this.InitialPath, null);
  },
  methods: {
    findMovie(stringPath, string) 
    {
      if(stringPath != null)
      {
        axios.get(stringPath)
        .then((result) => {
            this.List = result.data.results;
        })
        .catch((error) => {
            console.log(error);
        })
      }
      else if(stringPath == null && this.multipleSearch == true)
      {
        stringPath = `${this.OriginalPath}tv${this.API_Key}${string}`;
        axios.get(stringPath)
        .then((result) => {
            let array1 = result.data.results;
            this.List = array1;
        })
        .catch((error) => {
            console.log(error);
        })

        stringPath = `${this.OriginalPath}movie${this.API_Key}${string}`;
        axios.get(stringPath)
        .then((result) => {
            let array2 = result.data.results;
            this.List = [...this.List, ...array2];
        })
        .catch((error) => {
            console.log(error);
        })
        
      }
    },
    getSearch(string, type)
    {
        if(type == 'tv' || type == 'movie')
        {
            this.Path = this.OriginalPath + type + this.API_Key + string;
            this.multipleSearch = false;
        }
        else
        {
            this.Path = null;
            this.multipleSearch = true;
        }
    },
    changeCategory(string)
    {
        if(this.typeOfEntertainment != string)
        {
            this.typeOfEntertainment = string;
            if(this.serchedElement != "")
            {
                this.resetSearch();
            }
        }
        else
        {
            this.typeOfEntertainment = null;
        }
    },
    resetSearch()
    {
        this.serchedElement = "";
        this.List = null;
        this.Path = null;
        this.findMovie(this.InitialPath, null);
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
                let queryString = this.serchedElement.replace(/ /g,"+");
                this.getSearch(queryString, this.typeOfEntertainment);
                if(this.Path != null || this.multipleSearch == true)
                {
                  setTimeout(() => {
                    this.findMovie(this.Path, this.serchedElement); 
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
        },
    typeOfEntertainment:
        function()
        {
          console.log(this.typeOfEntertainment);
        }

  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
header {
  background-color: black;
  a, button {
    color: rgb(238, 22, 22);
  }
  .navbar-collapse {
    flex-direction: row-reverse;
    .d-flex {
      align-items: center;
      input {
        padding: 0 10px;
        margin: 0;
        outline: 0;
        border: none;
        height: 30px;
        font-size: 0.7em;
        line-height: 0.7em;
      }
      button {
        background-color: transparent;
        border: 2px solid transparent;
        padding: 5px 10px;
      }
      .active {
        border-radius: 15px;;
        border: 2px solid white;
        color: white;
      }
    }
    
  }
}
</style>
