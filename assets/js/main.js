
(function () {
	document.getElementsByTagName('html')[0].scrollIntoView({ behavior: "smooth" });
	let header = document.getElementById('header');
	window.onscroll = () => {
		if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky')
		}
	}
})();
