<?php

session_start();
@header("Content-type: application/json");
$json = "";
if (isset($_GET['inicio']) && $_GET['inicio'] == 'si') {
    $_SESSION['ruta'] = "img/578.jpg";
    $json .= '{"ruta":"' . $_SESSION['ruta'] . '",';
}

if (isset($_GET['pista']) && $_GET['pista'] == 'si') {
    $_SESSION['pista'] = "Es una prenda de ropa...";
    $json .= '{"pista":"' . $_SESSION['pista'] . '",';
}

if (isset($_GET['respuestas']) && $_GET['respuestas'] == 'si') {
    $_SESSION['respuestas'] = array("Los pantalones","Los zapatos");

    $json .= '{"good":"' . $_SESSION['respuestas'][0] . '",' .
            '"bad":"' . $_SESSION['respuestas'][1] . '",';
}

$json .= '"":""}';

echo($json);
?>