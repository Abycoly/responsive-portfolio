/*==================== PARALLAX ====================*/
window.addEventListener('scroll', function () {
	const parallax = this.document.querySelector('.parallax');
	let scrollPosition = this.window.pageYOffset;

	parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
})



/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
	skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
	let itemClass = this.parentNode.className

	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = 'skills__content skills__close'
	}
	if (itemClass === 'skills__content skills__close') {
		this.parentNode.className = 'skills__content skills__open'
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
	tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target)
		// console.log(target);

		tabContents.forEach(tabContent => {
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab => {
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
	modalBtns = document.querySelectorAll('.services__button'),
	modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal')
		})
	})
})



/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
	cssMode: true,
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
	const nav = document.getElementById('header')
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})



//==================== FORM CONTACT ME ====================--


window.addEventListener("DOMContentLoaded", function () {
	// get the form elements defined in your form HTML above

	var form = document.getElementById("my-form");
	// var button = document.getElementById("my-form-button");
	var status = document.getElementById("status");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		status.classList.add("success");
		status.innerHTML = "Votre message à bien été envoyé";
	}

	function error() {
		status.classList.add("error");
		status.innerHTML = "Oops! There was a problem.";
	}

	// handle the form submission event

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}


//==================== HOME SUBTITLE TYPING ====================--

var TxtRotate = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 300 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
};

//==================== SCROLL REVEAL ANIMATION ====================--
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: '2000',
	reset: true
})

// SCROLL HOME
sr.reveal('.home__title', {})
// sr.reveal('.home__subtitle', {})
sr.reveal('.home__img', { delay: 400 })
// sr.reveal('.button', { delay: 200 })
sr.reveal('.home__social-icon', { interval: 200 })

//SCROLL ABOUT
sr.reveal('.about__container', {delay:200})
sr.reveal('.about__img', {})
sr.reveal('.section__title', { delay: 200 })
sr.reveal('.about__description', { delay: 400 })
sr.reveal('.about__info', { delay: 200 })

//SCROLL SKILLS
sr.reveal('.skills__container', { delay: 200 })
// sr.reveal('.skills__data', { interval: 400 })
// sr.reveal('.skills__bar', { delay: 300 })

//SCROLL CONTACT
sr.reveal('.contact__form', { delay: 200 })
sr.reveal('.contact__information', { interval: 400 })
sr.reveal('.contact__infos', { delay: 400 })

//SCROLL PORTFOLIO
sr.reveal('.portfolio', { delay: 200 })


//==================== about words ANIMATION ====================--

$(document).ready(function () {

	var entries = [

		{ label: 'Curieuse', url: '#about' },
		{ label: 'Spontanée', url: '#about' },
		{ label: 'Fun', url: '#about' },
		{ label: 'Autonome', url: '#about' },
		{ label: `Esprit d'équipe`, url: '#about' },
		{ label: 'Logique', url: '#about' },
		{ label: 'écoute', url: '#about' },
		{ label: 'communication', url: '#about' },
		{ label: 'html', url: '#about' },
		{ label: 'css', url: '#about' },
		{ label: 'javascript', url: '#about' },
		{ label: 'reactjs', url: '#about' },
		{ label: 'Nodejs', url: '#about' },
		{ label: 'symphony', url: '#about' },
		{ label: 'typescript', url: '#about' },
		{ label: 'php', url: '#about' },
		{ label: 'Mysql', url: '#about' },
		{ label: 'agile', url: '#about' },
		{ label: 'challenge', url: '#about' },
		{ label: 'git', url: '#about' },


	];

	var settings = {

		entries: entries,
		width: 450,
		height: 400,
		radius: '75%',
		radiusMin: 75,
		bgDraw: true,
		bgColor: 'transparent',
		opacityOver: 1.00,
		opacityOut: 0.05,
		opacitySpeed: 6,
		fov: 800,
		speed: 0.5,
		fontFamily: 'Oswald, Arial, sans-serif',
		fontSize: '20',
		fontColor: 'var(--text-color)',
		fontWeight: 'normal',//bold
		fontStyle: 'normal',//italic 
		fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		fontToUpperCase: true,
		tooltipFontFamily: 'Oswald, Arial, sans-serif',
		tooltipFontSize: '11',
		tooltipFontColor: '#fff',
		tooltipFontWeight: 'normal',//bold
		tooltipFontStyle: 'normal',//italic 
		tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		tooltipFontToUpperCase: false,
		tooltipTextAnchor: 'middle',
		tooltipDiffX: 0,
		tooltipDiffY: 20

	};

	var svg3DTagCloud = new SVG3DTagCloud(document.getElementById('holder'), settings);
	// $('#holder').svg3DTagCloud(settings);

});