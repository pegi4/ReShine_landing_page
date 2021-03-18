/*--------------------------------------------
*       On scroll show header logo
----------------------------------------------*/

function myFunction(x) {
	if (x.matches) { // If media query matches
		document.getElementById("hlogo").style.height = "5rem";
		$(document).ready(function() {
			$(window).scroll(function() {
				console.log('scrolling ', $(window).scrollTop(), $(document).height());
				if ($(window).scrollTop() >= 800 && $(window).scrollTop() <= ($(document).height() - 800)) {
					$('header').addClass('hide');
				}
				else {
					$('header').removeClass('hide');
				}
			});
		});
	} else {
		document.getElementById("hlogo").style.height = "3rem";
		$(document).ready(function() {
			$(window).scroll(function() {
				console.log('scrolling ', $(window).scrollTop(), $(document).height());
				if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= ($(document).height() - 400)) {
					$('header').addClass('hide');
				}
				else {
					$('header').removeClass('hide');
				}
			});
		});
	}
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*--------------------------------------------
*                   Info button
----------------------------------------------*/

const card = document.querySelector(".card__inner");

$(function() {
	$(".block").on("click", function() {
		$(".info").toggleClass("active");
	});
	$(".bblock").on("click", function() {
		$(".iinfo").toggleClass("active");
	});
	$(".bbblock").on("click", function() {
		$(".iiinfo").toggleClass("active");
	});
	$(".bbbblock").on("click", function() {
		$(".iiiinfo").toggleClass("active");
	});
});

window.onload = function(){
	document.getElementById('ll').style.opacity = 1;
	document.getElementById('ll').style.marginTop = "0rem";
	document.getElementById('opis').style.opacity = 1;
}

/* Add class when scrolled 700px
$(document).ready(function() {
	$(window).scroll(function() {
        console.log('scrolling ', $(window).scrollTop(), $(document).height());
    	if ($(window).scrollTop() >= 700 && $(window).scrollTop() <= ($(document).height() - 700)) {
        	$('header').addClass('hide');
        }
        else {
        	$('header').removeClass('hide');
        }
    });
});*/



