$(document).ready(function(){
	$('.for-choose ul li').click(function() {
		var index = $(this).parent().index() - 1;
		var index2 = $(this).index();

		$('.tables ul li').css({'display' : 'none'});
		$('.tables ul').eq(index).find('li').eq(index2).css({'display' : 'block'});
		var height = $('.tables').height();

		var top = $('#break').offset().top;
		$('body,html').animate({scrollTop: top}, 500);
		
		setTimeout(function() {
			$('#break').height(height+160);
			$('.for-choose').addClass('hidden');
			$('.tables').addClass('showed');
		}, 500)


	});

	$('.iphones li li').click(function() {
		var index = $(this).index();
		var index2 = $(this).parent().parent().index();
		console.log(index2);

		$('.models-tables form').css({'display' : 'none'});
		$('.models-tables li').eq(index2).find('form').eq(index).css({'display' : 'inline-block'});

		$('.models').addClass('hidden');
		$('.models-tables').addClass('showed');
	});

	$('.burger, .menu li a').click(function() {
		$('.menu').toggleClass('active');
	});

	$('.for-ipad button.order').click(function() {
		$('.hide-block').addClass('hidden');
		$('.prices').addClass('showed');
	});

	$('.break .back').click(function() {
		$('#break').height('auto');
		$('.for-choose').removeClass('hidden');
		$('.tables').removeClass('showed');
	});

	$('.for-ipad .back').click(function() {
		$('.hide-block').removeClass('hidden');
		$('.prices').removeClass('showed');
	});

	$('.popup-active').click(function() {
		$('.form-wrapper').addClass('active');
	});

	$('.mask, .close').click(function() {
		$('.form-wrapper').removeClass('active');
	});

	$('.models-tables .back').click(function() {
		$('.models').removeClass('hidden');
		$('.models-tables').removeClass('showed');
	});

	$(".masked-input").mask("000 000 00 00",{placeholder:"0XX XXX XX XX"});

	$('#myForm').ajaxForm(function() { 
        alert("Мы свяжемся с вами в ближайшее время !"); 
        $('#myForm')[0].reset();
    }); 
    $('#myForm2').ajaxForm(function() { 
        alert("Мы свяжемся с вами в ближайшее время !"); 
        $('.form-wrapper').removeClass('active');
        $('#myForm2')[0].reset();
    }); 
});