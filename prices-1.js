function openNav(x) {
  var x = window.matchMedia('(min-width: 1280px)');
  
  if (x.matches) {
    document.getElementById("mySidenav").style.width = "15%";
  } else {
   document.getElementById("mySidenav").style.height = "100%";
   document.getElementById("mySidenav").style.padding = "10vw 0 0 0";
  }
}

function closeNav(x) {
	var x = window.matchMedia('(min-width: 1280px)');
	
	if (x.matches) {
	  document.getElementById("mySidenav").style.width = "0";
	} else {
	 document.getElementById("mySidenav").style.height = "0";
	 document.getElementById("mySidenav").style.padding = "0 0 0 0";
	}
}
