function toggleLoginForm() {
    var signinForm = document.getElementById('signinForm');
    signinForm.style.display = signinForm.style.display === 'none' ? 'block' : 'none';
}
function toggleSignupForm() {
    var signupForm = document.getElementById('signupForm');
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}
var map;

function initMap() {
  // Initialize the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 20.5937, lng: 78.9629},
    zoom: 4.5
  });

// Define array of markers
var markers = [
  {lat: 27.5449 , lng: 93.8197, title: 'Ziro Valley, Arunachal Pradesh'},
  {lat: 14.5479, lng: 74.3188, title: 'Gokarna, Karnataka'},
  {lat: 32.5558, lng: 76.0656, title: 'Khajjiar, Himachal Pradesh'},
  {lat: 34.6494, lng: 74.7366, title: 'Gurez Valley, Jammu and Kashmir'},
  {lat: 27.0016, lng: 94.2243, title: 'Majuli, Assam'},
  {lat: 30.3462, lng: 79.0485, title: 'Chopta, Uttarakhand'}
];

// Loop through markers and add them to the map
for (var i = 0; i < markers.length; i++) {
  var marker = new google.maps.Marker({
    position: {lat: markers[i].lat, lng: markers[i].lng},
    map: map,
    title: markers[i].title
  });
}
}


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCruUbIlr0zppYIXHg-OP3C8upjdLyt2ic",
  authDomain: "travelo-da94c.firebaseapp.com",
  databaseURL: "https://travelo-da94c-default-rtdb.firebaseio.com",
  projectId: "travelo-da94c",
  storageBucket: "travelo-da94c.appspot.com",
  messagingSenderId: "529865348179",
  appId: "1:529865348179:web:bc3430fbf1e1c6dafe22a6"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const signUp = () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email,password)

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    console.write("You are signed in.")
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
