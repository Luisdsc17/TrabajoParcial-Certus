/* Al estar lsito el documento */
$("document").ready(function(){
    /* Capturar evento submit */
    $("#formCreateAccount").submit(function(){
        
        /* Confirmar si se envia o no el formulario */
        return validarDatos(); 

    })

})


/* Función Validar Datos */
function validarDatos(){
    /* Preguntar si se envia el formulario */
    let pregunta=confirm("¿Seguro que desea enviar?");
    if(pregunta){//Caso presiona Aceptar
        /* Obetener el valor de los Campos */
        let inputName=$("#txtName")[0].value;/* Nombres */
        let inputLastName=$("#txtApellido")[0].value;/* Apellidos */
        let inputDNI=$("#intDNI")[0].value;/* DNI */
        let inputCorreo=$("#txtEmail")[0].value;/* Correo Electrónico */
        let inputFecha=$("#inputNac")[0].value;/* Fecha de Nacimiento */
        let inputCel=$("#intPhone")[0].value;/* Teléfono */
        let inputAdd=$("#txtAddress1")[0].value;/* Dirección */
        let inputUser=$("#txtUser")[0].value;/* Usuario */
        let apoyoInputUser=$("#apoyo")[0];/* Texto de apoyo para el Usuario */
        let inputPassword=$("#txtContraseña")[0].value;/* Contraseña */
        let inputRePassword=$("#txtrepassword")[0].value;/* Repetir Contraseña */
        let apoyoInputPassword=$("#apoyoInputPassword")[0];/* Texto de apoyo para la Contraseña */
        let inputCheckbox=$("#bolAccept").prop("checked"); /* Valor del Checkbox */

        /* Validar Formulario */
        
        /* Validación del Nombre */
        if(inputName.length>50 || inputName.length<2){
            alert("Su nombre no es aceptado.");
            return false;
        }

        /* Validación del Apellido */
        if(inputLastName.length>50 || inputLastName.length<2){
            alert("Sus apellidos no son aceptados.");
            return false;
        }

        /* Validación del DNI */
        if(inputDNI.length!=8){
            alert("Sus DNI es incorrecto.");
            return false;
        }

        /* Validación del Correo Electrónico */
        if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputCorreo)==false){
            alert("Su correo electronico está mal");
            return false;
        }

        /* Validación de la Fecha de Nacimiento */
        if(inputFecha==''){
            alert("Ingrese su Fecha de Nacimiento");
            return false;
        }

        /* Validación del Teléfono */
        if(inputCel.length>14 || inputCel.length<8){
            alert("Su número de teléfono es incorrecto.");
            return false;
        }

        /* Validación de la Dirección */
        if(inputAdd.length==0){
            alert("Ingrese su dirección");
            return false;
        }

        /* Validación del Usuario */
        if(inputUser.length < 4 || inputUser.length>16 || inputUser.length==null){
            /*Cambiar el atributo style*/
            apoyoInputUser.setAttribute("style","");
            alert("El usuario es invalido");
            return false;
        }

        /* Validación de la Contraseña */
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(inputPassword) == false){
            $("#txtContraseña")[0].value = "";
            $("#txtrepassword")[0].value = "";
            alert("La contraseña NO CUMPLE con los requisitos mínimos.");
            return false;
        }

        /*Validar si las contraseñas son iguales*/
        if(inputPassword!=inputRePassword){
            /*Cambiar el atributo style*/
            apoyoInputPassword.setAttribute("style","");
            document.getElementById("txtrepassword").value="";
            alert("Las contraseñas no son iguales");
            return false;    
        }

        /* Validación del Checkbox */
        if(inputCheckbox==false){
            alert("Marque la casilla que indica que usted acepta las condiciones");
            return false;
        }

        /* Mandar Confirmación de envio */
        return true;

    }else{//Caso presiona Cancelar 
        return false;
    }
}
