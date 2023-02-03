const sections = document.querySelectorAll('main > section')
const links = document.querySelectorAll('#navbar a')

let direction = 'up'
let prevYPosition = 0

const setScrollDirection = () => {
	direction = document.documentElement.scrollTop > prevYPosition
		? 'down'
		: 'up'

	prevYPosition = document.documentElement.scrollTop
}

const options = {
	root: null,
	threshold: 0,
	rootMargin: '0px'
}

const getTargetSection = (entry) => {
	const index = sections.findIndex((section) => section === entry.target)

	if (index >= sections.length - 1) {
		return entry.target
	} else {
		return sections[index + 1]
	}
}

const updateLink = (target) => {
	console.log('updateLink', target)
}

const onIntersect = (entries) => {
	entries.forEach((entry) => {
		if (document.documentElement > prevYPosition) {
			direction = 'down'
		} else {
			direction = 'up'
		}

		prevYPosition = document.documentElement.scrollTop

		const target = direction === 'down' ? getTargetSection(entry) : entry.target

		if (shouldUpdate(entry)) {
			updateLink(target)
		}
	})
}

const shouldUpdate = (entry) => {
	if (direction === 'down' && !entry.isIntersecting) {
		return true
	}

	if (direction === 'up' && entry.isIntersecting) {
		return true
	}

	return false
}

const observer = new IntersectionObserver(onIntersect, options)

sections.forEach(section => {
	observer.observe(section)
})

const menuCheckbox = document.getElementById('menu')
const mediaQuery = window.matchMedia('(min-width: 1024px)') // Breakpoint lg

const $navbar = document.querySelector('#navbar')
$navbar.querySelectorAll('a').forEach(anchor => {
	anchor.addEventListener('click', (_event) => {
		menuCheckbox.checked = false
		if (document.body.style.overflowY === 'hidden') {
			hideOverFlow(false)
		}
	})
})

/** @param {boolean} value */
function hideOverFlow (value) {
	if (value) {
		window.scrollTo(0, 0)
		document.body.style.overflowY = 'hidden'
	} else {
		document.body.style.overflowY = 'auto'
	}
}

menuCheckbox.addEventListener('change', (e) =>
	e.target.checked
		?	hideOverFlow(true)
		: hideOverFlow(false)
)

mediaQuery.addEventListener('change', (e) => {
	if (e.matches) {
		hideOverFlow(false)
		menuCheckbox.checked = false
	}
})