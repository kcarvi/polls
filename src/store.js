import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { db } from "./firebase"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    polls: [
      { 
        q: 'One delectus aut autem',
        a: [ 'true', 'false', 'none']
      },
      { 
        q: 'Two delectus aut autem',
        a: [ 'true', 'false', 'none']
      },
      { 
        q: 'Three delectus aut autem',
        a: [ 'true', 'false', 'none']
      },
      { 
        q: 'Four delectus aut autem',
        a: [ 'true', 'false', 'none']
      },
      { 
        q: 'Five delectus aut autem',
        a: [ 'true', 'false', 'none']
      },
      { 
        q: 'Six delectus aut autem',
        a: [ 'true', 'false', 'none']
      },
    ],
    answers: []
  },
  mutations: {
    setLoadedAnswers(state, payload){
      state.answers = payload;
    }
  },
  actions: {
    loadAnswers({commit}){
      db.collection("polls").onSnapshot(function(querySnapshot) {
        const arr = [];
        querySnapshot.forEach(function(doc) {
          arr.push(doc.data());
        });
        commit('setLoadedAnswers', arr);
      });
    },
    addAnswer({commit}, payload){
      db.collection('polls').add({
        q: payload.q,
        a: payload.a,
      });
    }
  },
  getters: {
    loadedPolls(state){
      return state.polls;
    },
    loadedAnswers(state){
      return state.answers;
    }
  }
})