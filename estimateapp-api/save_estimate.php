<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'conn.php';

$_POST = json_decode(file_get_contents("php://input"),true);

$cod = $_POST['cod'];
$client = $_POST['client'];
$date = $_POST['date'];
$discount = $_POST['discount'];
$total_value = $_POST['total_value'];

 
$insert_query = "INSERT INTO estimate (cod, client_name, date, discount, total_value)  VALUES  ('".$cod."','".$client."', '".$date."',".$discount.", ".$total_value.")";

$result = mysqli_query($con, $insert_query);

$items = $_POST['items'];

foreach ($items as $item) {
    $insert_item = "INSERT INTO estimate_items (cod_estimate, name, qtd, value) VALUES ('".$cod."','".$item['name']."',".$item['qtd'].",".$item['value'].")";
    mysqli_query($con, $insert_item);
}




?>
