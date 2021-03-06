const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

$(function() {
	$(".block").on("click", function() {
		$(".info").toggleClass("active");
	});
});