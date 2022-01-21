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
