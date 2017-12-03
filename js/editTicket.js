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
		console.log(tickets);

		//Populates Edit Form
		$('#editButton').click(function(){

			ticketID = $('.focus').attr('id');
			//childKey = need to grab childKey where ticketID

			$.each(tickets, function(i, item){

				if(tickets[i].ticketID == ticketID){

					$('#ticketID').html("<h3>Ticket ID: " + tickets[i].ticketID + "</h3>");
					$('#customerName').val(tickets[i].customer);
					$('#shortDescription').val(tickets[i].shortDescription);
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

		$('#deleteButton').click(function(){
			
			ticketID = $('.focus').attr('id');
			var childKey;
			console.log(tickets);
			
			$.each(tickets, function(i, item){

				if(tickets[i].ticketID == ticketID){

					console.log(tickets[i]);
					alert("ticket deleted");
					//ticketRef.child(key).remove;
					return true;

				}
			});
		});

		//Edit Ticket
		$('#ticketSubmit').click(function(e){
			e.preventDefault();
			console.log(ticketID);
			database.ref.set({

			});
		});

		//Resolve Ticket
		$('#ticketResolve').click(function(){
			e.preventDefault();
			console.log(ticketID);
		});
	});
});