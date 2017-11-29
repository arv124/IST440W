$(document).ready(function(){
	var database = firebase.database();
	var ticketRef = database.ref('TicketSystem/Ticket');
	//var empRef = database.ref('Employees');
	var employeeID;
	var ticketHTML;
	var ticketID;
	var tickets;
	/*
	empRef.once("value", function(data){

		var employee = data.val();

		$.each(employee, function(i, item){
			if(employee[i].email === user.email){
				employeeID = employee[i].email;
				//console.log("ID: "+employeeID)
			}
		});
	});
	*/
	ticketRef.once("value", function(data){

		tickets = data.val();
		$.each(tickets, function(i, item){
				if(tickets[i].status === "open"){
					ticketID = tickets[i].ticketID;
					//For each element in the array create a div in listBody
					/*
					ticketHTML = "<tr id='ticket" + ticketID + ">" +
									"<td>" + ticketID + "</td>" +
									"<td>" + tickets[i].customer + "</td>" +
									"<td>" + tickets[i].description + "</td>" +
									"<td>" + tickets[i].contactInfo + "</td>" +
									"<td>" + tickets[i].status + "</td>" +
									"<td>" + tickets[i].openDate + "</td>" +
									"<td>" + tickets[i].priority + "</td>" +
								 "</tr>";
					*/
					$('#ticketTable').find('tableBody')
						.append(ticketHTML)
							.append('<tr>')
								.append('<td>').text(ticketID)
					console.log("ticket appended")
				}
		});

	});

	$('#searchFilter').click(function(event){
		event.stopPropagation();
	});

	$('#logout').click(function(){
		firebase.auth().signOut();
	});
});