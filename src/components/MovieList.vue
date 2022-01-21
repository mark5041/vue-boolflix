// le parti di codice che sono stati commentati serviranno per aggiustare l'assegnazione della bandiera

<template>
  <div class="container" v-show="movies != null">
    <div class="row">
      <!-- <ul v-for="(element, index) in movies" :key="index">
          <li v-show="element.original_title != null && element.original_title != element.title">titolo originale: {{element.original_title}}</li>
          <li v-show="element.title != null">titolo: {{element.title}}</li>
          <li v-show="element.original_name != null && element.original_name != element.name">titolo originale: {{element.original_name}}</li>
          <li v-show="element.name != null">titolo: {{element.name}}</li>
          <li>lingua: {{element.original_language}}</li>
          <li>voto: {{element.vote_average}}</li>
          <li>
              <country-flag :country='getFlag(element.original_language)' size='small'/>
          </li>
      </ul> -->
      <div v-for="(element, index) in movies" :key="index" class="card p-0">
        <img v-show="element.poster_path != null" :src="getSeriesImage(element.poster_path)" alt="">
        <div v-show="element.poster_path == null" class="no-image">
          <span>Image Unavailable</span>
        </div>
        <div class="shadow-card">
          <div v-show="element.name != null" class="title">
            <h1>titolo</h1>
            <div v-show="element.original_name != null && element.original_name != element.name" class="original_title">
              <h3>titolo originale</h3>
              <span>original title</span>
            </div>
          </div>

          <div v-show="element.title != null" class="title">
            <h1>titolo</h1>
            <div v-show="element.original_title != null && element.original_title != element.title" class="original_title">
              <h3>titolo originale</h3>
              <span>original title</span>
            </div>
          </div>
          
          <div class="overview">
            <h4>overview:</h4>
            <span>Mustafa Moradi is aching to find a girlfriend. On the other end of the city, Linnea is desperately searching for a guy with style, courage and a burning passion</span>
          </div>
          <div class="language">
            <span>Language: </span>
            <span>{{element.original_language}}</span>
            <country-flag :country='getFlag(element.original_language)' size='small'/>
          </div>
          <div class="language">
            <span>Avarage Vote: {{element.vote_average}}</span>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
// import CountryFlag from 'vue-country-flag'
import countrydb from '../assets/json_data/countries.json'

export default {
  name: "Main",
  components: {
    // CountryFlag,
  },
  props: {
    movies: Array,
  },
  data() {
      return {
        countries: countrydb,
      }
  },
  created() {
    
  },
  methods: {
    getFlag(lang) {
      switch (lang) {
        case 'ik':
        case 'gv':
        case 'nv':
        case 'en':
          return 'us';
        case 'ce':
        case 'kv':
        case 'yi':
          return 'ru'
        case 'pi':
        case 'lo':
          return 'th'
        case 'ig':
        case 'ha':
        case 'yo':
        case 'ff':
          return 'ng';
        case 'ur':
        case 'ks':
        case 'ta':
        case 'or':
        case 'hi':
        case 'te':
          return 'in';
        case 'fy':
          return 'de';
        case 'eu':
        case 'an':
          return 'es'
        case 'ti':
        case 'aa':
          return 'et'
        case 'iu':
        case 'oj':
          return 'ca'
        case 'zh':
        case 'ii':
          return 'cn'
        case 'ko':
          return 'kr';
        case 'ja':
          return 'jp';
        case 'kk':
          return 'kz';
        case 'ka':
        case 'ab':
        case 'os':
          return 'ge';
        case 'cs':
          return 'cz';
        case 'av':
          return 'az';
        case 'rm':
          return 'ch';
        case 'ts':
        case 'zu':
        case 'xh':
          return 'za';
        case 'ku':
          return 'tr';
        case 'ln':
          return 'cd';
        case 'ny':
          return 'mz';
        case 'da':
          return 'dk';
        case 'hz':
        case 'kj':
          return 'na';
        case 'mi':
          return 'nz';
        case 'uk':
          return 'ua';
        case 'ay':
          return 'cl';
        case 'ho':
          return 'pg';
        case 'ty':
          return 'pf';
        case 'nn':
        case 'nb':
          return 'no';
        case 'qu':
          return 'pe';
        case 'sq':
          return 'al';
        case 'wa':
          return 'be';
        case 'lg':
          return 'ug';
        case 'el':
          return 'gr';
        case 'nd':
          return 'zw';
        case 'sw':
          return 'tz';
        case 'wo':
          return 'sn';
        case 'rn':
          return 'bi';
        case 'fa':
          return 'ir';
        case 'hy':
          return 'am';
        case 'dv':
          return 'mv';
        case 'ki':
          return 'gl';
        case 'jv':
          return 'my';
        case 'su':
          return 'sd';
        case 'he':
          return 'il';
        case 'ak':
          return 'gh';
        case 'oc':
          return 'fr';
        default:
          return lang;
      }
    },
    getSeriesImage(string)
    {
      return `https://image.tmdb.org/t/p/w342${string}`;
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

.container {
  height: 100%;
}

.row {
  column-gap: 1em;
  row-gap: 1em;
  padding: 30px 0;
  .card {
      flex-basis: calc(100% / 6 - 1em);
      position: initial;
      max-height: 300px;
      border: 5px transparent transparent;
      border-radius: 10px;
      overflow: hidden;
      img {
        height: 100%;
      }
      .no-image {
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .shadow-card{
        height: 80vh;
        width: 60vh;
        position: absolute;
        background-color: #181818;
        color: white;
        left: 33%;
        padding: 15px;
        display: none;
        .original_title {
          position: relative;
          margin-bottom: 1.5em;
          h3 {
            margin: 0;
            font-size: 1.4em;
          }
          span {
            color: rgb(172, 172, 172);
            position: absolute;
            font-size: 0.8em;
            line-height: 0.8em;
          }
        }
        .language {
          margin-top: 1em;
          span:nth-child(1) {
            font-size: 1.2em;
          }
          span:nth-child(2) {
            margin-right: 0.6em;
          }
        }
      }
  }


}
</style>
