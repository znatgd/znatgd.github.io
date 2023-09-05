var getWidth = 0, getHeight = 0;
document.getElementsByTagName("body").style.fontSize = "medium";
document.getElementsByClassName("headCont").style.fontSize = "medium";

function getDeviceType() {
    getWidth = window.innerWidth;
    getHeight = window.innerHeight;
    if (getWidth < getHeight) {
        document.getElementsByTagName("body").style.fontSize = "x-large";
        document.getElementsByClassName("headCont").style.fontSize = "x-large";
    } else {
        document.getElementsByTagName("body").style.fontSize = "medium";
        document.getElementsByClassName("headCont").style.fontSize = "medium";
    }
}