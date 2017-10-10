$(document).ready(function(){
	$('#loginButton').click(function(){

		alert("Clicked");
		var database = firebase.database();
		var empRef = database.ref('Employees');
		empRef.on('value', snap => console.log(snap.val()));
		var username = $('#inputUsername').val();
		var password = $('#inputPassword').val();
		var authenticated = false;

		empRef.once('value').then(function(data){

			console.log(data.val());
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
	});
});