<template>
  <div>
    <b-container>
      <b-row>

        <b-col cols="12" class="mb-2">
          <b-button-group>
            <b-button size="lg" 
              v-for="(poll, i) in polls" 
              :class="{ active: i+1 == selectedResult }" 
              @click="selectResult(i+1)" >
              {{ i+1 }}
            </b-button>
          </b-button-group>
        </b-col>

        <b-col cols="12">
          <b-card align-self="center" v-for="(q, i) in polls" v-if="selectedResult == i+1">
            <b-card-text>
              <p>{{ q.q }}</p>

              <div v-for="(a, k) in q.a">
                <span>{{ a }}</span>
                <b-progress :max="qLength(i+1)" height="2rem" show-value>
                  <b-progress-bar :value="progressValue(i+1, k+1)" variant="info"></b-progress-bar>
                </b-progress>
              </div>

              <p class="small ml-auto mt-2">Всего ответов: {{ qLength(i+1) }}</p>

            </b-card-text>
          </b-card>
        </b-col>

      </b-row>
    </b-container>

  </div>
</template>

<script>

  export default {
    data: () => ({
      selectedResult: 1,
    }),
    created() {
      this.$store.dispatch('loadAnswers');
    },
    computed: {
      answers(){
        return this.$store.getters.loadedAnswers;
      },
      polls(){
        return this.$store.getters.loadedPolls;
      },
    },
    methods: {
      selectResult(num){
        this.selectedResult = num;
      },
      qLength(q){
        return this.answers.filter( (data) => data.q == q ).length;
      },
      progressValue(q, a){
        if( this.answers.filter( (data) => data.q === q).length > 0 ) {
          return this.answers.filter( (data) => data.q == q && data.a == a ).length;
        }
        return 0;
        
      }
    },
  
  }

</script>

<style>
  
  
</style>