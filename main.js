function adduser(){
    var user1= document.getElementById("player1username").value;
    var user2= document.getElementById("player2username").value;
    localStorage.setItem("player1" , user1);
    localStorage.setItem("player2" , user2);
    window.location="page2.html";
}

