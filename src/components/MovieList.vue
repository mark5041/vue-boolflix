// le parti di codice che sono stati commentati serviranno per aggiustare l'assegnazione della bandiera

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
              <country-flag :country='getFlag(element.original_language)' size='small'/>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
import countrydb from '../assets/json_data/countries.json'
// import axios from 'axios'

export default {
  name: "Main",
  components: {
    CountryFlag,
  },
  props: {
    movies: Array,
  },
  data() {
      return {
        // test: null,
        // test2: [],
        countries: countrydb,
        // exist: false,
        // change: 0,
      }
  },
  created() {

/*

    axios.get('https://api.themoviedb.org/3/configuration/languages?api_key=e99307154c6dfb0b4750f6603256716d')
    .then((result) => {
        this.test = result.data;
    })
    .catch((error) => {
        console.log(error);
    })

    console.log("database: " + this.countries.length);
    setTimeout(() =>{
      this.test.forEach(element => {
        let language = element.iso_639_1;
        language = language.toLowerCase();
        this.countries.forEach(element => {
          let language2 = element.alpha_2;
          language2 = language2.toLowerCase();
          if(language == language2)
          {
            this.exist = true;
            console.log("bella");
          }
        });
        if(this.exist == false)
        {
          this.test2.push(language);
        }
        else
        {
          this.exist = false;
        }
      });
    }, 200)

*/
    
  },
  methods: {
    getFlag(lang) {
      switch (lang) {
        case 'en':
          return 'us';
        case 'ko':
          return 'kr';
        case 'ja':
          return 'jp';
        case 'ur':
          return 'pk';
        case 'zh':
          return 'cn';
        default:
          return lang;
      }
    },
  },
  watch:
  {
    exist:
      function()
      {
        this.change ++;
        console.log(this.change);
      }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
