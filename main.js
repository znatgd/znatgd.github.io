var userID = 1;
while (userID!=5) {
    userID++;
}
function loginID() {
    var username = prompt("Enter your username", "example");
    if (username==null) {
        alert("Please enter a username");
    }
    if (username==false) {
        alert("Exiting manager...");
    }
    if (username==true) {
        document.getElementByID('message').innerHTML = "Welcome " + username;
        if (username=="ADMINPASS") {
            userID = 1;
            document.getElementByID('message').innerHTML = "Welcome " + username + "#" + userID;
        }
    }
}
//please do not change this...