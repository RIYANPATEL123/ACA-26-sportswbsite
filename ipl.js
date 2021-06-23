var firebaseConfig = {
    apiKey: "AIzaSyCB4EJUIMIxQaOUH0yfC3bx5uKY1VTG7Q8",
    authDomain: "ipl-website-ade79.firebaseapp.com",
    databaseURL: "https://ipl-website-ade79-default-rtdb.firebaseio.com",
    projectId: "ipl-website-ade79",
    storageBucket: "ipl-website-ade79.appspot.com",
    messagingSenderId: "689602977727",
    appId: "1:689602977727:web:8ebfc471d1f53e82d50b0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('datavalue').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var year =getInputVal('year');
    readResults(year);
}
    function getInputVal(id){
    return document.getElementById(id).value;
}

function readResults(year){
    
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
     var ranks = data.val(); 
     var finalranks=ranks.toString().split(',');
     document.getElementById("result1").innerHTML ="<br > 1. " +finalranks[1];
     document.getElementById("result2").innerHTML ="<br > 2. " +finalranks[2];
     document.getElementById("result3").innerHTML ="<br > 3. " +finalranks[3];
     document.getElementById("result4").innerHTML ="<br > 4. " +finalranks[4];
     document.getElementById("result5").innerHTML ="<br > 5. " +finalranks[5];
     document.getElementById("result6").innerHTML ="<br > 6. " +finalranks[6];
     document.getElementById("result7").innerHTML ="<br > 7. " +finalranks[7];
     document.getElementById("result8").innerHTML ="<br > 8. " +finalranks[8];

    
})
}