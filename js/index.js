$(document).ready(function() {
	$('.button-toggle').on('click', function(event) {
		event.preventDefault();
		let button = $('.button-toggle');
		let menu = $('.menu-bar');
		let mainScreen = $('.main-screen');
		let App = $('#app');
		button.toggleClass('active');
		const onMenu = () => {
			//change icon
			button.find('i').css('transform', 'rotate(180deg)').fadeOut('slow', function() {
				button.find('i').remove();
				button.css('background', 'transparent');
				button.append(`<i class="fas fa-times"></i>`);
			});

			//open menu
			menu.addClass('active');
			menu.find('a.nav-link').addClass('run')

			//run main-screen
			mainScreen.removeClass('non-active');
			mainScreen.addClass('active');
			App.addClass('active');

			//turn off function if menu on active
			$('.text a').css('pointer-events','none');
		}
		const offMenu = () => {
			//change icon
			button.find('i').css('transform', 'rotate(180deg)').fadeOut('slow', function() {
				button.find('i').remove();
				button.css('background', '#d0d0d0');
				button.append(`<i class="fas fa-bars"></i>`);
			});

			//close menu
			menu.removeClass('active');
			menu.find('a.nav-link').removeClass('run');

			//back to default main-screen
			mainScreen.removeClass('active');
			mainScreen.addClass('non-active');
			App.removeClass('active');

			//turn on function if menu is closed
			$('.text a').css('pointer-events','auto');
		}
		//add condition
		if(button.hasClass('active')){
			onMenu();
			//add click event for mainScreen
			mainScreen.on('click', function(event) {
				event.preventDefault();
				button.find('i').css('transform', 'rotate(180deg)').fadeOut('slow', function() {
					button.find('i').remove();
					button.css('background', '#d0d0d0');
					button.append(`<i class="fas fa-bars"></i>`);
				});
				button.removeClass('active')

				//close menu
				menu.removeClass('active');
				menu.find('a.nav-link').removeClass('run');

				//back to default main-screen
				mainScreen.removeClass('active');
				mainScreen.addClass('non-active');
				App.removeClass('active');

				//turn on function if menu is closed
				$('.text a').css('pointer-events','auto');
			});
		}else{
			offMenu();
		}
	});
});