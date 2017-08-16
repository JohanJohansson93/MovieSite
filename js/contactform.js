// When the dom object has loaded this function is triggered.
$(document).ready(function() {

      //Hides the input-field.
      $("#contact_Vemail").hide();
      
      /*
      This function takes the input-value and compares it to
      an regular expression when the input-field loses focus. If the values matches the input-field
      will get an green border and a red border if the values doesn´t match.
      */
      $("#contact_firstname").on('blur', function() {
        var fnameRegex = /^[a-zA-Z]{3,20}$/; 
       var input = $(this);
       
       if (fnameRegex.test(input.val())) {
            input.removeClass("invalid").addClass("valid");
       }else{
        input.removeClass("valid").addClass("invalid");
       }
      });

      /*
      This function takes the input-value and compares it to
      an regular expression when the input-field loses focus. If the values matches the input-field
      will get an green border and a red border if the values doesn´t match.
      */
       $("#contact_lastname").on('blur', function() {
        var lnameRegex = /^[a-zA-Z]{3,20}$/; 
        var input = $(this);
       
       if (lnameRegex.test(input.val())) {
            input.removeClass("invalid").addClass("valid");
       }else{
        input.removeClass("valid").addClass("invalid");
       }
      });

      /*
      This function takes the input-value and compares it to
      an regular expression when the user types something in the input-field. If the values matches the input-field
      will get an green border and a red border if the values doesn´t match.
      */ 
      $("#contact_email").on('input', function() {
       var emailRegex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
       var input = $(this);

        if(input.val.length != 0){
        if(emailRegex.test(input.val())){
          input.removeClass("invalid").addClass("valid");
          $("#contact_Vemail").show();
        }else{
          input.removeClass("valid").addClass("invalid");
        }
      }
      });

      /*
      This function takes the input-value and compares it to
      the value from #contact_email when the input-field loses focus. If the values matches the input-field
      will get an green border and a red border if the values doesn´t match.
      */
      $("#contact_Vemail").on('blur', function() {
        var email = $("#contact_email").val();
        var input = $(this);
       
        if(input.val() != email){
          input.removeClass("valid").addClass("invalid");
        }else{
          input.removeClass("invalid").addClass("valid");
        }
      });
      /*
      This function takes the input-value and compares it to
      an regular expression on keyup. If the values matches the input-field
      will get an green border and a red border if the values doesn´t match.
      */
      $('#contact_note').keyup(function(event) {
        var input = $(this);
        var message = $(this).val();

      if(message){
        input.removeClass("invalid").addClass("valid");
      }else{
        input.removeClass("valid").addClass("invalid");
      } 
    });

    /*
    This function evaluates the form.
    */
    function formSubmit (callback) {

        /*
        When the submit button is pressed it triggers this function.
        */
        $("#submitform").click(function() {

          /*First, we prevent the form to be submitted
          and creates the variables for image, modal and the modals close button.
          */
          event.preventDefault();
            var img = $("img");
            var modal = $(".modal");
            var close = $(".close");
            var data = $("#Form").serializeArray();
            var errorFree = true;

          /*
          We loop through every input-field in the entire form.
          We check to see if the given values are correct and if they are
          we apply an image for every input element. Just to indicate that the were
          submitted correctly. If we have some empty or invalid value in the input fields
          we display an error message. 
          */
          for (var input in data){

          var element = $("#contact_" + data[input]['name']);
          var valid = element.hasClass("valid");
          var errorElement = $("span", element.parent());

          if (!valid){
          errorElement.css('display', 'inline');
          element.addClass('invalid');
          errorFree=false;
        } else{
          element.addClass('valid');
          $(img).attr('src', 'https://people.dsv.su.se/~jojo7367/ok-mark.png');
          errorElement.css('display', 'inline');
        }
      }
    
      //If we have detected some errors in the form we display the modal with some errormessage.
      
      if (!errorFree){
        $("#contact_Vemail").show();
        $(".modalheader").text('Empty Fields');
        $(".modalP").text('There appear to be some empty fields, please make sure they are filled in correctly!');
        $(modal).css('display', 'block');
      }
      /*If the form doesnt contain any errors the modal will be displayed with an message.
        When the user closes the modal a callback function will be triggered.
        The callback function will then submit the form.
      */
      else{
        $(".modalheader").text('Thank You!');
        $(".modalP").text('I have received your information, please stay tune for update.');
        $(".modal").css('display', 'block');
        $(close).click(function(){
          callback();
      }) 
        
      } 
        
      });
      //The actuall callback function that submits the form.
    } formSubmit(function () {
       $("form").submit();
      });
    

  });
