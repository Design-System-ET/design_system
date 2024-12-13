document.addEventListener('DOMContentLoaded', function () {

    emailjs.init('0VyDd9Vl4u9VIEXY-'); 

    document.getElementById('enviar').addEventListener('click', function () {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      const params = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        mensaje: mensaje
      };
  
      emailjs.send('service_8lq7rwn', 'template_c6mwx5t', params)
        .then(function (response) {
          //alert('Correo enviado exitosamente!');

          Swal.fire({
            title: 'Email Enviado',
            text: '¡Se envio correctamente tu mensaje!',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload(true);
            }
          });
          
  
          //location.reload(true);

        }, function (error) {
          //alert('Error al enviar el correo: ' + JSON.stringify(error));
          
          Swal.fire({
            title: 'Envio Fallido',
            text: '¡ERROR - hubo un error al intentar enviar su mensaje',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload(true);
            }
          });
        
        });
    });
  });
  
  