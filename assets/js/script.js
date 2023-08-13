function autoHeight() {
  $winHeight = window.innerHeight;
  
  var autoHeight = document.querySelectorAll('.auto_height');

  if($winHeight > 520){
    // alert($winHeight)
    for (i = 0; i < autoHeight.length; i++) {
      autoHeight[i].style.minHeight = $winHeight - 1 + "px";
    }
  }
  else{
    for (i = 0; i < autoHeight.length; i++) {
      autoHeight[i].style.minHeight = "520px"
    }
  }
}
autoHeight();

// Window Resize
window.addEventListener('resize', function() {
  autoHeight;
}, true);

// Scoll animation
const targets = document.querySelectorAll('[data-observer]')
const options = {
  rootMargin: '0px',
  threshold: 1.0
}

const addClass = (el) => {
	if (!el.classList.contains('is-visible')) {
		el.classList.add('is-visible')
	}
}

const removeClass = (el) => {
	if (el.classList.contains('is-visible')) {
		el.classList.remove('is-visible')
	}
}

const doThings = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			addClass(entry.target)
		} else {
			removeClass(entry.target)
		}
  })
}

const observer = new IntersectionObserver(doThings, options)
const observer2 = new IntersectionObserver(doThings, { ...options, threshold: 0.4 })

targets.forEach(target => {
	observer.observe(target)
})


// Countdown
var countDownDate = new Date("Dec 3, 2023 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownDays").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownDays").innerHTML = "Happy Wedding!!!";
    document.querySelector('.countdow-days').remove();
  }
}, 1000);


