const terms = document.querySelector('.terms-and-conditions');
const btn = document.querySelector('.accept');
// terms.addEventListener('scroll', event => {
// 	console.log(event);
// });

function obCallback(payload) {
	if (payload[0].intersectionRatio === 1) {
		btn.disabled = false;
		// stop observing
		ob.unobserve(terms.lastElementChild);
	}
}

const ob = new IntersectionObserver(obCallback, {
	root: terms,
	threshold: 1,
});
ob.observe(terms.lastElementChild);
