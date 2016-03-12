/**
 * Created by esattahaibis on 2016-02-11.
 */
/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

(function(){
	/* Crating array for dom objects */
	var domObjects = new Array();
	domObjects.push(document.getElementById("paragraphOne"));
	domObjects.push(document.getElementById("paragraphTwo"));
	domObjects.push(document.getElementById("projectOneTitle"));
	domObjects.push(document.getElementById("projectOneText"));
	domObjects.push(document.getElementById("projectTwoTitle"));
	domObjects.push(document.getElementById("projectTwoText"));
	domObjects.push(document.getElementById("projectThreeTitle"));
	domObjects.push(document.getElementById("projectThreeText"));


	document.getElementById("btnSend").addEventListener("click", function(){
		alert("You succesfully sent your massage!");
		console.log('success');
		//this.className += ' scroll-top page-scroll';
		var uName = document.getElementById('name').value;
		var uEmail = document.getElementById('email').value;
		var uPhone = document.getElementById('phone').value;
		var uMessage = document.getElementById('message').value;
		// I'm using template strings from ECMAScript 6
		console.log(`Values that comes from User,\n Name: ${uName}\n E-mail: ${uEmail}\n Phone Number: ${uPhone}\n Message: ${uMessage}\n`);
		window.location.href = "#page-top";
	});


})();
