//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}