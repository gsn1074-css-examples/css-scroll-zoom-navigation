window.addEventListener("load", function()
{
	//var contentZoom = 1;
	var zoomStep = 10;
	var backgroundSize = 100;
  
	document.getElementById("zoomIn").addEventListener("click", function() {

		backgroundSize += zoomStep;
		document.getElementById("content").style.backgroundSize = backgroundSize + "% " + backgroundSize + "%";
	
	});
  
	document.getElementById("zoomOut").addEventListener("click", function() {

		if(backgroundSize > 100) {

			backgroundSize -= zoomStep;
			document.getElementById("content").style.backgroundSize = backgroundSize + "% " + backgroundSize + "%";
		}

	});

});
  