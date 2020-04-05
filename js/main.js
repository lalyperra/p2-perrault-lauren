

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal 
var img = document.getElementById("adImage");
var modalImg = document.getElementById("img01");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

//'read more' button functionality
document.querySelector('.show-more-button').addEventListener('click', function () {
    // If text is shown less, then show complete
    if (this.getAttribute('data-more') == 0) {
        this.setAttribute('data-more', 1);
        this.style.display = 'block';
        this.innerHTML = 'Read Less';

        this.previousSibling.style.display = 'none';
        this.previousSibling.previousSibling.style.display = 'inline';
    }
    // If text is shown complete, then show less
    else if (this.getAttribute('data-more') == 1) {
        this.setAttribute('data-more', 0);
        this.style.display = 'inline';
        this.innerHTML = 'Read More';

        this.previousSibling.style.display = 'inline';
        this.previousSibling.previousSibling.style.display = 'none';
    }
});

/*Downloaded from https://www.codeseek.co/SgiobairOg/responsive-multi-level-dropdown-vanilla-js-evzmdN */
window.addEventListener("load", function load(event) {
    window.removeEventListener("load", load, false); 
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


//API for charging stations
var chargeLocation = document.getElementById('chargeLocation');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //print weather description after main section text <p>
        var chargingStations = document.createTextNode(apiResult.AddressInfo[0].title);
        chargeLocation.appendChild(chargingStations);
    }
};

xmlhttp.open('GET', 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10', true);
xmlhttp.send();