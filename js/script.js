"use strict"
var formOverlay = document.querySelector(".write-us");
var buttonWriteUs = document.querySelector(".button-write-us"); 

buttonWriteUs.addEventListener("click", function() {
	formOverlay.classList.remove("hidden");

	formOverlay.addEventListener("click", function(evt) {
		if (evt.target === formOverlay) {
			formOverlay.classList.add("hidden");
		}
	})
})