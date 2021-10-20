$(window).on("load",function(){
	$(".loader-wrapper").fadeOut("slow");
});

document.onreadystatechange = function () {
	if(document.readyState === 'complete') {
		document.body.style.overflow = 'visible';
	}
}

// PAGE SCROLL //



$(window).on("load",function(){
	let id = setInterval(function() {
		window.scrollBy(0,4);
	}, 1);
	window.addEventListener('scroll', function() {
		var someDiv = document.getElementById('longpage');
		var distanceToTop = someDiv.getBoundingClientRect().top;
		if(distanceToTop <= 0){
			clearInterval(id);
		}
	 });
	return id;
});


// PAGE SCROLL END //