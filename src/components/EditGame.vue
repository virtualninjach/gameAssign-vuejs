<template>
  <div id="edit-game">
      <h3>Edit Game Information</h3>
      <div class="row">
      <form @submit.prevent="updateGame" class="col s12">
          <div class="row">
            <div class="input-field col s12">
                <input disabled type="text" v-model="game_id" required>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="game_date" required>

            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="game_time" required>
  
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="location_name" required>
      
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ar1" required>
      
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ar2" required>
      
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ar3" required>
      
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
                  game_id: null,
                  game_date: null,
                  game_time: null,
                  location: null,
                  ref1: null,
                  ref2: null,
                  ref3: null
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
                            vm.center_ref = doc.data().center_ref
                            vm.ar1 = doc.data().ar1
                            vm.ar2 = doc.data().ar2
                            vm.ar3 = doc.data().ar3
                            
                            
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
                      this.ar1 = doc.data().ar1
                      this.ar2 = doc.data().ar2
                      this.ar3 = doc.data().ar3

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
                          ar1: this.ar1,
                          ar2: this.ar2,
                          ar3: this.ar3
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
