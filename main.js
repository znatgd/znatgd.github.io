var userID = 1;
while (userID!=5) {
    userID++;
}
function loginID() {
    var username = prompt("Enter your username", "example");
    if (username==null) {
        alert("Please enter a username");
        return 0;
    }
    if (username==false) {
        alert("Exiting manager...");
        return 0;
    }
    if (username==true) {
        document.getElementByID('message').innerHTML = "Welcome " + username;
        return 0;
        if (username=="ADMINPASS") {
            userID = 1;
            document.getElementByID("message").innerHTML = "Welcome " + username + "#" + userID;
            return 0;
        }
    }
}
//please do not change this...