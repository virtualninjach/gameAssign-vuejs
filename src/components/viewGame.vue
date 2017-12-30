<template>
  <div id="view-game">
      <ul class="collection with-header">
          <li class="collection-header">
              <h4>{{location}}</h4>
          </li>
          <li class="collection-item">Game ID: {{game_id}}</li>
          <li class="collection-item">Game Date: {{game_date}}</li>
          <li class="collection-item">Game Time: {{game_time}}</li>
          <li class="collection-item">Location: {{location}}</li>
          <li class="collection-item">ref1:  {{ref1}}</li>
          <li class="collection-item">ref2:  {{ref2}}</li>
          <li class="collection-item">ref3:  {{ref3}}</li>
      </ul>
      <router-link to="/" class="btn grey">Back</router-link>
      <button @click="deleteGame" class="btn red">Delete </button>
      <div class="fixed-action-btn">
        <router-link v-bind:to="{name: 'edit-game', params: {game_id: game_id}}" class="btn-floating btn-large red">
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
                            vm.game_date = doc.data().game_date
                            vm.game_id = doc.data().game_id
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
          deleteGame(){
              if (confirm('Are you sure?')){
              db.collection('employees').where('game_id','==',this.$route.params.game_id).get()
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
