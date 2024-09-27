window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
	{
		document.getElementById("top-arrow").style.display = "block";
		document.getElementById("top-arrow").style.opacity = "1";
	}
	else
	{
		document.getElementById("top-arrow").style.display = "none";
		document.getElementById("top-arrow").style.opacity = "0";
	}

	// if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
	// {
	// 	document.getElementById("top-arrow").style.animation = "arrow-slide-in";
	// 	// document.getElementById("top-arrow").style.animationPlayState = "running";
	// }
	// else
	// {
	// 	document.getElementById("top-arrow").style.animation = "arrow-slide-out";
	// 	// document.getElementById("top-arrow").style.animationPlayState = "running";
	// }
}