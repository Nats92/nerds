"use strict";

var formOverlay = document.querySelector(".write-us");
var buttonWriteUs = document.querySelector(".button-write-us");
var closeForm = document.querySelector(".close-form");

buttonWriteUs.addEventListener("click", function() {
	formOverlay.classList.remove("hidden");

    document.addEventListener("keydown", function escPressHandler(evt) {
	    if (evt.keyCode === 27) {
	        formOverlay.classList.add("hidden");
        }
        document.removeEventListener("keydown", escPressHandler);
    });

    closeForm.addEventListener("click", function closeButtonHandler() {
       formOverlay.classList.add("hidden");

       closeForm.removeEventListener("click", closeButtonHandler);
    });

	formOverlay.addEventListener("click", function onEmptyPlaceClickHandler(evt) {
		if (evt.target === formOverlay) {
			formOverlay.classList.add("hidden");
		}

        formOverlay.removeEventListener("click", onEmptyPlaceClickHandler);
	})
});

//slider

var slide = document.querySelector(".slide-list");
var controls = document.querySelectorAll(".control-button");

function activeSlideIndicator(clickedButton, button1, button2) {
    if (!clickedButton.classList.contains("active")) {
        button1.classList.remove("active");
        button2.classList.remove("active");
        clickedButton.classList.add("active");
    }
}
controls[0].addEventListener("click", function() {
    activeSlideIndicator(controls[0], controls[1], controls[2]);
    slide.style.transform = "translateX(0)";
});
controls[1].addEventListener("click", function() {
    activeSlideIndicator(controls[1], controls[0], controls[2]);
    slide.style.transform = "translateX(-1160px)";
});
controls[2].addEventListener("click", function() {
    activeSlideIndicator(controls[2], controls[1], controls[0]);
    slide.style.transform = "translateX(-2320px)";
});