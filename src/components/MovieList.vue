// le parti di codice che sono stati commentati serviranno per aggiustare l'assegnazione della bandiera

<template>

  <div class="container"  v-show="movies != null">
    <div class="row">


      <button v-for="(element, index) in movies" :key="index" @click="getInfo(index)" class="card p-0">
        <img class="img-fluid" v-show="element.poster_path != null" :src="getSeriesImage(element.poster_path)" alt="">
        <img class="img-fluid no-image" v-show="element.poster_path == null" src="../assets/img/no-image.jpg" alt="">
      </button>

      <transition v-on:before-enter="SCbeforeEnter" v-on:enter="SCenter" v-on:leave="SCleave" v-bind:css="false">
        <div v-if="info != null" class="invisble-section">
          <div class="shadow-card">
            <div v-show="info.name != null" class="title">
              <h2>{{info.name}}</h2>
              <div v-show="info.original_name != null && info.original_name != info.name" class="original_title">
                <h3>{{info.original_name}}</h3>
                <span>original title</span>
              </div>
            </div>

            <div v-show="info.title != null" class="title">
              <h2>{{info.title}}</h2>
              <div v-show="info.original_title != null && info.original_title != info.title" class="original_title">
                <h3>{{info.original_title}}</h3>
                <span>original title</span>
              </div>
            </div>
            
            <div v-show="info.overview != ''" class="overview">
              <h4>Overview:</h4>
              <span>{{overviewText}}</span>
              <div v-if="moreText == false" @click="moreText = true" href="#" class="ms-2 text-primary d-inline">...more</div>
              <div v-else-if="moreText == true" @click="moreText = false" href="#" class="ms-2 text-primary d-inline">less</div>
            </div>

            <div v-show="showedCast != ''" class="overview">
              <h4>Cast:</h4>
              <span>{{showedCast}}</span>
              <div v-if="moreCast == false" @click="moreCast = true" href="#" class="ms-2 text-primary d-inline">...more</div>
              <div v-else-if="moreCast == true" @click="moreCast = false" href="#" class="ms-2 text-primary d-inline">less</div>
            </div>

            <div class="language my-3">
              <span>Language: </span>
              <span>{{getLangName(info.original_language)}}</span>
              <country-flag :country='getFlag(info.original_language)' size='small'/>
            </div>

            <div class="vote">
              <span>Avarage Vote: {{getRouded(info.vote_average)}}</span>
            </div>

            <div @click="info = null" class="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
              </svg>
            </div>

          </div>
        </div>
      </transition>
      
    </div>
    
  </div>
</template>

