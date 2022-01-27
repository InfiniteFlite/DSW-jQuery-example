var numtoggle = 0;
var numImageClicks = 0;

$(document).ready(function() {
	$("h1").click(function() {
		if(numtoggle == 0)
		{
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
		numtoggle = 1;
		}
	 else if(numtoggle == 1)
		{
		$("p").css({"color":"DarkBlue", "background-color": "lightblue"});
		$("img").css("border","none");
		numtoggle = 0;
		}
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#p1").click(function(){
		$("#p2").toggle();
		$("#p3").toggle();
	});
	$("img").click(function(){
		if(numImageClicks == 0)
		{
		$("img").css({"width":"30%", "display":"block","margin-left":"35%","margin-top":"-15%"});
		$("#photoZoomBlur").css({"width":"100vw","height":"120vh","margin-top":"-20%","background-color":"black","opacity":".6"});
		numImageClicks = 1;
		}
		else if(numImageClicks == 1)
		{
			$("img").css({"width":"20%", "display":"block","margin-left":"auto","margin-top":"auto"});
			$("#photoZoomBlur").css({"width":"100vw","height":"120vh","margin-top":"-20%","background-color":"black","opacity":"0"});
			numImageClicks = 0;
		}
	});
});
