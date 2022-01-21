// le parti di codice che sono stati commentati serviranno per aggiustare l'assegnazione della bandiera

<template>
  <div class="container" v-show="movies != null">
    <div class="row">

      <button v-for="(element, index) in movies" :key="index" @click="getInfo(index)" class="card p-0">
        <img class="img-fluid" v-show="element.poster_path != null" :src="getSeriesImage(element.poster_path)" alt="">
        <div v-show="element.poster_path == null" class="no-image">
          <span>Image Unavailable</span>
        </div>
      </button>

      <div v-if="info != null" class="invisble-section">
          <div class="shadow-card">
            <div v-show="info.name != null" class="title">
              <h1>{{info.name}}</h1>
              <div v-show="info.original_name != null && info.original_name != info.name" class="original_title">
                <h3>{{info.original_name}}</h3>
                <span>original title</span>
              </div>
            </div>

            <div v-show="info.title != null" class="title">
              <h1>{{info.title}}</h1>
              <div v-show="info.original_title != null && info.original_title != info.title" class="original_title">
                <h3>{{info.original_title}}</h3>
                <span>original title</span>
              </div>
            </div>
            
            <div v-show="info.overview != null" class="overview">
              <h4>Overview:</h4>
              <span>{{info.overview}}</span>
            </div>
            <div class="language">
              <span>Language: </span>
              <span>{{info.original_language}}</span>
              <country-flag :country='getFlag(info.original_language)' size='small'/>
            </div>
            <div class="language">
              <span>Avarage Vote: {{info.vote_average}}</span>
            </div>
            <div @click="info = null" class="close">
              <span>Close</span>
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
        info: null,
      }
  },
  created() {
    setTimeout(() => {
      console.log(this.movies);
    }, 200);
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
    getInfo(index)
    {
      this.info = this.movies[index];
    }
  },
  watch:
  {
    'movies.info_visibility': function(newVal, previousVal) {
      console.log("new Value is " + newVal,
       "previous value is " + previousVal);
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
  column-gap: 1.4em;
  row-gap: 1em;
  padding: 30px 0;
  .card {
      flex-basis: calc(100% / 7 - 1.4em);
      position: initial;
      max-height: 250px;
      border: 5px transparent transparent;
      border-radius: 10px;
      overflow: hidden;
      cursor: unset;
      .img-fluid{
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
  }
  .invisble-section {
        position: relative;
        background: linear-gradient(90deg, #e6646400 0vw, #e6646400 20vw, #181818 20vw, #181818 80vw,#e6646400 80vw, #e6646400 100vw);
        position: fixed;
        width: 100vw;
        height: 80vh;
        left: 0;
        top: 10%;
        .shadow-card {
          height: 80vh;
          width: 60vw;
          position: absolute;
          color: white;
          padding: 60px;
          left: 20%;
          z-index: 100000;
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
          .close
          {
            position: relative;
            bottom: -40%;
            left: 45.5%;
            border-radius: 20px;
            border: 1px solid white;
            width: 70px;
            text-align: center;
          }
        }
      }
  .close {
    cursor: pointer;
  }
  


}
</style>
