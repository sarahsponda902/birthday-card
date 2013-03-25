$(document).ready(function() {
	$('.home-header .texts li').addClass('animated fadeInRight');
	$('.bb-bookblock p.first, .bb-bookblock p.second, .bb-bookblock p.third').addClass('animated fadeIn');
	$('.bb-custom-bookshelf .bookshelf-item').addClass('animated fadeIn');
});

var scrollToElem = function(target) {
	var scrollPane = $("body");
	var scrollY = $(target).offset().top + scrollPane.scrollTop() - 50
	scrollPane.animate({scrollTop : scrollY}, 500, 'swing');
}
