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

// Начало секции логина
  	(function(){

        var loginValidation = {
    
            init: function(){
                this._setUpListeners();
            },
    
            _setUpListeners: function(){             	
              	  $('.button--login').on('click', loginValidation._validateLogin );
            },
    
            _validateLogin: function(event){
                event.preventDefault();
                var form = $('.plate'),
                    inputs = form.find('input'),
                    validEmail = "mail@mail.com",
                    validPassword = "123",
                    emailValid,
                    emailValue,
                    passwordValid,
                    passwordValue;

                $.each( inputs, function(index, val) {
                    var input = $(val),
                        value = input.val().trim(),
                        errorText = input.attr('data-error'),
                        errorClass = input.attr('type'),
                       	Tooltip = $('<div class="error error-' + errorClass +'">' + errorText + '</div>');

                    if ( input.attr('type').toLowerCase() === 'email' ) {
                        if ( value.length === 0 ) {
                        form.find('.error-email').remove();
                        input.before(Tooltip);
                        emailValid = false;
                        }
                        if ( value !== '' ) {
                            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

                            if ( pattern.test(value) ) {
                                form.find('.error-email, .error-description').remove();
                                emailValid = true;
                                emailValue = value;
                            } else {
                                form.find('.error-email, .error-description').remove();
                                errorText = input.attr('data-wrong-email');
                                tooltip = $('<div class="error error-email">' + errorText + '</div>');
                                input.before(tooltip);
                                emailValid = false;
                                emailValue = value;
                            }
                        } 
                    }

                    if ( input.attr('type').toLowerCase() === 'password' ) {
                        if ( value.length === 0 ) {
                        form.find('.error-password').remove();
                        input.before(Tooltip);
                        passwordValid = false;
                        passwordValue = value;
                        }
                        if ( value !== '' ) {
                            form.find('.error-password').remove();
                            passwordValid = true;
                            passwordValue = value;
                        } 
                    }
                  
                    input.on('focus', function(){
                    form.find('.error-email, .error-password').remove();
                    });
                    input.on('keydown', function(){
                    form.find('.error-email, .error-password').remove();
                    });
                    input.on('change', function(){
                    form.find('.error-email, .error-password').remove();
                    });

                    if ( emailValid === true && passwordValid === true) {
                        if ( emailValue !== validEmail || passwordValue !== validPassword ) {
                            form.find('.error-description, .error--with-desc').remove();
                            errorText = 'Неверный email или пароль';
                            loginErrorText = '<p>Введите верные данные для входа или воспользуйтесь <a href="#">восстановлением пароля, </a>чтобы войти на сайт.</p>';
                            loginTooltip = '<div class="error-description">' + loginErrorText + '</div>';
                           	Tooltip = $('<div class="error error--with-desc">' + errorText + '</div>' + loginTooltip);
                            $('.plate__heading').after(Tooltip);
                        } else {
                            form.find('.error-description, .error--with-desc').remove();
                            form.submit();
                        }
                    } 
                });
            },
        };
    
        loginValidation.init();
    
    }());

// Начало секции регистрации
    (function(){

        var regvalidation = {
    
            init: function(){
                this._setUpListeners();
            },
    
            _setUpListeners: function(){
                $('.button--register').on('click', regvalidation._regvalidate );
            },
    
            _regvalidate: function(event){
                event.preventDefault();
                var form = $('.plate'),
                    inputs = form.find('input'),
                    existingEmail = "mail@mail.com",
                    emailValid,
                    emailValue,
                    passwordValid,
                    passwordValue;

                $.each( inputs, function(index, val) {
                    var input = $(val),
                        value = input.val().trim().toLowerCase(),
                        errorClass = input.attr('type'),
                        errorText = input.attr('data-error'),
                        tooltip = $('<div class="error error-' + errorClass +'">' + errorText + '</div>');

                    if ( input.attr('type').toLowerCase() === 'email' ) {
                        if ( value.length === 0 ) {
                            form.find('.error-email').remove();
                            input.before(tooltip);
                            emailValid = false;
                        }
                        if ( value !== '' ) {
                            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                            if ( pattern.test(value) ) {
                                form.find('.error-email').remove();
                                emailValid = true;
                                emailValue = value;
                            } else {
                                form.find('.error-email').remove();
                                errorText = input.attr('data-wrong-email');
                                tooltip = $('<div class="error error-email">' + errorText + '</div>');
                                input.before(tooltip);
                                emailValid = false;
                                emailValue = value;
                            }
                        }
                    }

                    if (input.attr('type').toLowerCase() === 'password' ) {
                        if ( value.length === 0 ) {
                            form.find('.error-password').remove();
                            input.before(tooltip);
                            passwordValid = false;
                        }
                        if ( value !== '' ) {
                            form.find('.error-password').remove();
                            passwordValid = true;
                            passwordValue = value;
                        }
                    }

                    input.on('focus keydown change', function(){
                        form.find('.error-email, .error-password').remove();
                    })
             
                });

                if ( emailValid === true && passwordValid === true ) {                    
                        if ( emailValue === existingEmail ) {
                            form.find('.error-description, .error--with-desc').remove();
                            errorText = 'Данный email уже занят';
                            loginErrorText = '<p>Используйте другой email чтобы создать новый аккаунт.</p> \n <p>Или воспользуйтесь <a href="#">восстановлением пароля</a>, чтобы войти на сайт.</p>';
                            loginErrorTooltip = '<div class="error-description">' + loginErrorText + '</div>';
                            tooltip = $('<div class="error error--with-desc">' + errorText + '</div>' + loginErrorTooltip);
                            $('.plate__heading').after(tooltip);
                        } else {
                            form.find('.error-description, .error--with-desc').remove();
                            form.submit();
                        }
                    } 
            } 
        };
    
        regvalidation.init(); 
   
    }());

});