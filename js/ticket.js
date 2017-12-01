$(document).ready(function(){
	//Firebase Variables
	var database = firebase.database();
	var ticketRef = database.ref('TicketSystem/Ticket');

	//Ticket Variables
	var ticketLabel = $('#ticketID')
	var ticketID;
	var ticket;

	//Updating ticketLabel on page load
	ticketRef.limitToLast(1).once("value", function(data){

		var ticket = data.val();
		//console.log(ticket);

		$.each(ticket, function(i, item){
			ticketID = +ticket[i].ticketID + +1;
		});
		//console.log("ticketID: "+ticketID);
		ticketLabel.html("<h3>Ticket ID: "+ticketID+"</h3>");
	});

	$('#ticketSubmit').click(function(e){
		e.preventDefault();
		//Firebase Variables
		var user = firebase.auth().currentUser;
		var empRef = database.ref('Employees');
		
		//Ticket Variables
		var customer = $('#customer').val();
		var contactInfo = $('#contact').val();
		var employeeID = user.email;
		var shortDescription = ""//$('#shortDescription').val();
		var description = $('#description').val();
		var location = $('#location').val();
		var scope = $('#scope').val();
		var impact = $('#impact').val();
		var status = "open";
		var severity = +scope + +impact;
		var openDate = Date();
		var closeDate = "";
		var resolution = "incomplete";
		var jsonData;

		if(customer != "" && description != "" && contactInfo != ""){

			jsonData = {
				ticketID : ticketID,
				customer : customer,
				contactInfo : contactInfo,
				employeeID : employeeID,
				shortDescription : shortDescription,
				description : description,
				location : location,
				scope : scope,
				impact : impact,
				status : status,
				severity : severity,
				openDate : openDate,  
				closeDate : closeDate,
				resolution : resolution
			};
			//console.log(jsonData);
			ticketRef.push(jsonData);
			alert("pushed");
			//$('#ticketBody').load("index.html #ticketBody")
			window.location.reload();

			/*
			$.each(employee, function(i, item){
					if(employee[i].email === user.email){
						employeeID = employee[i].email;
						//console.log("ID: "+employeeID)
					}
				});

			//Getting Employee ID and assembling JSON data	
			empRef.once("value", function(data){

				var employee = data.val();

				
			});
			*/
		} else {
			alert("Ticket missing information");
			return false;
		}
	});
});