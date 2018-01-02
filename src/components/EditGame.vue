<template>
  <div id="edit-game">
      <h3>Edit Game Information</h3>
      <div class="row">
      <form @submit.prevent="updateGame" class="col s12">
          <div class="row">
            <div class="label-container"><label>Game ID:</label></div>
            <div class="input-field col s12">
                <input disabled type="text" v-model="game_id">
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Game Date:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="game_date" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Game Time:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="game_time" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Location:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="location_name" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Sub Location:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="sublocation_name">
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Center Ref</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="center_ref" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Assistant Ref 1:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="ar1" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Assistant Ref 2:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="ar2" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Assistant Ref 3:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="ar3">
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Address 1:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="address1" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Address 2:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="address2">
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Game City:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="city" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Game State:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="state" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Zip Code:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="zip_code" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Game Total Minutes:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="game_minutes" required>
            </div>
          </div>
          <div class="row">
              <div class="label-container"><label>Age Division:</label></div>
            <div class="input-field col s12">
                <input type="text" v-model="age" required>
            </div>
          </div>
          <button type="submit" class="btn">Submit</button>
          <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
  </div>
  </div>


</template>
  <script>
    import db from './firebaseInit'
      export default {
          name: 'edit-game',
          data(){
              return {
                  //game_id: null,
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
          
          beforeRouteEnter(to,from, next){
                db.collection('games').where('game_id','==',to.params.game_id).get()
                .then(querySnapshop => {
                    querySnapshop.forEach(doc=>{
                        next(vm => {
                            vm.game_id = doc.data().game_id
                            vm.game_date = doc.data().game_date
                            vm.game_time = doc.data().game_time
                            vm.location_name = doc.data().location_name
                            vm.sublocation_name = doc.data().sublocation_name
                            vm.center_ref = doc.data().center_ref
                            vm.ar1 = doc.data().ar1
                            vm.ar2 = doc.data().ar2
                            vm.ar3 = doc.data().ar3
                            vm.address1 = doc.data().address1
                            vm.address2 = doc.data().address2
                            vm.city = doc.data().city
                            vm.state = doc.data().state
                            vm.zip_code = doc.data().zip_code
                            vm.game_minutes = doc.data().game_minutes
                            vm.age = doc.data().age
                            

                            
                            
                        })
                    })
                })
          },
      
      watch:{
          '$route':'fetchData'
      },
      methods:{
          fetchData(){
              db.collection('games').where('game_id','==',this.$route.params.game_id).get()
              .then(querySnapshop=>{
                  querySnapshop.forEach(doc=>{
                      this.game_id=doc.data().game_id
                      this.game_date = doc.data().game_date
                      this.game_time = doc.data().game_time
                      this.location_name = doc.data().location_name
                      this.sublocation_name = doc.data().sublocation_name
                        this.center_ref = doc.data().center_ref
                        this.ar1 = doc.data().ar1
                        this.ar2 = doc.data().ar2
                        this.ar3 = doc.data().ar3
                        this.address1 = doc.data().address1
                        this.address2 = doc.data().address2
                        this.city = doc.data().city
                        this.state = doc.data().state
                        this.zip_code = doc.data().zip_code
                        this.game_minutes = doc.data().game_minutes
                        this.age = doc.data().age

                  })
              })
          },
          updateGame(){
              db.collection('games').where('game_id','==',this.$route.params.game_id).get()
              .then(querySnapshop=>{
                  querySnapshop.forEach(doc=>{
                      doc.ref.update({
                          game_id: this.game_id,
                          game_date: this.game_date,
                          game_time: this.game_time,
                          location_name: this.location_name,
                          sublocation_name: this.sublocation_name,
                        center_ref: this.center_ref,
                        ar1: this.ar1,
                        ar2: this.ar2,
                        ar3: this.ar3,
                        address1: this.address1,
                        address2: this.address2,
                        city: this.city,
                        state: this.state,
                        zip_code: this.zip_code,
                        game_minutes: this.game_minutes,
                        age: this.age
                      })
                      .then(() =>{
                          this.$router.push({name: 'view-game',
                          params: {game_id: this.game_id}})
                      } )

                  })
              })
          },
        }
      }
  </script>
