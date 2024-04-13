// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA66hPOO4p5eK-sO0JsJngt1ddzm1MEQhU",
    authDomain: "letschatwebapp-e2208.firebaseapp.com",
    databaseURL: "https://letschatwebapp-e2208-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-e2208",
    storageBucket: "letschatwebapp-e2208.appspot.com",
    messagingSenderId: "739790230686",
    appId: "1:739790230686:web:1151cf73a2962b5d95978f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();