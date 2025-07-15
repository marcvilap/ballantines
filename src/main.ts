import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const smoother = ScrollSmoother.create({ smooth: 1.5, normalizeScroll: true })

gsap.utils.toArray<HTMLAnchorElement>('.gsap-anchor').forEach(element => {
	element.addEventListener('click', event => {
		event.preventDefault()
		const targetId = element.getAttribute('href')
		if (targetId) {
			const targetElement = document.querySelector(targetId)
			if (targetElement) {
				smoother.scrollTo(targetElement, true, 'top top')
			}
		}
	})
})

gsap.utils.toArray<HTMLElement>('.gsap-banner').forEach(element => {
	gsap.fromTo(
		element,
		{
			y: '-8rem',
		},
		{
			y: '8rem',
			ease: 'none',
			scrollTrigger: {
				trigger: element.parentElement,
				scrub: true,
			},
		},
	)
})

gsap.utils.toArray<HTMLElement>('.gsap-image').forEach(element => {
	gsap.fromTo(
		element,
		{
			y: '-4rem',
			scale: 1,
		},
		{
			y: '4rem',
			scale: 1.25,
			ease: 'none',
			scrollTrigger: {
				trigger: element.parentElement,
				scrub: true,
			},
		},
	)
})

gsap.utils.toArray<HTMLElement>('.gsap-title').forEach(element => {
	const { lines } = new SplitType(element, { types: 'lines' })
	gsap.from(lines, {
		yPercent: 125,
		opacity: 0,
		duration: 0.8,
		stagger: 0.1,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: element.parentElement,
			start: 'top 80%',
			toggleActions: 'play none none reverse',
		},
	})
})

gsap.utils.toArray<HTMLElement>('.gsap-text').forEach(element => {
	const targets = element.querySelectorAll('h3,p')
	gsap.from(targets, {
		y: 128,
		opacity: 0,
		duration: 0.8,
		stagger: 0.1,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: element,
			start: 'top 80%',
			toggleActions: 'play none none reverse',
		},
	})
})
