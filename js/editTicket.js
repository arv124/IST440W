$(document).ready(function(){

	var database = firebase.database();
	var ticketRef = database.ref('TicketSystem/Ticket');
	var user;
	var tickets;
	var ticketID;

	ticketRef.once("value", function(data){

		$('#editButton').click(function(){

			ticketID = $('.focus').attr('id');
			tickets = data.val();

			$.each(tickets, function(i, item){

				if(tickets[i].ticketID == ticketID){

					$('#ticketID').html("<h3>Ticket ID: " + tickets[i].ticketID + "</h3>");
					$('#customerName').val(tickets[i].customer);
					$('#employeeID').val(tickets[i].employeeID);
					$('#openDate').val(tickets[i].openDate.slice(0,15));
					$('#closeDate').val(tickets[i].closeDate.slice(0,15));
					$('#status').val(tickets[i].status);
					$('#contactInfo').val(tickets[i].contactInfo);
					$('#location').val(tickets[i].location);
					$('#scope').val(tickets[i].scope);
					$('#impact').val(tickets[i].impact);
					$('#description').val(tickets[i].description);
				}
			});
		});
	});
});