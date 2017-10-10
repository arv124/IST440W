$(document).ready(function(){
	$('#loginButton').click(function(){

		alert("Clicked");
		var database = firebase.database();
		var empRef = database.ref('Employees');
		var username = $('#inputUsername').val();
		var password = $('#inputPassword').val();
		var authenticated = false;
		if(username == "" || password == ""){
			alert("Please fill both fields")
		} else {
			empRef.once('value').then(function(data){

			//console.log(data.val());
			var employee = data.val();

			$.each(employee, function(i, item){

				console.log(employee.username);
				console.log(employee.password);

				if(employee[i].username === username
				&& employee[i].password === password){
					console.log("Authenticated");
					authenticated = true;
					return false;
				} else {
					console.log("Invalid Credentials");
				}
			});
			console.log(authenticated);
			if(authenticated === true){
				console.log("Page Loaded");
				//load index with authenticated attrib
				//$(this).load("index.html");
			}
		});
		}
	});
});