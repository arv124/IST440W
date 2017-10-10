$(document).ready(function(){
	$('#registerButton').click(function(){
		console.log("called");
		alert('clicked')

		var database = firebase.database();
		var empRef = database.ref('Employees');
		empRef.on('value', snap => console.log(snap.val()));
		var firstName = $('#inputFirstName').val();
		var lastName = $('#inputLastName').val();
		var password = $('#inputPassword').val();
		var confirmPassword = $('#confirmPassword').val();
		var username = $('#inputUsername').val();
		var employeeID = "";

		empRef.limitToLast(1).once("value", function(data){

			var employee = data.val();
			console.log(employee);
			console.log(employee.employeeID)
			$.each(employee, function(i, item){
				employeeID = +employee[i].employeeID + +1;
				console.log(employeeID);			
			});		

			var jsonData = {

			employeeID: employeeID,
			firstName: firstName,
			lastName: lastName,
			password: password,
			username: username

			};

			if(password === confirmPassword){
				empRef.push(jsonData);
				console.log(jsonData);
				alert('You Have Successfully Registered');
			} else {
				alert('Passwords do not match');
			}
		});
		console.log(employeeID);
		/*$(function(){
			var employeeID;
			empRef.on("value", function(data){
				employee = data.val().employeeID;
				console.log(employee);
				//employeeID = JSON.stringify(employee.employeeID);
			});
			console.log(employeeID);
			return employeeID; 
		});
		*/
		
	});
});

/*
function register(){
	alert('clicked')
	var database = firebase.database();
	var empRef = database.ref('Employees/').limitToFirst(1);
	empRef.on('value', snap => console.log(snap.val()));
	var firstName = document.getElementById("inputFirstName").value;
	var lastName = document.getElementById("inputLastName").value;
	var password = document.getElementById("inputPassword").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var employeeID = getEmployeeID(empRef);
	var username = document.getElementById("inputUsername").value;
	var jsonData = {

		employeeID: employeeID,
		firstName: firstName,
		lastName: lastName,
		password: password,
		userName: username

	};

	if(password === confirmPassword){
		//empRef.child('employee'+employeeID).push(jsonData);
		console.log(jsonData);
		alert('You Have Successfully Registered');
	} else {
		alert('Passwords do not match');
	}

}
*/