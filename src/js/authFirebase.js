// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgORwavC38jYXCjWgKhi5u9BC6jy52elw",
    authDomain: "flicktix-221f1.firebaseapp.com",
    projectId: "flicktix-221f1",
    storageBucket: "flicktix-221f1.appspot.com",
    messagingSenderId: "689067879442",
    appId: "1:689067879442:web:8040951c8a5b32ba8d7ccb",
    measurementId: "G-LKYY1XKJDW"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("You are Signed Up")
            window.location.href = "membersShowing.html"
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            alert("You are Signed In")
            window.location.href = "membersShowing.html"
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}