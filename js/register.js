$(document).ready(function(){
	$('#registerButton').click(function(){
		var database = firebase.database();
		var empRef = database.ref('Employees');
		var firstName = $('#inputFirstName').val();
		var lastName = $('#inputLastName').val();
		var password = $('#inputPassword').val();
		var confirmPassword = $('#confirmPassword').val();
		var email = $('#inputEmail').val();
		var employeeID = "";

		if(firstName != "" && lastName != "" && email != ""
			&& password != "" && confirmPassword != ""){

			empRef.limitToLast(1).once("value", function(data){

				var employee = data.val();
				//console.log(employee);
				//console.log(employee.employeeID)
				$.each(employee, function(i, item){
					employeeID = +employee[i].employeeID + +1;
					//console.log(employeeID);			
				});		

				var jsonData = {

				employeeID: employeeID,
				firstName: firstName,
				lastName: lastName,
				password: password,
				email: email

				};

				if(password === confirmPassword){
					//console.log(jsonData);
					empRef.push(jsonData);
					firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(){
						var errorCode = error.code;
						var errorMessage = error.message;
						console.log(errorCode);
						console.log(errorMessage);
					});
					alert('You Have Successfully Registered');
					window.location.href = "login.html";
				} else {
					alert('Passwords do not match');
				}
			});
		} else {
			alert("Form incomplete");
		}
		//console.log(employeeID);
	});
});