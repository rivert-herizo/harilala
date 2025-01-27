document.querySelector(".hellobox").addEventListener("click", function(e) {
	document.querySelector(".hellobox").classList.toggle("darkbox");
	document.querySelector(".container").classList.toggle("darkcontainer");
	document.querySelector("p").classList.toggle("steveap");
	document.querySelector("header").classList.toggle("darkbody");
});