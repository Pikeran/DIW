<h1>sesion iniciada</h1>
<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

//var_dump($_SESSION["user-sesion"]);
echo $_SESSION["user-sesion"]->getId();
?>
