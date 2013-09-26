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

	// Initialize window width and height to keep track of
	var wWidth = null, wHeight = null;

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

			// Define wWidth and wHeight
			function getWindowAttrib(){
				wWidth = $(window).width();
				wHeight = $(window).height();
			}
			getWindowAttrib();				

		});

		addEvent(window, 'scroll', function() {
			// Define wWidth and wHeight on scroll
			wWidth = $(window).width();
			wHeight = $(window).height();
		});

		// When signup button is clicked, pop up overlay form.
		$('.signup-button').click( function() {
			booksILove.signUpPopup();
		});

		// When menu button is clicked, slide down/up mobile menu
		// Then, add class "mobile-menu" to UL to distinguish it from desktop site
		$('.mobile-menu img').click( function() {
			$('ul.menu').slideToggle('slow').addClass('mobile-menu');
		});

		// When menu item is tapped, hide menu
		// Then, remove "mobile-menu" class
		$('ul.menu li a').click( function() {
			$('ul.mobile-menu').hide().removeClass('mobile-menu');
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



	booksILove.signUpPopup = function() {
		// Prepend overlay div and email form and close box
		$('body').prepend('<div style="-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\';filter: alpha(opacity=80);-khtml-opacity: 0.80;-moz-opacity: 0.80;opacity: 0.80;width:' + wWidth + 'px;height:' + wHeight + 'px;background-color: #ffffff;position:fixed;z-index:200;display: none;" class="overlay"></div><iframe src="http://booksilove.com/stage/content/sign-form" frameborder="0" style="padding:20px;width:450px;height:345px;overflow:hidden;border: 1px solid #999999;z-index: 201;display:none;position: fixed; background-color:#ffffff;left:' + (wWidth/2-225) + 'px;top:' + (wHeight/2-150) + 'px;" class="signup-form"></iframe><div class="closebox" style="position: fixed;top:' + (wHeight/2-140) + 'px;left:' + (wWidth/2+245) + 'px;z-index:201;cursor:pointer;">X</div>');

		// Fade in overlay div and email form
		$('.overlay').fadeIn('fast');
		$('.signup-form').fadeIn('slow');

		// Attach click handler to close these things
		$('.closebox, .overlay').click( function() {
			$('.overlay, .signup-form, .closebox').fadeOut('slow').remove();
		});

		
		addEvent(window, 'resize', function() {
			// Update width and height of overlay on resize
			getWindowAttrib();
			$('.overlay').css({
				width: wWidth + 'px',
				height: wHeight + 'px'
			});

			// Update top and left position of form on resize
			$('.signup-form').css({
				top: ((wHeight/2)-150) + 'px',
				left: ((wWidth/2)-225) + 'px'
			});

			$('.closebox').css({
				top: ((wHeight/2)-140) + 'px',
				left: ((wWidth/2)+245) + 'px'
			});

		});
	};

	booksILove.initialize();

}(window.booksILove = window.booksILove || {},jQuery));
