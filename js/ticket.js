$(document).ready(fucntion(){
	$('#ticketSubmit').click(fucntion(){

		//Firebase Initializations
		var database = firebase.database();
		var user = firebase.auth().currentUser;
		var empRef = database.ref('Employees');
		var ticketRef = database.ref('Ticket');

		//Ticket Variables
		var ticketID = "";
		var customer = $('#customer').val();
		var employeeID = "";
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

		if(userID != "" && description != ""){

			empRef.once("value", function(data){

				var employee = data.val();

				$.each(employee, function(i, item){
					if(employee[i].email === user.email){
						employeeID = employee[i].email;
					}
				});

				ticketRef.limitToLast(1).once("value", function(data){

					ticket = data.val();
					$.each(ticket, function(i, item){
						ticketID = +ticket.ticketID + +1;
					});

					jsonData = {
						ticketID : ticketID,
						customer : customer,
						employeeID : employeeID,
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

				}).then(function(){
					ticketRef.push(jsonData);
				});		
			});
		} else {
			alert("Ticket missing information");
		}
	});
});