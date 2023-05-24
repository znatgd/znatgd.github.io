var userID = parseInt(50);
function login() {
    var uname = window.prompt("Enter your username:", "");
    document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname;
    if (uname=="MKMusic") {
        userID = 0001;
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname + "#" + userID;
    }
    if (uname=="adminpass" || uname=="ADMINPASS") {
        userID = 0002
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname + "#" + userID;
    }   
    if (uname=="player" || uname=="PLAYER") {
        userID = 0003
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname + "#" + userID;
    }
    if (uname=="danUSER") {
        userID = 0004
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname + "#" + userID;
    }
    if (uname=="Juniper" || uname=="juniper" || uname=="JUNIPER" || uname=="Juni") {
        userID = 0005
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname + "#" + userID;
    }
    if (uname=="GDColon" || uname=="Colon" || uname=="COLON" || uname=="gdcolon" || uname=="GDCOLON" || uname=="colon" || uname=="Craig" || uname=="CRAIG") {
        userID = 0006
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "Welcome to ZnatGD's website, " + uname + "#" + userID;
    }
    if (uname=="addOne") {
        userID++;
        console.log("#" + userID);
        document.getElementById('greeting').innerHTML = "You are " + uname + "#" + userID;
    }
}
