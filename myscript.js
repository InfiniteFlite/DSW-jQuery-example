var numtoggle = 0;

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
	$("img").hover(function(){
		$("img").css({"width":"50%"});
	},
		function(){
    $("img").css({"width":"20%"});
	});
});
