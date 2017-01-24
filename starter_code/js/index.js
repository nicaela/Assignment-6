$(document).ready(function(){

	var cities = ["NYC", "SF","LA", "ATX", "SYD"];

	$(cities).each(function(){
		$("select").append("<option value='" + this.toLowerCase() +"'>" + this + "</option>");
	});

	$("#city-type").change(function() {
		var selectedCity = $("#city-type").val()
		$("body").attr("class", selectewdCity);

		// use .attr instead of .addClass because if you selected many one after the other it woudl add the classes and stop working 
	});

			
});