$(document).ready(function(){
	$('#logout').click(function(){
		alert("logged out");
		firebase.auth().signOut();
	});
});