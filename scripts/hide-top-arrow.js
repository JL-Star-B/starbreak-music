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
}