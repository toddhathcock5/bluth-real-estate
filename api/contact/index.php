<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST[email])) die();

if ($_POST) {
    http_response_code(200);
    $subject = $_POST['name'];
    $to = "toddhathcock5@gmail.com";
    $from = $_POST['email'];

    $msg = $_POST[phone] . $_POST['address'] . $_POST['how'] . $_POST['budget'];

    $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
    mail($to, $subject, $msg, $headers);
    
    echojson_encode(array(
        "sent" => true
    ));
} else {
    echojson_encode(["sent" => false, "message" => "There was a problem with your submission"]);
}

?>