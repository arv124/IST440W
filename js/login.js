$(document).ready(function(){
	$('#loginButton').click(function(){
		var database = firebase.database();
		const auth = firebase.auth();
		var empRef = database.ref('Employees');
		var email = $('#inputEmail').val();
		var password = $('#inputPassword').val();
		var authenticated = false;
		if(email == "" || password == ""){
			alert("Please fill both fields")
		} else {

			const promise = auth.signInWithEmailAndPassword(email, password).catch(function(){
				alert("Authentication Failed");
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
			});

			auth.onAuthStateChanged(firebaseUser => {
				if(firebaseUser) {
					console.log(firebaseUser);
					console.log("authenticated");
				} else {
					console.log("not logged in");
				}
			});
/*
			empRef.once('value').then(function(data){

			var employee = data.val();

			$.each(employee, function(i, item){
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
				window.location.href = "index.html";
			}
		});
		*/
		}
	});
});