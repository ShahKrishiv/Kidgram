//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCfKck2rVWRwOBwcNF3lZKsjRQlyrLoPzk",
      authDomain: "kidgram-7e4c9.firebaseapp.com",
      databaseURL: "https://kidgram-7e4c9-default-rtdb.firebaseio.com",
      projectId: "kidgram-7e4c9",
      storageBucket: "kidgram-7e4c9.appspot.com",
      messagingSenderId: "646830182845",
      appId: "1:646830182845:web:a2d61038a040b4342142d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function add_room() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "Kidgram_room.html";
}


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kidgram_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}