var userID = 1;
var uname = "ADMINPASS";
function loginID() {
    uname = prompt("Enter your username", "");
    document.getElementById("greeting").innerHTML = "Welcome " + username;
    if (uname=="ADMINPASS") {
        userID = 1;
        document.getElementById("greeting").innerHTML = "Welcome " + username + "#" + userID;
    }
}
//please do not change this...