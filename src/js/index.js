const bars = document.querySelector('.bars')
const nav = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const aboutus = document.querySelector('.aboutus')
const allSections = document.querySelectorAll('.section')
const allNavItems = document.querySelectorAll('.link')
const allNavMobileItems = document.querySelectorAll('.nav-mobile-link')
const navDesktop = document.querySelector('.nav-desktop')
const offersBox = document.querySelector('.offers__box')
const offersCards = document.querySelectorAll('.offers__card')
const offersBtn = document.querySelectorAll('.offers__card-btn')

const showNav = () => {
    nav.classList.toggle('navActive')

	allNavMobileItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('navActive')
		})
	})


	animationNav()
    
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
const animationNav = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('navItemsAnimation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})

	

}

const whiteBars = () => {
	const currentSection = window.scrollY
	allSections.forEach(section => {
		if (section.classList.contains('black-section') && section.offsetTop <= currentSection + 60) {
			bars.classList.add('white-bars-color')
			
			
		} else if (!section.classList.contains('black-section') && section.offsetTop <= currentSection + 60) {
			bars.classList.remove('white-bars-color')
			
			
		}

	})
}


const Offers = e => {
	const btn = e.querySelector('.offers__card-btn')
	offersCards.forEach(card => {
		card.classList.remove('offers__card--special')
	})
	offersBtn.forEach(btn => {
		btn.classList.remove('offers__card-btn--special')
	})

	btn.classList.add('offers__card-btn--special')
	e.classList.add('offers__card--special')
}

offersCards.forEach(card => {
	card.addEventListener('mouseenter', () => Offers(card))
	card.addEventListener('mouseleave', () => Offers(offersCards[1]))
})

handleCurrentYear()
window.addEventListener('scroll', whiteBars)
bars.addEventListener('click', showNav)
