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
                <input type="text" v-model="location" required>
      
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref1" required>
      
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref2" required>
      
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
                <input type="text" v-model="ref3" required>
      
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
                            vm.location = doc.data().location
                            vm.ref1 = doc.data().ref1
                            vm.ref2 = doc.data().ref2
                            vm.ref3 = doc.data().ref3
                            
                            
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
                      this.location = doc.data().location
                      this.ref1 = doc.data().ref1
                      this.ref2 = doc.data().ref2
                      this.ref3 = doc.data().ref3

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
                          location: this.location,
                          ref1: this.ref1,
                          ref2: this.ref2,
                          ref3: this.ref3
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
