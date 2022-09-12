
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



	function openMenu() {
		document.getElementById("menu").classList.toggle("show");
		document.getElementById("humburger").classList.toggle("opened");
	}

	document.getElementById("humburger").addEventListener('click', openMenu);

	// scroll animation
})();
