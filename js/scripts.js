console.log("Hi, I’ m Vishakha, I'm a UX/UI designer from Austin, TX!");

$('a').smoothScroll();
$('#about-picture').hide();

$("#animation-btn").on("click", function () {
    $('#about-picture').show();
});

function menuToggle() {
    var x = document.getElementById('myNavtoggle');

    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}