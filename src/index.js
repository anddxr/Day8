import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

new Vue({
    el: '#zad',
    data: {
      students: [],
      search:'',
      usd:0,
      changeId:'',
      money:'',
      curr: [],
      name:'',
      group:'',
      isDonePr:false,
    },
    mounted: function(){
      Vue.axios.get("http://46.101.212.195:3000/students").then((response) =>{
        console.log(response.data)
        this.students = response.data;
      })

      Vue.axios.get("http://apilayer.net/api/live?access_key=e5f9f31b0eb758ba092f2089065089e4&currencies=UAH,EUR&source=USD&format=1").then((response) =>{
        console.log(response.data)
        this.curr = response.data;
      })
    },
    methods: {
      clickme: function(id){
        alert("Ok");
        this.students = this.students.filter((element) => { 
          return element.id !== id;
        });
      },
      AddNewStud: function(){
        Vue.axios.post("http://46.101.212.195:3000/students",{
          name: this.name,
          group: this.group,
          isDonePr: false
        }).then((responce) => {
          console.log(responce.data)
        })
        this.GetList()
      },
      DlStudentById: function(id){
        console.log(id)
        Vue.axios.delete('http://46.101.212.195:3000/students/'+id)
        this.GetList()
      },
      GetList: function(){
        Vue.axios.get("http://46.101.212.195:3000/students").then((response) =>{
        console.log(response.data)
        this.students = response.data;
      })
      },
      UpdtById: function(){

      }
    },
});
