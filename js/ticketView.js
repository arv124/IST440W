$(document).ready(function(){
	var database = firebase.database();
	var ticketRef = database.ref('TicketSystem/Ticket');
	var ticketHTML;
	var ticketID;
	var tickets;
	
	ticketRef.once("value", function(data){

		tickets = data.val();

		$.each(tickets, function(i, item){

			console.log(tickets[i].employeeID);

			if(tickets[i].status === "open" && tickets[i].employeeID === firebase.auth().currentUser.email){
				ticketID = tickets[i].ticketID;
				
				ticketHTML = "<tr id='ticket" + ticketID + "' class='ticket'>" +
								"<td>" + ticketID + "</td>" +
								"<td>" + tickets[i].customer + "</td>" +
								"<td>" + tickets[i].description + "</td>" +
								"<td>" + tickets[i].contactInfo + "</td>" +
								"<td>" + tickets[i].status + "</td>" +
								"<td>" + tickets[i].openDate + "</td>" +
								"<td>" + 3 + "</td>" +
							 "</tr>";				
				$('#ticketTable').find('tbody').append(ticketHTML);
				//console.log(ticketHTML);
			}
		});

	});

	$('#searchFilter').click(function(event){
		event.stopPropagation();
	});

	$('#logout').click(function(){
		firebase.auth().signOut();
	});

	$('td').click(function(){
		$('tr').removeClass('highlight');
		$(this).parent().addClass('highlight');
		console.log("clicked");
	});
});