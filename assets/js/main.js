import AOS from 'aos';
import 'aos/dist/aos.css';
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

	document.getElementById('humburger').onClick = function () {
		openMenu();
	};


	function openMenu() {
		document.getElementById("menu").classList.toggle("show");
	}

	// scroll animation


})();
