window.onload = function() {
    var welcome = document.getElementById("welcome");
    welcome.style.display = "block";
    setTimeout(function() {
        welcome.style.display = "none";
    }, 3000);
};