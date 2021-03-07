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