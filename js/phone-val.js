// <!-- Telephone Validation -->
 	$(document).ready(function(){
    jQuery.fn.ForceNumericOnly =
    function()
    {
        return this.each(function()
        {
            $(this).keydown(function(e)
            {
                var key = e.charCode || e.keyCode || 0;
               
                return (
                    key == 8 || 
                    key == 9 ||
                    key == 46 ||
                    (key >= 37 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };

    $('#phone').ForceNumericOnly();

    $("#ololo").click(function() {
            var name = $('#name');
            var phone = $('#phone');
            var wreck = $('#wreck');
            if( phone.val().length !== 9 ){
            	$('.alert').addClass('visible');
              setTimeout(function(){
                $('.alert').removeClass('visible');
              },3000);
            } else {
            	$('.alert').removeClass('visible');
            }
            if( name.val() != '' && phone.val().length == '9' && wreck.val() != '' ){
              var form_data = $('#application').serialize(); 
              $.ajax({
              type: "GET", 
              url: "form.php", 
              data: form_data,
              success: function() {
                     console.log('Сообщение отправлено');
                     $("#ololo").text('Отправлено');
                     $("#ololo").addClass('sent-mess');
                 }
              });
            }
    });
});  