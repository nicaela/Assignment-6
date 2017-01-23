$(document).ready(function(){

	$("form").submit(function(e){
		e.preventDefault();

		// default here (of .submit) is to refresh the page, meaning you would lose any other detail on the page so need to prevent the default of this

		var cities = ["NYC", "SF","LA", "ATX", "SYD"]

		var city = $("#city-type").val().toLowerCase();
		// alert(city);

		// str.toLowerCase converts it all to lower case so any variation in cases for NYC e.g. Nyc NYc etc. means it will result in nyc so you can just do it below. 

		if(city === "nyc" || city === "new york city" || city === "new york") {
			$("body").attr("class", "nyc");
			// for .attr (attribute) need to give it two pieces of information, first what attribute we need to change and what we want to change the attribute too 
		}

		if(city === "sf" || city === "san francisco" || city === "san fran" || city === "bay area") {
			$("body").attr("class", "sf");
		}

		if(city === "la" || city === "los angeles" || city === "lax") {
			$("body").attr("class", "la");
		}

		if(city === "austin" || city === "atx") {
			$("body").attr("class", "austin");
		}

		if(city === "sydney" || city === "syd") {
			$("body").attr("class", "sydney");
		}
	});

});