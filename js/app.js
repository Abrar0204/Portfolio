gsap.registerPlugin(ScrollTrigger);

function toggleMenu() {
	const menu = document.querySelector('.navbar');

	menu.classList.toggle('open');
}

function init() {
	const navItems = [ ...document.querySelectorAll('.navbar-list-item-link') ];

	const header = document.getElementById('header');
	const navbar = document.getElementById('nav');
	const about = document.getElementById('about');
	const skills = document.getElementById('skills');
	const works = document.getElementById('work');
	const workItems = [ ...document.querySelectorAll('.work-item') ];

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
			end: 'end center',
			toggleActions: 'play none none reverse'
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
			end: 'end center',
			toggleActions: 'play none none reverse'
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
			start: 'center-=5% bottom-=10%',
			end: 'end center',
			toggleActions: 'play none none reverse'
			// markers: true
		}
	});

	workTimeline.from(workItems, {
		opacity: 0,
		y: 20,
		stagger: 0.4,
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

// skillItems.forEach((skillItem) => {
//     skillItem.addEventListener('mouseover', (event) => {
//         console.log(`clientX: ${event.clientX}`);
//         console.log(`clientY: ${event.clientY}`);

//         let offest = event.target.getBoundingClientRect();
//         console.log(`offset: ${offest.left} ${offest.top}`);
//         let xPos = event.clientX - offest.left;
//         let yPos = event.clientY - offest.top;
//         if (yPos > skillItem.clientHeight / 2) {
//             yPos *= -1;
//         }
//         if (xPos > skillItem.clientWidth / 2) {
//             xPos *= -1;
//         }
//         console.log(xPos);
//         console.log(yPos);
//         let box = skillItem;
//         gsap.to(box, 0.6, {
//             rotationY: yPos / 10,
//             rotationX: xPos / 10,
//             ease: Power4.easeOut
//         });
//     });
//     skillItem.addEventListener('mouseleave', (event) => {
//         gsap.to(skillItem, 0.6, {
//             rotationY: 0,
//             rotationX: 0,
//             ease: Power4.easeOut
//         });
//     });
// });
