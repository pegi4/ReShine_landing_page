/*--------------------------------------------
*                   Info button
----------------------------------------------*/

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

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

window.onload = function(){
	document.getElementById('ll').style.opacity = 1;
	document.getElementById('ll').style.marginTop = "0rem";
	document.getElementById('opis').style.opacity = 1;
}


