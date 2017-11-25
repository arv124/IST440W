$(document).ready(function(){

	var database = firebase.database();
	var ticketRef = database.ref('TicketSystem/Ticket');
	var ticketDiv;
	var tickets;

	ticketRef.once("value", function(data){

		tickets = data.val();

		$.each(tickets, function(i, item){
			$('#listBody').html(function(index, currentcontent){
				//For each element in the array create a div in listBody
			});
		});

	});

	$('#searchFilter').click(function(event){
		event.stopPropagation();
	});

	$('#logout').click(function(){
		firebase.auth().signOut();
	});
});