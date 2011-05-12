jQuery(document).ready(function($){

	// Disables submit button.
	$('input[type=submit]').attr('disabled','disabled');
	
	// Enables submit button if Fresh Start is entered.
	$('input[name=fresh-start]').keyup(function(){
		if ( $(this).val() == "Fresh Start" ) {
			$('input[type=submit]').removeAttr('disabled');
		} else {
			$('input[type=submit]').attr('disabled','disabled');
		}
	});
	
	// Validates text field on submit.
	$('#fresh-start-form').submit(function(e){
		e.preventDefault();
		if ( $('input[name=fresh-start]').val() != "Fresh Start" ){
			$('p',this).css('color','red');
		} else {
			$('#fresh-ajax').html('<p>Removing content from database&hellip;</p>');
			$.post(ajaxurl, {action: 'fresh_start'}, function(response){
				$('#fresh-ajax').append(response);
			});
		}
	});

});