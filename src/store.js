import {createStore}from 'vuex'
import axios from 'axios'


const store = createStore({
  state() {
    return {
      el: '#app',
      name: 'kim',
    }
  },

  mutations: {
    이름변경(state) {
      state.name = 'park'
    },
    스크롤(state) {
      console.log(state.sceneInfo);
    },
  },

  mounted : function(){

  },

  actions : {

  },
});

export default store;