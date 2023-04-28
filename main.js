var userID = 1;
while (userID!=5) {
    userID++;
}
function loginID() {
    var username = prompt("Enter your username", "example");
    document.getElementByID('message').innerHTML = "Welcome " + username;
    if (username=="ADMINPASS") {
        userID = 1;
        document.getElementByID("message").innerHTML = "Welcome " + username + "#" + userID;
    }
}
//please do not change this...