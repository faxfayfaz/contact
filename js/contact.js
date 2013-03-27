	$(document).ready(function(){
		$('input').css('border' , '#c0c0c0 1px solid');
		
    	$("form").submit(function(event){
		
      		event.preventDefault();
			
			var error = 0;
			$('.alerts').html("");
			
			var name = $('.name').val();
			if(name == '' || name == 'John Doe'){
            	error = 1;
            	$('.alerts').append("<p class = 'alert'>Name can not be empty</p>");
				$('.name').css('border' , 'red 1px solid');
            }
			
			var email = $('.email').val();
			var reEmail = /^[A-Za-z0-9][a-zA-Z0-9._-][A-Za-z0-9]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
			if(email == '' || email == 'Your@Email.com'){
            	error = 1;
            	$('.alerts').append("<p class = 'alert'>Email can not be empty.</p>").fadeIn('slow');
				$('.email').css('border' , 'red 1px solid');
        	}else if(email.length > 60){
            	error = 1;
             	$('.alerts').append("<p class = 'alert'>Email can not exceed 60 characters.</p>");
				$('.email').css('border' , 'red 1px solid');
        	}else if(!reEmail.test(email)){
            	error = 1;
            	$('.alerts').append("<p class = 'alert'>Invalid Email Supplied.</p>");
				$('.email').css('border' , 'red 1px solid');
        	}
			
			var subject = $('.subject').val();
			if(subject == '' || subject == 'Your Subject'){
            	error = 1;
            	$('.alerts').append("<p class = 'alert'>Subject Cannot Be Empty</p>");
				$('.subject').css('border' , 'red 1px solid'); 
            }
			
			var message = $('.message').val();
			if(message == '' || message == 'Your Message Goes Here!'){
            	error = 1;
            	$('.alerts').append("<p class = 'alert'>Your Message Cannot Be Empty</p>");
				$('.message').css('border' , 'red 1px solid');
            }
			
		
			var human = $('.human').val();
			var reHuman = /^\d+$/;
		
        	if(human == ''){
            	error = 1;
            	$('.alerts').append("<p class = 'alert'>The Answer To The Question Cannot Be Empty</p>");
				$('.human').css('border' , 'red 1px solid');
        	}else if(!reHuman.test(human)){
				error = 1;
            	$('.alerts').append("<p class = 'alert'>The Answer To The Question Must Be A Number</p>");
				$('.human').css('border' , 'red 1px solid');
			}else if(human != 7){
				$('.alerts').append("<p class = 'alert'>The Answer To The Question Is Incorrect</p>");
				$('.human').css('border' , 'red 1px solid');
			}

			$('.alert').click(function(){
				$(this).fadeOut('slow');
			});
			
			$('.alert').hover(function(){
				$(this).css('cursor' , 'pointer');
			});
			
			$('form input').focus(function(){
				$(this).css('border' , '#c0c0c0 1px solid');
			
			});
			
			$('form textarea').focus(function(){
				$(this).css('border' , '#c0c0c0 1px solid');
			
			});
			
			if(error == 0){
				 var $form = $( this ),
	        	name  = $form.find( '.name' ).val(),
				email = $form.find('.email').val(),
				subj  = $form.find('.subject').val(),
				mess  = $form.find('.message').val(),
				hum   = $form.find('.human').val(),
	        	url   = $form.attr('action');
				
				$.post( url , { name: name , email: email , subject:subj , message:mess , human:hum} , function( data ){
					if(data.length != 0){
						$('.alerts').append(data); return;
					}
	          		
				});
			} 
		});
	
  	});