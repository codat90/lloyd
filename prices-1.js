function openNav(x) {
  var x = window.matchMedia('(min-width: 1280px)');
  
  if (x.matches) {
    document.getElementById("mySidenav").style.width = "15%";
	document.getElementById("openbtn").style.display = "none";
  } else {
   document.getElementById("mySidenav").style.height = "100%";
  }
}

function closeNav(x) {
	var x = window.matchMedia('(min-width: 1280px)');
	
	if (x.matches) {
	  document.getElementById("mySidenav").style.width = "0";
	  document.getElementById("openbtn").style.display = "block";
	} else {
	 document.getElementById("mySidenav").style.height = "0";
	}
}

$(window).on("load",function(){
	$(".loader-wrapper").fadeOut("slow");
});
