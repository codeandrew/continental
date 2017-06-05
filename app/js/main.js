var m = function(msg){
	console.log(msg);
}

m('Test Console');
m('Logged at : \n' + Date());


var html = {
	log : document.getElementById('log-btn'),
	uname : document.getElementById('username'),
	pword : document.getElementById('password')
};
if (html.log != null) {
	html.log.addEventListener('click', function(){
		alert('Test Code \n' +
		'Username: ' + getUname() +
		'\n Password: ' + getPword());

		function getUname(){
			return html.uname.value;
		}
		function getPword(){
			return html.pword.value;
		}
	})
}
