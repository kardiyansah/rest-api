<?php 

// Cara merubah array assoc menjadi json
// $book = [
//     [
//         "title" => "Atamic habits",
//         "writer" => "James clear",
//         "publication_year" => 2018
//     ],
//     [
//         "title" => "The psychology of money",
//         "writer" => "Morgan housel",
//         "publication_year" => 262
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpmvc', 'root', '');
$db = $dbh->prepare('SELECT * FROM books');
$db->execute();
$books = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($books);
echo ($data);

?>