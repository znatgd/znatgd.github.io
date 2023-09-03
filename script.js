var getWidth, getHeight;
while (true) {
    getWidth = window.innerWidth;
    getHeight = window.innerHeight;
    if (getWidth < getHeight) {
        document.getElementsByTagName("body").style.fontSize = "x-large";
        document.getElementsByClassName("headCont").style.fontSize = "x-large";
    }
}