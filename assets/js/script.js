function autoHeight() {
  $winHeight = window.innerHeight;
  
  var autoHeight = document.querySelectorAll('.auto_height');

  if($winHeight > 520){
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
function daysUntilDecember3(dateString) {
  const targetDate = new Date(dateString);
  const december3 = new Date(targetDate.getFullYear(), 11, 3); // Months are zero-based, so 11 represents December

  const timeDifference = december3 - targetDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const currentDate = new Date(); // Get the current date
const daysRemaining = daysUntilDecember3(currentDate);
let countdownDiv = document.getElementById("countdownDays");
let daysUntil = document.getElementById('days-until');

if(countdownDiv) {
  var x = setInterval(function() {
    if(daysUntil) {
      daysUntil.style.display = "block";
    }
    countdownDiv.innerHTML = daysRemaining;
    if(daysRemaining <= 0) {
      countdownDiv.innerHTML = "Happy Wedding!!!";
    }
  }, 1000);
}


let allPages = document.getElementById("fullpage");
if(allPages) {
  new fullpage('#fullpage', {
    anchors: ['hero', 'introduction', 'wedding-day', 'venue', 'rsvp', 'what-to-wear', 'gift', 'faq', 'countdown'],
  });
  
}


const accordion = document.querySelectorAll('.accordion-item');

accordion.forEach(item => {
  const header = item.querySelector('.accordion-head');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const toggleMenu = document.querySelector('.toggle-menu');

if(toggleMenu) {
  toggleMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.toggle('active-menu')
  }) 
}

const navLink = document.querySelectorAll('nav a');

navLink.forEach((e) => {
  e.addEventListener('click', () => {
    this.document.querySelector('body').classList.remove('active-menu')
  })
})

