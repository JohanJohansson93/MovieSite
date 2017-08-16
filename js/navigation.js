/*
This script are used for navigating between the different pages.
*/
$(document).ready(function() {
		
		//When the home tab is pressed the page navigates to home.html
		$(".navbar").find('#home').on('click', function() {
				
					window.location.href='home.html';
			});
		//When the home tab is pressed the page navigates to movies.html
		$(".navbar").find('#movies').on('click', function() {
					
					window.location.href='movies.html';
			});
		//When the home tab is pressed the page navigates to series.html
		$(".navbar").find('#series').on('click', function() {
					
					window.location.href='series.html';
			});
		//When the home tab is pressed the page navigates to contact.html
		$(".navbar").find('#contact').on('click', function() {
					
					window.location.href='contact.html';
			});
	});