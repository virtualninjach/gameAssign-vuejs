<template>
  <div id="new-game">
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
                <input type="text" v-model="sublocation_name" required>
                <lable>Sub Location:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref1" required>
                <lable>Center Ref:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ar1" required>
                <lable>Assistant Ref 1:</lable>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ar2" required>
                <lable>Assistant Ref 2:</lable>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ar3" required>
                <lable>Assistant Ref 3:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="address1" required>
                <lable>Game Address 1:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref1" required>
                <lable>Game Address 2:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="city" required>
                <lable>Game City:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="state" required>
                <lable>Game State:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="zip_code" required>
                <lable>Zip Code:</lable>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="game_minutes" required>
                <lable>Game Minutes Total:</lable>
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
                location_name: null,
                sublocation_name: null,
                center_ref: null,
                ar1: null,
                ar2: null,
                ar3: null,
                address1: null,
                address2: null,
                age: null,
                city: null,
                game_minutes: null,
                state: null,
                zip_code: null
              }
          },
          methods:{
              saveGame(){
                  db.collection('games').add({
                      game_id: this.game_id,
                      game_date: this.game_date,
                      game_time: this.game_time,
                      location_name: this.location,
                      sublocation_name: this.sublocation_name,
                      center_ref: this.center_ref,
                      ar1: this.ref1,
                      ar2: this.ref2,
                      ar3: this.ref3,
                      address1: this.address1,
                      address2: this.address2,
                      age: this.age,
                      city: this.city,
                      game_minutes: this.game_minutes,
                      state: this.state,
                      zip_code: this.zip_code

                  })
                  .then(docRef => this.$router.push('/'))
                  .catch(error => console.log(error))
              }
          }
      }
  </script>
