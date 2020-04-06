
//'read more' button functionality
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementById("more");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 
        else {
            x.style.display = "none";
        }
}

/*hamburger menu downloaded from https://www.codeseek.co/SgiobairOg/responsive-multi-level-dropdown-vanilla-js-evzmdN */
window.addEventListener("load", function load(event) {
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    navInit();
}, false);

var navInit = function () {
    var
        nav = document.querySelector('nav#main'),
        menuToggleBtns = nav.querySelectorAll('.toggle'),
        menuToggle = function (e) {
            //Do not visit menuToggle link
            e.preventDefault();

            //force submenus closed
            if (e.target.hasAttribute('data-toggle-main')) {
                e.target.parentNode.querySelectorAll('ul li.open').forEach(function (tog) {
                    tog.classList.remove('open');
                });
            }

            //Toggle 'menuToggle' .focus class
            e.target.parentNode.classList.toggle('open');
        };


    //add touchstart and click event handlers
    menuToggleBtns.forEach(function (tog) {
        tog.addEventListener('click', menuToggle)
        tog.addEventListener('touchstart', menuToggle)
    });
};

//api stuff//

var ukIndex = document.getElementById('ukIndex');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

    //print index for today after
    var weatherForecast = document.createTextNode(apiResult.data[0].index);
    ukIndex.appendChild(weatherForecast);
    }
};

//https://api.carbonintensity.org.uk/intensity/date//
xmlhttp.open('GET', 'http://api.carbonintensity.org.uk/intensity/date', true);
xmlhttp.send();