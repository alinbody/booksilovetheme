(function (booksILove,$,undefined) {
	
	// Adding event listeners without using JQuery
	function addEvent(element,evnt,funct) {
		if (element.attachEvent) {
			return element.attachEvent('on'+evnt, funct);
		}
			else {
				return element.addEventListener(evnt, funct, false);
			}
	}

	// Prevent exception in IE for console.log
	if (typeof console === "undefined" || typeof console.log === "undefined") {
		console = {};
		console.log = function() {};
	}

	booksILove.initialize = function() {
		addEvent(window, 'load', function() {
			
			// Stop front page nav from doign anything with clicked
			$('.front nav li a').click( function(event) {
				event.preventDefault();
			});


			// When each menu item is clicked on the front page, scroll to that position
			// TODO: Make this better. Time crunched for now.

			$('.front nav li a.the-app-menu-item').click(function() {
				$('html,body').animate({
					scrollTop: $('.the-app-target').position().top - 50
				});
				$('nav li').removeClass('active');
				$('nav li a').css('font-weight','200');
				$(this).css('font-weight','600');
			});

			$('.front nav li a.news-menu-item').click(function() {
				$('html,body').animate({
					scrollTop: $('.news-target').position().top - 50
				});
				$('nav li').removeClass('active');
				$('nav li a').css('font-weight','200');
				$(this).css('font-weight','600');
			});

			$('.front nav li a.about-us-menu-item').click(function() {
				$('html,body').animate({
					scrollTop: $('.about-us-target').position().top - 50
				});
				$('nav li').removeClass('active');
				$('nav li a').css('font-weight','200');
				$(this).css('font-weight','600');
			});

			$('.front nav li a.faq-menu-item').click(function() {
				$('html,body').animate({
					scrollTop: $('.faq-target').position().top - 50
				});
				$('nav li').removeClass('active');
				$('nav li a').css('font-weight','200');
				$(this).css('font-weight','600');
			});

			$('.front nav li a.contact-menu-item').click(function() {
				$('html,body').animate({
					scrollTop: $('.contact-target').position().top - 50
				});
				$('nav li').removeClass('active');
				$('nav li a').css('font-weight','200');
				$(this).css('font-weight','600');
			});

		});
	};

	booksILove.autoScroll = function(sectionName) {
			// Scroll to the sectionName div and activate the menu item
				if (window.location.search.substring(1) == sectionName ) {
					$('html,body').animate(
					{
						scrollTop: ($('.' + sectionName + '-target' ).offset().top - 50) + 'px'
						// scrollTop: $('html').scrollTop() + ($('.' + sectionName).position().top - $('html').position().top)
					});

					$('nav li').removeClass('active');
					$('nav li a').css('font-weight','200');
					$('nav li a.' + sectionName + '-menu-item').css('font-weight','600');
				}
		};

	booksILove.initialize();

}(window.booksILove = window.booksILove || {},jQuery));
