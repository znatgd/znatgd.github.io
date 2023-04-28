var userID = 1;
function loginID() {
    var username = prompt("Enter your username", "example");
    document.getElementByID("greeting").innerHTML = "Welcome " + username;
    if (username=="ADMINPASS") {
        userID = 1;
        document.getElementByID("greeting").innerHTML = "Welcome " + username + "#" + userID;
    }
}
//please do not change this...