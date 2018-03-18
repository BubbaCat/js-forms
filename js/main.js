$(document).ready(function($) {


// Начало проверки поля сообщения

	(function(){
		
		 var CommentValidation = {
			
			init: function(){
 				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('.button--regular').on('click', CommentValidation._CommentValidate);
			},

			_CommentValidate: function(event){
				event.preventDefault();
				 var valid = true, 
			  		textareaHolder = $('.textarea'),
			  		textarea = textareaHolder.val().trim(),
			  		tooltip = $('<div class="error">Комментарий не может быть пустым.</div>');
					if (textarea.length === 0){
						valid = false
						$('form').find('.error').remove();
						tooltip.appendTo('.comment__name');
					}
					else {
						$('form').find('.error').remove();
					} 
				
					textareaHolder.on('keydown', function(){
					$('form').find('.error').remove();
					});
				
				textareaHolder.on('change', function(){
					$('form').find('.error').remove();
				});
				
					if ( valid === true ) {
					console.log('Сообщение отправлено!')
						textareaHolder.val(textarea);
						$('#form').submit();
						}
					}
				};

				CommentValidation.init();
			}());


// Начало логин секции




	});