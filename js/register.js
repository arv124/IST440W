$(document).ready(function(){
	$('#registerButton').click(function(){
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
	});
});