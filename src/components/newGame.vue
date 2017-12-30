<template>
  <div id="new-employee">
      <h3>New Employee</h3>
      <div class="row"></div>
      <form @submit.prevent="saveGame" class="col s12">
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="game_id" required>
                <lable>Game ID:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="game_date" required>
                <lable>Game Date:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="game_time" required>
                <lable>Game Time: </lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="location" required>
                <lable>Location:</lable>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref1" required>
                <lable>Ref1:</lable>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref2" required>
                <lable>Ref2:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref3" required>
                <lable>Ref3:</lable>
            </div>
          </div>
          <button type="submit" class="btn">Submit</button>
          <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
  </div>
</template>
  <script>
    import db from './firebaseInit'
      export default {
          name: 'new-game',
          data(){
              return {
                game_id: null,
                game_date: null,
                game_time: null,
                location: null,
                ref1: null,
                ref2: null,
                ref3: null
              }
          },
          methods:{
              saveGame(){
                  db.collection('games').add({
                      game_id: this.game_id,
                      game_date: this.game_date,
                      game_time: this.game_time,
                      location: this.location,
                      ref1: this.ref1,
                      ref2: this.ref2,
                      ref3: this.ref3

                  })
                  .then(docRef => this.$router.push('/'))
                  .catch(error => console.log(error))
              }
          }
      }
  </script>
