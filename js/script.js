var flipped = false;

$("#surround").click(function(){
	if (flipped == false) {
		$("#arrow").css("-webkit-transform", "scaleY(-1)");
		$("#main").animate({height: "40vh"});
		flipped = true;
	} else if (flipped == true) {
		$("#arrow").css("-webkit-transform", "scaleY(1)");
		$("#main").animate({height: "55vh"});
		flipped = false;
	}
});