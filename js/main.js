
//'read more' button functionality
document.getElementById("myBtn").addEventListener("click", myFunction);
//document.getElementById("myBtn").onclick = function () { myFunction() };

function myFunction() {
    var x = document.getElementById("more");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 
        else {
            x.style.display = "none";
        }
}

//hamburger menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');
var laptopSize = window.matchMedia("(min-width:998px)");

    if (window.matchMedia("(min-width: 998px)").matches) {
    hamburgerMenu.classList.add('show');
    hamburgerMenu.classList.remove('hidden');
    
    else if(window.matchMedia("(max-width: 997px)").matches) {
    hamburgerMenu.classList.add('hidden');
}

function toggleMenu() {
    hamburgerMenu.classList.toggle('show');
}

hamburgerIcon.addEventListener('click', toggleMenu);


//api stuff//
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //print weather description after main section text <p>
        var chargingStations = document.createTextNode(apiResult.AddressInfo[0].title);
        chargeLocation.appendChild(chargingStations);
        //API for charging stations
        var chargeLocation = document.getElementById('chargeLocation');
    }
};

xmlhttp.open('GET', 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10', true);
xmlhttp.send();