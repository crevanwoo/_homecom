	var header_height = parseInt($('header').css('height'));

	$("body").on("click", ".anchor", function (event) {
		
		if (document.querySelector('.general_wrapper.index')) {
			
			var id = $(this).attr('href');
			
			if (id.indexOf('#') != -1) {
				
				event.preventDefault();
				
				var from = id.indexOf('#');
				
				id = id.slice(from, id.length);

				var top = $(id).offset().top - header_height;

				$('body,html').animate({
					scrollTop: top
				}, 600);

			}
		}
	});
