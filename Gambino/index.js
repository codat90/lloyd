$(window).on("load",function(){
	$(".loader-wrapper").fadeOut("slow");
});

document.onreadystatechange = function () {
	if(document.readyState === 'complete') {
		document.body.style.overflow = 'visible';
	}
}

// PAGE SCROLL //
function scrollTopAnimated() {
	$("html, body").animate(
		{scrollTop: $("#longpage").offset().top}, 2000);
}

$(window).on("load",function(){
	setTimeout(scrollTopAnimated, 1000);
});
// PAGE SCROLL END //
