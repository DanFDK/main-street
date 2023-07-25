<?php
mb_internal_encoding("UTF-8");

$nombre = $POST['nombre'];
$correo = $POST['correo'];
$whatsapp = $POST['whatsapp'];
$mensaje = $POST['mensaje'];

if($nombre == null && $correo == null && $whatsapp == null && $mensaje == null){
    echo json_encode(false);
    exit();
}

$nombre = utf8_encode($nombre);
$correo = utf8_encode($correo);
$whatsapp = utf8_encode($whatsapp);
$mensaje = utf8_encode($mensaje);

$asunto = utf8_encode("$nombre solicita información");
$destinatario = "contacto@mainstreet.com";
$cuerpo = "Correo: $correo" . "\r\n" . "WhatsApp: $whatsapp" . "\r\n" . "$mensaje";
// $cabecera = "From: $destinatario" . "\r\n" . 
//             "No-Reply: $destinatario" . "\r\n" .
//             "X-Mailer: PHP/" . phpversion() . "\r\n" .
//             "Content-Type: text/plain; charset=utf-8";
$cabecera = "From: no-reply@example.com" . "\r\n" . 
            "No-Reply: no-reply@example.com" . "\r\n" .
            "X-Mailer: PHP/" . phpversion() . "\r\n" .
            "Content-Type: text/plain; charset=utf-8";

$send = @mail($destinatario,$asunto,$cuerpo,$cabecera);

if($send){
    echo json_encode(true);
}else {
    echo json_encode(false);
}