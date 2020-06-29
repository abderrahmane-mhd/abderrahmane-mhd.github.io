$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
               
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Name field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Subject is required",
                    minlength: "your subject must consist of at least 4 characters"
                },
               
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "The message is required",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                
                
                $(form).ajaxSubmit({
                    type:"GET",
                    url: "https://us-central1-portfolio-7004f.cloudfunctions.net/sendMail?name="+form.name.value+'&email='+form.email.value+"&subject="+form.subject.value+"&message="+form.message.value,
                    success: function() {
                        $('#success').show();
                $('#error').hide();       
                    },
                    error: function() {
                        $('#error').show();
                        $('#success').hide();
                      
                    }
                })
                
            }
        })
    })
        
 })(jQuery)
})