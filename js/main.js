const mySiema = new Siema({
    perPage: {
        0: 1,
        700: 2,
        1240: 3,
        1700: 4,
        2300: 5,
    },
    duration: 600,
    loop: true,
});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());


var slideIndex = 1;
var slideIndex2 = 2;
showDivs (slideIndex);
showDivs2 (slideIndex2);

function plusDivs(n) {
    showDivs (slideIndex += n);
    showDivs2 (slideIndex2 += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    x[slideIndex-1].style.display = "block";
}
function showDivs2(n) {
    var i;
    var y = document.getElementsByClassName("mySlides2");
    
    if (n > y.length) {slideIndex2 = 1}
    if (n <1) {slideIndex2 = y.length} ;
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }

    y[slideIndex2-1].style.display = "block";
}
