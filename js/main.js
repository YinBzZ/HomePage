"use strict";
const Pages = document.querySelectorAll(".Pages");
let MyPage = 0;

(() => {
	const a = document.querySelectorAll(".nav-centent-butt"),
		b = document.querySelectorAll(".Page1-aside"),
		c = document.querySelectorAll(".Page1-aside-wrap"),
		d = document.querySelectorAll(".Page1-aside-X");

	for (let b = 0; b < a.length; b++) a[b].addEventListener("click", () => {
		Page_deal(b);
		MyPage = b;
	});
	for (let a = 0; a < c.length; a++) c[a].addEventListener("click", function() {
		b[a].classList.add("Page1-aside-click");
		c[a].classList.remove("hvr-underline-from-right");
		d[a].style.display = "inline-block";
	});
	for (let a = 0; a < d.length; a++) d[a].addEventListener("click", function() {
		b[a].classList.remove("Page1-aside-click");
		c[a].classList.add("hvr-underline-from-right");
		this.style.display = "none";
	})
})();
const Page_deal = a => {
	Pages[MyPage].style.display = "none", Pages[a].style.display = "flex"
};