<script>
// import CountryFlag from 'vue-country-flag'
import countrydb from '../assets/json_data/countries.json'
import axios from 'axios'
import Velocity from 'velocity-animate'

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
        scrollBar: false,
        info: null,
        language: null,
        moreText: false,
        moreCast: false,
        overviewText: null,
        showedCast: null,
        fullCast: null,
      }
  },
  created() {
    axios.get("https://api.themoviedb.org/3/configuration/languages?api_key=e99307154c6dfb0b4750f6603256716d")
    .then((result) => {
        this.language = result.data;
    })
    .catch((error) => {
        console.log(error);
    });

  },
  methods: {


    SCbeforeEnter: 
        function (el) 
        {
            el.style.opacity = 0
            el.style.top = '60%'
        },
    SCenter: 
        function (el, done) 
        {
            Velocity(el, { opacity: 1, top: '10%' }, { duration: 300 }, { complete: done })
        },
    SCleave: 
        function (el, done) 
        {
            Velocity(el, { top: '5%', opacity: 1}, { duration: 200 })
            Velocity(el, { top: '70%', opacity: 0}, { duration: 500 })
            Velocity(el, { display: 'none' }, { complete: done })
        },



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
      if(this.movies[index].name == null)
      {
        axios.get(`https://api.themoviedb.org/3/movie/${this.movies[index].id}?api_key=a497e9cc421ffc632cdb6b67c77a839e`)
        .then((result) => {
            this.info = result.data;
            this.getCast();
        })
        .catch((error) => {
            console.log(error);
        });

        
      }
      else
      {
        axios.get(`https://api.themoviedb.org/3/tv/${this.movies[index].id}?api_key=a497e9cc421ffc632cdb6b67c77a839e`)
        .then((result) => {
            this.info = result.data;
            this.getCast();
        })
        .catch((error) => {
            console.log(error);
        });
      }
      
      
    },
    getRouded(float)
    {
      return Math.round(parseFloat(float));
    },
    getLangName(string)
    {
        let langArray = this.language;
        let find = false;
        let i = 0;
        while(find == false)
        {
          if(langArray[i].iso_639_1 == string)
          {
            find = true;
            return langArray[i].english_name;
          }
          i++;
        } 
    },
    getCast()
    {
      if(this.info.name == null)
      {
        axios.get(`https://api.themoviedb.org/3/movie/${this.info.id}/credits?api_key=a497e9cc421ffc632cdb6b67c77a839e`)
        .then((result) => {
            let newArray = result.data.cast;
            this.fullCast = newArray.map(e => e.original_name);
        })
        .catch((error) => {
            console.log(error);
        });
      }
      else
      {
        axios.get(`https://api.themoviedb.org/3/tv/${this.info.id}/credits?api_key=a497e9cc421ffc632cdb6b67c77a839e`)
        .then((result) => {
            let newArray = result.data.cast;
            this.fullCast = newArray.map(e => e.original_name);
        })
        .catch((error) => {
            console.log(error);
        });
      }
      
      
    }
    
  },
  watch:
  {
    
    info:
      function()
      {
        if(this.info != null)
        {
          if(this.info.overview.length >= 200)
            {
              let text = this.info.overview.match(/.{1,200}(\s|$)/g);
              this.overviewText = text[0];
              this.moreText = false;
            }
            else
            {
              this.overviewText = this.info.overview;
              this.moreText = null;
            }

        }
        else
        {
          this.moreText = null;
          this.moreCast = null;
          this.showedCast = null;
          this.fullCast = null;
        }
      },
    moreText: 
      function()
      {
        if(this.moreText != null)
        {
          if(this.moreText && this.info.overview.length >= 200)
          {
            this.overviewText = this.info.overview;
          }
          else  if(!this.moreText && this.info.overview.length >= 200)
                {
                  let text = this.info.overview.match(/.{1,200}(\s|$)/g);
                  this.overviewText = text[0];
                  this.moreText = false;
                }
                else
                {
                  this.overviewText = this.info.overview;
                }
        }
      },
    fullCast:
      function()
      {
        if(this.fullCast != null)
        {
          if(this.fullCast.length > 4)
            {
              this.showedCast = this.fullCast.filter((element, index) => { 
                                    if(index < 5)
                                    {
                                      return element;
                                    }
                                });
              this.showedCast = this.showedCast.join(", ");
              this.moreCast = false;
            }
            else
            {
              this.showedCast = this.fullCast.join(", ");
              this.moreCast = null;
            }
        }
      },
    moreCast: 
      function()
      {
        if(this.moreCast != null)
        {
          if(this.moreCast && this.fullCast.length > 4)
          {
            this.showedCast = this.fullCast.join(", ");
          }
          else  if(!this.moreCast && this.fullCast.length > 4)
                {
                  this.showedCast = this.fullCast.filter((element, index) => { 
                                        if(index < 5)
                                        {
                                          return element;
                                        }
                                    });
                  this.showedCast = this.showedCast.join(", ");
                  this.moreCast = false;
                }
                else
                {
                  this.showedCast = this.fullCast.join(", ");
                }
        }
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
      align-self: stretch;
      position: initial;
      max-height: 250px;
      border: 5px transparent transparent;
      border-radius: 10px;
      overflow: hidden;
      cursor: unset;
      .img-fluid:nth-child(1){
        height: 100%;
      }
      .no-image {
        width: 100%;
      }
  }
  .invisble-section {
        position: relative;
        position: fixed;
        width: 100vw;
        height: 80vh;
        left: 0;
        z-index: 9999;
        .close-div{
          height: 100%;
          width: 20vw;
        }
        .shadow-card {
          position: relative;
          height: 80vh;
          width: 60vw;
          font-size: 90%;
          left: calc(20vw - 12px);
          padding: 60px;
          background-color: #181818;
          color: white;
          border-radius: 15px;
          overflow: overlay;
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
          .overview {
            margin-bottom: 1em;
          }
          .language {
            span:nth-child(1) {
              font-size: 1.2em;
            }
            span:nth-child(2) {
              margin-right: 0.6em;
            }
          }
          .vote{
            margin-bottom: 5em;;
            font-size: 1.2em;
          }
          .close
          {
            position: absolute;
            top: 3.5%;
            right: 3%;
          }
        }
      }
  .close {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  
 


}
</style>
