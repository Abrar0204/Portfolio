const headerSvg = document.querySelector('.header-svg');
const x = window.matchMedia('(max-width:490px)');
const t1 = new TimelineMax();
// const t2 = new TimelineMax();

// tl.fromTo(header, 1, { x: '-100%', opacity: 0 }, { x: '0px', opacity: 1, ease: Power2.easeOut });

t1.fromTo(headerSvg, 1, { x: '100%', opacity: 0 }, { x: '0px', opacity: 1, ease: Power2.easeOut });

const animateHeader = (x) => {
	const header = document.querySelector('.header-content');

	const t2 = new TimelineMax();
	if (x.matches) {
		t2.fromTo(header, 1, { y: '100%', opacity: 0 }, { y: '0px', opacity: 1, ease: Power2.easeOut });
	}
};
animateHeader(x);
