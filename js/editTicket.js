$(document).ready(function(){

	var database = firebase.database();
	var ticketRef = database.ref('TicketSystem/Ticket');
	var user;
	var tickets;
	var ticketID;
	var customer;
	var contactInfo;
	var employeeID;
	var shortDescription;
	var description;
	var location;
	var scope;
	var impact;
	var status;
	var severity;
	var openDate;
	var closeDate;
	var resolution;
	var jsonData;

	ticketRef.once("value", function(data){

		tickets = data.val();

		$('#editButton').click(function(){

			ticketID = $('.focus').attr('id');

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

		//Edit Ticket

		$('#ticketSubmit').click(function(e){
			e.preventDefault();

			console.log(ticketID)

		});

		//Resolve Ticket

		$('#ticketResolve').click(function(){

			console.log(ticketID);

		});
	});
});