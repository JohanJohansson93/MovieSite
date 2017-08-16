/*
This script are used for displaying a modal box.
*/
$(document).ready(function() {
		
		/*
		When an image is pressed
		the image src is placed in the img-tag inside
		the modal. The modal is then displayed.
		When the X is pressed the close function triggers.
		The close function then hides the modal.
		*/		
		$(function modalClick() {
			var modal = $("#myModal");
			var img = $("img");
			var modalImg = $("#imgModal");
			var captionText = $("#caption");

			$(img).on('click', function(e) {
				e.preventDefault();
				$(captionText).empty();
				$(modal).css('display', 'block');
				$(modalImg).attr('src', $(this).attr('src'));
				$(captionText).append(this.alt);
			});

			var close = $(".close");
			$(close).on('click', function(e) {
				e.preventDefault();
				$(modal).css('display', 'none');
			});
			
		});
	});