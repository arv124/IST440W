$(document).ready(function(){
	$('#searchFilter').on('click', function (event) {
		event.stopPropagation();
		console.log("propagation stopped");
	});
});