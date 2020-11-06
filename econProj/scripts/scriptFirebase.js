// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBoheR8LoqJEuCpVIBb1VuHr0mTkBDlIO4",
    authDomain: "project-4fc55.firebaseapp.com",
    databaseURL: "https://project-4fc55.firebaseio.com",
    projectId: "project-4fc55",
    storageBucket: "project-4fc55.appspot.com",
    messagingSenderId: "802115154004",
    appId: "1:802115154004:web:8bbafb911cb6a111667dc1",
    measurementId: "G-WDV69T4Z1S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function logInWithGoogle(){

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user)
        // ...


        

        console.log("logado")
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        });

        
        
}


function logOut(){
    firebase.auth().signOut().then(()=>{
        console.log("deslogado")

    }).catch((error) => {
        console.log(error)
    })

    
}

firebase.auth().onAuthStateChanged(user => {
    if(user){
        console.log(user, "logado")
        
        var img = document.getElementById('imgUser')

        img.src = user.photoURL;
        img.style.display = "inline-block"
        img.style.width = "55px";
        img.style.height = "55px";
        img.style.borderRadius = "50%";
        img.style.marginTop = "70px"
        img.style.marginLeft = "35px"
        img.style.marginRight = "10px"
        img.style.transform = "translateY(25%)"


        let pUser = document.getElementById('pUser');

        pUser.style.fontStyle = "italic";
        pUser.style.color = "#1CFEBA"
        pUser.style.display = "inline-block"
        pUser.style.fontSize = "clamp(16px, 4vw, 22px)"

        pUser.innerHTML = user.displayName;

        document.querySelectorAll('[data-log = "logIn"]').forEach((e) =>{
            e.classList.add('animateLog')
        })

        document.querySelectorAll('[data-log = "logOut"]').forEach((e) =>{
            e.classList.remove('animateLog')
        })


        
    }else{
        console.log("ninguém logado")

        var img = document.getElementById('imgUser');
        img.style.display = "none"

        let pUser = document.getElementById('pUser');

        pUser.style.display = "none"

        document.querySelectorAll('[data-log = "logIn"]').forEach((e) =>{
            e.classList.remove('animateLog')
        })

        document.querySelectorAll('[data-log = "logOut"]').forEach((e) =>{
            e.classList.add('animateLog')
        })
    }
})


