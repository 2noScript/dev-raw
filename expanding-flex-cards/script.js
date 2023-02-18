$(".card").click(function () {
	if ($(this).hasClass("card-active")) {
		$(".card").removeClass("card-active");
	} else {
		$(".card").removeClass("card-active");
		$(this).addClass("card-active");
	}

	const uri = $(this).children().attr("src");
	$(".bg").attr("src", uri);
});
