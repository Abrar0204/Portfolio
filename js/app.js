gsap.registerPlugin(ScrollTrigger);

function init() {
	const navItems = [ ...document.querySelectorAll('.navbar-list-item-link') ];

	navItems.forEach((navItem) => {
		const tl = gsap.timeline({ paused: true });
		tl
			.to(navItem.getElementsByClassName('nav-icon'), {
				opacity: 0,
				y: -20,
				ease: 'easeIn',
				duration: 0.2
			})
			.to(navItem.getElementsByClassName('nav-name'), {
				opacity: 1,
				y: -20,
				ease: 'easeIn',
				duration: 0.2
			});
		navItem.addEventListener('mouseover', () => {
			// console.log('hover');
			tl.play();
		});

		navItem.addEventListener('mouseleave', () => {
			tl.reverse();
		});
	});

	const header = document.getElementById('header');
	const navbar = document.getElementById('nav');
	const headerTimeline = gsap.timeline({});
	if (screen.width <= 900) {
		console.log(screen.width);
		headerTimeline.fromTo(
			navbar,
			{
				opacity: 0,
				y: '-100vh'
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power1.out'
			}
		);
	}
	headerTimeline
		.fromTo(
			header.getElementsByClassName('header-content-text'),
			{
				opacity: 0,
				x: '-100vw'
			},
			{
				duration: 1,
				opacity: 1,
				x: 0,
				stagger: 0.4
			}
		)
		.fromTo(
			header.getElementsByClassName('header-content-button-list'),
			{
				opacity: 0,
				x: '-50vw'
			},
			{
				opacity: 1,
				x: 0
			},
			'-=.5'
		)
		.fromTo(
			header.getElementsByClassName('header-svg'),
			{
				opacity: 0,
				x: '100vw'
			},
			{
				duration: 1,
				opacity: 1,
				x: 0,
				stagger: 0.4
			},
			'-=1'
		);

	if (screen.width > 900) {
		console.log(screen.width);
		headerTimeline.fromTo(
			navbar,
			{
				opacity: 0,
				y: '100vh'
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power1.out'
			}
		);
	}
	const about = document.getElementById('about');
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

	const skills = document.getElementById('skills');

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
