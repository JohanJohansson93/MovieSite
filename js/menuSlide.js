	/*
	This script makes the menu to slide down when pressed
	if the max-width of the device is less than 450px.
	*/
	$(document).ready(function() {

			
			$(function menuSlide() {

					/*Creates two variables and gets the value from
					the class show and the unorderlist.
					*/
					var pull = $('.show');
					var	menu = $('nav ul');

					//When the menu is pressed the menu will slide down.
					$(pull).on('click', function(e) {
						e.preventDefault();
						menu.slideToggle();
					});

				});
			
		});

