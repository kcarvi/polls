<template>
  <div>

    <b-container>
      <b-row>
        <b-col cols="12" class="mb-2">
          <b-button-group size="lg">
            <b-button 
              v-for="(poll, i) in polls" 
              :class="{ active: i+1 == selectedPoll }" 
              @click="selectPoll(i+1)" >
              {{ i+1 }}
            </b-button>
          </b-button-group>
        </b-col>


        <b-col cols="12">
  
          <b-card align-self="center" v-for="(q, i) in polls" v-if="selectedPoll == i+1">
            <b-card-text>
              <p>{{ q.q }}</p>
              <b-list-group>
                <b-list-group-item v-for="(a, k) in q.a" @click="addAnswer(i+1, k+1)">
                  {{ a }}
                </b-list-group-item>
              </b-list-group>
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
      selectedPoll: 1,
      answers: []

    }),
    computed: {
      polls(){
        return this.$store.getters.loadedPolls;
      },
    },
    methods: {
      selectPoll(num){
        this.selectedPoll = num;
      },
      addAnswer(i, k){
        this.$store.dispatch('addAnswer', { q: i, a: k});
      }
    }
  }
</script>

<style>
  
  
</style>