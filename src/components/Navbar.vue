<template>
  <nav>
    <div class="nav-wrapper green">
    <div class="container">
      <router-link to="/" class="brand-logo col s5 left-align">Game Assigner Console</router-link>
      <div class="user-status right align">Uknown</div>
    </div>
    </div>
  </nav>
</template>
<script>
export default {
  
}

function initNavBar() {
    var firebase = import('firebase');
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
       
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          
          document.getElementById('user-status').textContent = 'Signed in';
          
          }
        if(currentUser)
        {
          document.getElementById('user-status'.textContent = user.email)
        }
        } );
        

    window.onload = function() {
      initNavBar();
    };
}
</script>

  
