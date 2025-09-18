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

setFlipCardHeight();

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function () {
    card.classList.toggle('flipped');
    setTimeout(setFlipCardHeight, 400);
  });
});

function setFlipCardHeight() {
  document.querySelectorAll('.flip-card-inner').forEach(card => {
    const front = card.querySelector('.flip-card-front');
    console.log(front.scrollHeight);
    const back = card.querySelector('.flip-card-back');
    console.log(front.scrollHeight);
    const parent = card.closest('.flip-card');
    if (parent.classList.contains('flipped')) {
      card.style.height = back.scrollHeight + 'px';
    } else {
      card.style.height = front.scrollHeight + 'px';
    }
  });
}