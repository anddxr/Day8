import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

new Vue({
    el: '#zad',
    data: {
      regions: [],
      city:[],
      gym:[],
      selectedRegion:'',
      selectedCity:'',
    },

    mounted: function(){
     
      Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",{
          "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3",
          "modelName": "Address",
          "calledMethod": "getAreas",
          "methodProperties": {}
      })
      .then((response) => {
        this.regions = response.data.data;
        this.mount=!this.mount;
      }),
      Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",{
        "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3",
        "modelName": "Address",
        "calledMethod": "getCities",
        "methodProperties": {}
    })
    .then((response) => {
      this.city = response.data.data;
      this.mount=!this.mount;
    })
    
    },
    methods: {
      findWare: function(){
        Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",{
          "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3",
          "modelName": "Address",
          "calledMethod": "getWarehouses",
          "methodProperties": {"CityName":this.selectedCity}
      })
      .then((response) => {
        this.gym = response.data.data;
        this.mount=!this.mount;
      })
      }
    },
});
