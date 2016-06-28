  /*    var user_id = $(this).val(),
      subscription_id = document.getElementById('btn_save_organizations').name;

      $.ajax({
          type: 'POST',
          url: "/../../api/web/v1/organizations/create_order_repetitions", // creo subscritpor 
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          dataType: 'json', //parametro que se le pasan 
          data: {user: user_id, order_organization: order_organization, remove_repetitions: remove_order_repetition }, 
          context: this,
          success: function(result){
            if (result.success == true){
              document.location.reload(subscription_id, user_id); 
              $('#btn_save_organizations').addClass('hide');
            }else{
              // console.log(result.success);
            } 
          }
      });*/


function validation_for_newslatter(){
      var mail = document.getElementById('mail').value;
      $.ajax({        
          type: 'POST',
          url: "/../../api/v1/subscriptors/create_newslatter", // creo subscritpor 
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          dataType: 'json', //parametro que se le pasan 
          data: {mail: mail}, 
          context: this,
          success: function(result){
            if (result.success == true){
              $("#respuestasub").append("<li><p id='rcorners1'> ¡Felicidades ahora haces parte de nuestro Newslatter!. </p> </li>");
            }else{
             // console.log(result.success);
            } 
          }
      });
      return false;
}

function validation_for_contact(){
      var mail = document.getElementById('mail_contacto').value;
      var name = document.getElementById('name').value;
      var subject = document.getElementById('subject_contacto').value;
      var message = document.getElementById('message_contacto').value;

      $.ajax({    
    
          type: 'POST',
          url: "/../../api/v1/subscriptors/create_contact", // creo subscritpor 
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          dataType: 'json', //parametro que se le pasan 
          data: {mail_contacto: mail, name_contacto: name, subject_contacto: subject, message_contacto :message}, 
          context: this,
          success: function(result){
            if (result.success == true){
              $("#respuestacon").append("<li><p id='rcorners1'> ¡Hemos recibido tu mensaje!, un ejecutivo te contactará. </p> </li>");    
            }else{
              console.log(result.success);
            } 
          }
      });
      return false;
}


