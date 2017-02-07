$(document).ready(function() {

//menu
function menu() {
	var nav = $('.menu__nav');
	var item = $('.menu__container');
	var title = $('.menu__title span');
	item.hide();
	item.first().show();
	nav.find('a').click(function() {
		if (!$(this).hasClass('is-active')) {
			item.hide();
			nav.find('a').removeClass('is-active');
			var block = $(this).data('href');
			var text = $(this).text();
			$(this).addClass('is-active');
			$('#' + block).fadeIn();
			title.html(text);
		}
		return false;
	});
}
menu();

function hotel() {
	var nav = $('.hotel__nav');
	var item = $('.hotel__container');
	var title = $('.hotel__title span');
	item.hide();
	item.first().show();
	nav.find('a').click(function() {
		if (!$(this).hasClass('is-active')) {
			item.hide();
			nav.find('a').removeClass('is-active');
			var block = $(this).data('href');
			var text = $(this).text();
			$(this).addClass('is-active');
			$('#' + block).fadeIn();
			title.html(text);
		}
		return false;
	});
}
hotel();

if($('.overlay .close').length > 0){
    $('.overlay .close').on('click', function(){
        $('.overlay').hide();
    });
}

if($('.overlay1 .close').length > 0){
    $('.overlay1 .close').on('click', function(){
        $('.overlay1').hide();
    });
}

/*if($('.overlay input[name="phone"]').length > 0){
    $('.overlay input[name="phone"]').mask("38(999)9999999");
}*/

});
