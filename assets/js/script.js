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

const targetDate = new Date(2023, 11, 3); // December 3, 2023
function daysUntilTargetDate(currentDate, targetDate) {
  const timeDiff = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysRemaining;
}

let countdownDiv = document.getElementById("countdownDays");
let daysUntil = document.getElementById('days-until');

if (countdownDiv) {
  var x = setInterval(function() {
    const currentDate = new Date(); // Update the current date
    const daysRemaining = daysUntilTargetDate(currentDate, targetDate); // Update the days remaining

    if (daysUntil) {
      daysUntil.style.display = "block";
    }
    if (daysRemaining > 0) {
      countdownDiv.innerHTML = daysRemaining;
    } else {
      countdownDiv.innerHTML = "We are married 🎉!!!";
      document.querySelector('.sayido').remove();
      clearInterval(x); // Clear the interval after reaching December 3, 2023
    }
  }, 1000);
}

let allPages = document.getElementById("fullpage");
if(allPages) {
  new fullpage('#fullpage', {
    anchors: ['home', 'introduction', 'wedding-day', 'venue', 'rsvp', 'what-to-wear', 'gift', 'faq', 'countdown'],
    onLeave: function(origin, destination, direction, trigger) {
      if(origin.index == 1 && direction == 'up') {
        document.getElementById("prenup-video").play();
      }
    },
    autoScrolling: true,
    scrollHorizontally: false,
    lazyLoading: false,
    touchSensitivity: 10,
    navigation: false,
    responsiveWidth: 768
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


