gsap.registerPlugin(ScrollTrigger);

const submitForm = async () => {};

function toggleMenu() {
	const menu = document.querySelector('.navbar');
	menu.classList.toggle('open');
}
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function init() {
	const navItems = [ ...document.querySelectorAll('.navbar-list-item-link') ];

	const header = document.getElementById('header');
	const navbar = document.getElementById('nav');
	const about = document.getElementById('about');
	const skills = document.getElementById('skills');
	const works = document.getElementById('work');
	const workItems = [ ...document.querySelectorAll('.work-item') ];

	const form = document.getElementById('contactForm');
	const emailError = document.getElementById('email-input');

	emailError.addEventListener('keypress', (event) => {
		if (!validateEmail(emailError.value)) {
			if (!emailError.classList.contains('error')) {
				// console.log('added');
				emailError.classList.add('error');
			}
		} else {
			if (emailError.classList.contains('error')) {
				// console.log('removed');
				emailError.classList.remove('error');
			}
		}
	});

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const email = document.getElementById('email-input').value;
		const name = document.getElementById('name-input').value;
		// const subject = document.getElementById('subject-input').value;
		const message = document.getElementById('message-input').value;
		const successAlert = document.getElementById('alert-success');
		const errorAlert = document.getElementById('alert-error');

		const res = await fetch('https://abrar-portfolio-server.herokuapp.com/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email,
				name,
				// subject,
				message
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		});

		const data = await res.json();

		if (data.success) {
			const h3 = document.getElementById('alert-text');
			h3.textContent = data.message;
			gsap.to(successAlert, { bottom: 0 });
			setTimeout(() => {
				gsap.to(successAlert, { bottom: '-100vw' });
			}, 3000);
		} else {
			gsap.to(errorAlert, { bottom: 0 });
			setTimeout(() => {
				gsap.to(errorAlert, { bottom: '-100vw' });
			}, 3000);
		}
		return false;
	});

	const headerTimeline = gsap.timeline({});

	headerTimeline
		.fromTo(
			header.querySelector('.header-content-text-large'),
			{
				width: 0,
				opacity: 1
			},
			{
				width: '7rem',
				ease: SteppedEase.config(3),
				duration: 1
			}
		)
		.fromTo(
			header.querySelector('.typewriter'),
			{
				'border-right-color': '#1d182f'
			},
			{
				'border-right-color': '#1d182f23',
				repeat: -1,
				ease: SteppedEase.config(3)
			}
		)
		.fromTo(
			header.querySelector('.header-content-text-extra-large'),
			{
				y: -20,
				opacity: 0,
				duration: 0.7,
				ease: 'Bounce.easeIn'
			},
			{
				y: 0,
				opacity: 1
			}
		)
		.fromTo(
			[ header.querySelector('.header-content-text-medium'), header.querySelector('.call-to-action-holder') ],
			{
				x: -20,
				opacity: 0,
				duration: 0.7,
				ease: 'easeIn'
			},
			{
				opacity: 1,
				x: 0
			}
		)
		.fromTo(
			header.querySelector('#Background'),
			{
				y: '-100',
				opacity: 0
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.7
			}
		)
		.fromTo(
			header.querySelector('#Me'),
			{
				y: '100',
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.7
			},
			'-=0.7'
		)
		.fromTo(
			header.querySelector('.small-screen'),
			{
				opacity: 0,
				y: -40
			},
			{
				opacity: 1,
				y: 0
			},
			0
		);

	const aboutTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: about,
			start: 'top center+=20%',
			end: 'end center'
			// toggleActions: 'play none none reverse'
			// markers: true
		}
	});
	aboutTimeline
		.from(about.getElementsByClassName('about-header'), {
			y: -50,
			x: -30,
			opacity: 0,
			duration: 1,
			ease: 'power2.easeIn'
		})
		.from(
			about.querySelectorAll('.about-content-description'),
			{
				opacity: 0,
				x: -100,
				ease: 'power2.easeIn',
				stagger: 0.4
			},
			0
		)
		.from(
			about.getElementsByClassName('about-image-box-background'),
			{
				y: -60,
				x: 40,
				opacity: 0,
				duration: 1,
				ease: 'power2.easeIn'
			},
			0
		)
		.from(
			about.getElementsByClassName('about-image-box-photo'),
			{
				y: 60,
				x: -40,
				opacity: 0,
				duration: 1,
				ease: 'power2.easeIn'
			},
			0
		);

	const skillTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: skills,
			start: 'center-=5% bottom-=10%',
			end: 'end center'
			// toggleActions: 'play none none reverse'
			// markers: true
		}
	});

	skillTimeline.from(skills.getElementsByClassName('skills-list-item'), {
		opacity: 0,
		y: 10,
		stagger: 0.2,
		duration: 1,
		ease: 'power2.easeIn'
	});

	workTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: works,
			start: 'start+=20% bottom-=10%',
			end: 'end center'
			// toggleActions: 'play none none reverse'
		}
	});

	workTimeline.from(workItems, {
		opacity: 0,
		y: 20,
		stagger: 0.5,
		duration: 0.7,
		ease: 'power2.easeIn'
	});

	workItems.forEach((work) => {
		const workItemTimeline = gsap.timeline({ paused: true });

		workItemTimeline
			.fromTo(
				work.getElementsByClassName('work-item-backdrop'),
				{
					opacity: 0,
					ease: 'power2.easeIn'
				},
				{
					opacity: 1
				}
			)
			.from(
				work.getElementsByClassName('work-item-description'),
				{
					opacity: 0,
					y: -20,
					ease: 'power2.easeIn'
				},
				{
					opacity: 1,
					y: 0
				}
			);

		work.addEventListener('mouseover', () => workItemTimeline.play());
		work.addEventListener('mouseleave', () => workItemTimeline.reverse());
	});
}

window.addEventListener('load', () => {
	init();
});
