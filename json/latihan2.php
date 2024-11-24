<?php 

// Cara merubah file json menjadi array assoc
$data = file_get_contents('example.json');
$bio = json_decode($data, true);

var_dump($bio);
echo $bio[1]['favourite_channels']['channel1'];

?>