let formulario = document.querySelector('#contacto');
let boton = document.querySelector('#btnenviar');
let inpNombre = document.querySelector('#inpnombre');
let inpCorreo = document.querySelector('#inpcorreo');
let inpWhatsapp = document.querySelector('#inpwhatsapp');
let inpMensaje = document.querySelector('#textareamensaje');

let expRegs = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u,
    correo: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i,
    whatsapp: /^\+?[0-9]{10,}(?:[ -][0-9]+)*$/
}

let formData = new FormData(formulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!expRegs.nombre.test(inpNombre.value) || inpNombre.value === ''){
        inpNombre.focus();
        Swal.fire({
            title: "Nombre no valido",
            text: "Revisa que el campo nombre no este vacio y que no contenga números o carácteres",
            icon: "warning"
        });
        return false;
    }
    else if(!expRegs.correo.test(inpCorreo.value) || inpCorreo.value === ''){
        inpCorreo.focus();
        Swal.fire({
            title: "Correo no valido",
            text: "Revisa que el campo correo no este vacio y que estes ingresando un correo valido, ejemplo: \n correo@example.com",
            icon: "warning"
        });
        return false;
    }
    else if(!expRegs.whatsapp.test(inpWhatsapp.value) || inpWhatsapp.value === ''){
        inpWhatsapp.focus();
        Swal.fire({
            title: "WhatsApp no valido",
            text: "Revisa que el campo whatsapp no este vacio y que estes ingresando un número de teléfono valido.",
            icon: "warning"
        });
        return false;
    }
    else if(inpMensaje.value === ''){
        inpMensaje.focus();
        Swal.fire({
            title: "Mensaje vacío",
            text: "Revisa que el campo mensaje no este vacío.",
            icon: "warning"
        });
    }
    else{
        fetch('controllers/enviarMensaje.php', {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(res => {
            if(!res){
                Swal.fire({
                    title: "Error de envío",
                    text: "Lo sentimos, hubo un error al enviar tu mensaje, vuelve a intentarlo o regresa más tarde.\n Recuerda que nos puedes contactar por diferentes medios.",
                    icon: "error"
                });
            }else{
                formulario.reset();
                Swal.fire({
                    title: "¡Listo!",
                    text: "El mensaje fue enviado exitosamente, nos pondremos en contacto dentro de poco.",
                    icon: "success"
                });
            }
        })
        .catch(err => {
            formulario.reset();
            Swal.fire({
                title: "Error de envío",
                text: "Lo sentimos, hubo un error al enviar tu mensaje, vuelve a intentarlo o regresa más tarde.\n Recuerda que nos puedes contactar por diferentes medios.",
                icon: "error"
            });
        });
    }


});