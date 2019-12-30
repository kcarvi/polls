<template>
  <div id="app">


    <div v-if="!showResult">
      <Poll/>
    </div>
    
    <div v-if="showResult">
      <Result/>
    </div>

    <br>
    <b-button variant="outline-primary" @click="showResult = !showResult">Переключиться</b-button>

  </div>
</template>

<script>
import Result from './components/Result.vue'
import Poll from './components/Poll.vue'

export default {
  data(){
    return {
      showResult: false,
    }
  },
  name: 'app',
  components: {
    Result,
    Poll
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
