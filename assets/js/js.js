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
  
/*--------------------------------------------
*      ON SCROLL GET KINDA BLURRY
----------------------------------------------*/

  var x = window.matchMedia("(min-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  $(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 1000;

        $('.fade').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.1s linear',
                        opacity: 1
					});

                } else {
                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});


window.onload = function(){
	document.getElementById('ll').style.opacity = 1;
	document.getElementById('ll').style.marginTop = "0rem";
	document.getElementById('opis').style.opacity = 1;
}

/*--------------------------------------------
*      REVEAL SROLL DOWN GO UP
----------------------------------------------*/

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

	var windowheight = window.innerHeight;
	var revealtop = reveals[i].getBoundingClientRect().top;
	var revealpoint = 40;

	if(revealtop < windowheight - revealpoint){
	  reveals[i].classList.add('active');
	}
	else{
	  reveals[i].classList.remove('active');
	}
  }
}