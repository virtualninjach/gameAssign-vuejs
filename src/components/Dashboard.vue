<template>
  <div id="dashboard">
      <ul class="collection with-header">
          <li class="collection-header">
              <h4>Games</h4>
            </li>
              <li v-for="game in games" v-bind:key="game.id" class="collection-item">
              <div class="chip">{{game.location}}</div>
              {{game.game_id}}:{{game.game_date}}:{{game.game_time}}:{{game.location}}:{{game.ref1}}:{{game.ref2}}:{{game.ref3}}
              
              <router-link class="secondary-content" v-bind:to="{name:'view-game', params: {game_id: game.game_id}}">
                <i class="fa fa-eye"></i>
              </router-link>
             
          </li>
      </ul>
      <div class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
        </router-link>
      </div>
  </div>
</template>
  <script>
    import db from './firebaseInit'
      export default {
          name: 'dashboard',
          data(){
              return {
                  games:[]

              }
          },
          created(){
              db.collection('games').orderBy('game_id').get().then
                (querySnapshopt => {
                    querySnapshopt.forEach(doc=>{
                        console.log(doc.data())
                        const data={
                            'id':doc.id,
                            'game_id':doc.data().game_id,
                            'game_date':doc.data().game_date,
                            'game_time':doc.data().game_time,
                            'location':doc.data().location,
                            'ref1':doc.data().ref1,
                            'ref2':doc.data().ref2,
                            'ref3':doc.data().ref3

                        }
                        this.games.push(data)
                    })
                })

          }


      }
  </script>

