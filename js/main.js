// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal 
var img = document.getElementById("adImg");
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