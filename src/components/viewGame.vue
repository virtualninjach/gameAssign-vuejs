<template>
  <div id="view-game">
      <ul class="collection with-header">
          <li class="collection-header">
              <h4>{{location_name}} - {{sublocation_name}}</h4>
          </li>
          <li class="collection-item">Game ID: {{game_id}}</li>
          <li class="collection-item">Game Date: {{game_date}}</li>
          <li class="collection-item">Game Time: {{game_time}}</li>
          <li class="collection-item">Location: {{location_name}}</li>
          <li class="collection-item">Sub-Location: {{sublocation_name}}</li>
          <li class="collection-item">Center Ref: {{center_ref}}</li>
          <li class="collection-item">Assistant Ref 1: {{ar1}}</li>
          <li class="collection-item">Assistant Ref 2:{{ar2}}</li>
          <li class="collection-item">Assistant Ref 3:{{ar3}}</li>
          <li class="collection-item">Game Address1: {{address1}}</li>
          <li class="collection-item">Game Address2: {{address2}}</li>
          <li class="collection-item">Game City: {{city}}</li>
          <li class="collection-item">Game State: {{state}}</li>
          <li class="collection-item">Game Zip Code: {{zip_code}}</li>
          <li class="collection-item">Age Division: {{age}}</li>
          <li class="collection-item">Game In Minutes Total: {{game_minutes}}</li>
          
      </ul>
      <router-link to="/" class="btn grey">Back</router-link>
      <button @click="deleteGame" class="btn red">Delete </button>
      <div class="fixed-action-btn">
        <router-link v-bind:to="{name: 'edit-game', 
            params: {game_id: game_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
        </router-link>
      </div>
  </div>
</template>
  <script>
    import db from './firebaseInit'
      export default {
          name: 'view-game',
          data(){
              return {
                    game_id: null,
                    game_date: null,
                    game_time: null,
                    location_name: null,
                    sublocation_name: null,
                    address1: null,
                    address2: null,
                    ar1: null,
                    ar2: null,
                    ar3: null,
                    center_ref: null,
                    city: null,
                    state: null,
                    zip_code: null,
                    age: null,
                    game_minutes: null
              }
          },
          beforeRouteEnter(to,from, next){
                db.collection('games').where('game_id','==',to.params.game_id).get()
                .then(querySnapshop => {
                    querySnapshop.forEach(doc=>{
                        next(vm => {
                            vm.address1 = doc.data().address1
                            vm.address2 = doc.data().address2
                            vm.age = doc.data().age
                            vm.ar1 = doc.data().ar1
                            vm.ar2 = doc.data().ar2
                            vm.ar3 = doc.data().ar3
                            vm.center_ref = doc.data().center_ref
                            vm.city = doc.data().city
                            vm.zip_code = doc.data().zip_code
                            vm.game_date = doc.data().game_date
                            vm.game_id = doc.data().game_id
                            vm.game_time = doc.data().game_time
                            vm.location_name = doc.data().location_name
                            vm.sublocation_name = doc.data().sublocation_name
                            vm.state = doc.data().state
                            vm.game_minutes = doc.data().game_minutes
                            
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
                        this.game_id    =doc.data().game_id
                        this.game_date  = doc.data().game_date
                        this.game_time  = doc.data().game_time
                        this.location_name      = doc.data().location_name
                        this.sublocation_name   = doc.data().sublocation_name
                        this.center_ref = doc.data().center_ref
                        this.ar1        = doc.data().ar1
                        this.ar2        = doc.data().ar2
                        this.ar3        = doc.data().ar3
                        this.address1   =  doc.data().address1
                        this.address2   = doc.data().address2
                        this.age        = doc.data().age
                        this.city       = doc.data().city
                        this.game_minutes   = doc.data().game_minutes
                        this.state          = doc.data().state
                        this.zip_code       = doc.data().zip_code
                  })
              })
          },
          deleteGame(){
              if (confirm('Are you sure?')){
              db.collection('games').where('game_id','==',this.$route.params.game_id).get()
              .then(querySnapshop=>{
                  querySnapshop.forEach(doc=>{
                     doc.ref.delete()
                     this.router.push('/')

                  })    
              })
            }
        }
    }
}
        
      
      
  </script>
