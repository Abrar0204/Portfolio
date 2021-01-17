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

	// navItems.forEach((navItem) => {
	// 	const tl = gsap.timeline({ paused: true });
	// 	tl
	// 		.to(navItem.getElementsByClassName('nav-icon'), {
	// 			opacity: 0,

	// 			ease: 'easeIn',
	// 			duration: 0.3
	// 		})
	// 		.to(navItem.getElementsByClassName('nav-name'), {
	// 			opacity: 1,

	// 			ease: 'easeIn',
	// 			duration: 0.3
	// 		});
	// 	navItem.addEventListener('mouseover', () => {
	// 		if (screen.width > 580) {
	// 			tl.play();
	// 		}
	// 	});

	// 	navItem.addEventListener('mouseleave', () => {
	// 		if (screen.width > 580) {
	// 			tl.reverse();
	// 		}
	// 	});
	// });

	const headerTimeline = gsap.timeline({});

	headerTimeline
		.fromTo(
			header.querySelector('.header-content-text-large'),
			{
				width: 0
			},
			{
				width: '7rem',
				ease: SteppedEase.config(3)
			}
		)
		.fromTo(
			header.querySelector('.typewriter'),
			0.5,
			{
				'border-right-color': '#1d182f'
			},
			{
				'border-right-color': '#1d182f23',
				repeat: -1,
				ease: SteppedEase.config(3)
			},
			0
		)
		.from(header.querySelector('.header-content-text-extra-large'), {
			y: 20,
			opacity: 0,
			duration: 0.7,
			ease: 'easeIn'
		})
		.from([ header.querySelector('.header-content-text-medium'), header.querySelector('.call-to-action-holder') ], {
			x: -20,
			opacity: 0,
			duration: 0.7,
			ease: 'easeIn'
		})
		.fromTo(
			header.querySelector('#Background'),
			{
				y: '-100',
				opacity: 0
			},
			{
				opacity: 1,
				y: 0
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
				opacity: 1
			}
		);

	// if (screen.width > 900) {
	// 	headerTimeline.fromTo(
	// 		navbar,
	// 		{
	// 			opacity: 0,
	// 			y: '100vh'
	// 		},
	// 		{
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: 1,
	// 			ease: 'power1.out'
	// 		}
	// 	);
	// }

	const aboutTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: about,
			start: 'top bottom-=25%',
			end: 'end center',
			toggleActions: 'play none none reverse'
			// markers: true
		}
	});
	aboutTimeline
		.from([ about.getElementsByClassName('about-content'), about.getElementsByClassName('about-header') ], {
			y: -50,
			x: -30,
			opacity: 0,
			duration: 1
		})
		.from(
			about.getElementsByClassName('about-image-box-background'),
			{
				y: -60,
				x: 40,
				opacity: 0,
				duration: 1
			},
			0
		)
		.from(
			about.getElementsByClassName('about-image-box-photo'),
			{
				y: 60,
				x: -40,
				opacity: 0,
				duration: 1
			},
			0
		);

	// const parralaxTl = gsap.timeline({
	// 	ease: 'none',
	// 	scrollTrigger: {
	// 		trigger: about,
	// 		start: 'top bottom',
	// 		scrub: true
	// 	}
	// });
	// parralaxTl.from(
	// 	'.about-image-box-photo',
	// 	{
	// 		y: '-30%',
	// 		duration: 2
	// 	},
	// 	0
	// );

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
		duration: 1
	});
}

window.addEventListener('load', () => {
	init();
});

window.addEventListener('resize', () => {
	if (screen.width < 580) {
		init();
	}
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
