<template>
  <div id="dashboard">
      <h4>Games</h4>
              <table class="collection with-header">
                  <tr class="collection-header">
                        <th>ID</th>
                        <th>Game ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Sub Location</th>
                        <th>Center</th>
                        <th>AR 1</th>
                        <th>AR 2</th>
                        <th>AR 3</th>
                        <th></th>
                  </tr>
                  <tr v-for="game in games" v-bind:key="game.id" class="collection-item">
                        <td>{{game.id}}</td>
                        <td><div class="chip">{{game.game_id}}</div></td>
                        <td>{{game.game_date}}</td>
                        <td>{{game.game_time}}</td>
                        <td>{{game.location_name}}</td>
                        <td>{{game.sublocation_name}}</td>
                        <td>{{game.center_ref}}</td>
                        <td>{{game.ar1}}</td>
                        <td>{{game.ar2}}</td>
                        <td>{{game.ar3}}</td>
                        <td>
                            <router-link class="secondary-content" 
                                v-bind:to="{name:'view-game', 
                                params: {game_id: game.game_id}}">
                                <i class="fa fa-eye"></i>
                            </router-link>
                        </td>
                    </tr>
                </table>
            
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
                            'location_name':doc.data().location_name,
                            'sublocation_name':doc.data().sublocation_name,
                            'center_ref':doc.data().center_ref,
                            'ar1':doc.data().ar1,
                            'ar2':doc.data().ar2,
                            'ar3':doc.data().ar3

                        }
                        this.games.push(data)
                    })
                })

          }


      }
      function initApp() {
      var firebase = require('firebase');
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;

        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
          // [END_EXCLUDE]
        } 
        else 
        {
          // User is signed out.
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]

      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }

    window.onload = function() {
      initApp();
      if (!user){
          window.location = "http://localhost:8080/loginpage";
          
      }
    };
  </script>

