function changeText(text)
{
	var display = document.getElementById('text-display');
	display.innerHTML = "";
	display.innerHTML = text;
}
  function changeback(text)
{
	var display = document.getElementById('text-display');
	display.innerHTML = "";
	display.innerHTML = text;
}

$(window).on("load",function(){
	$(".loader-wrapper").fadeOut("slow");
});
