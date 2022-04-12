<?php
// Voir appel dans map.js

require('connectDB.php');

$long = $_POST["long"];
$lat = $_POST["lat"];
$idUser = $_POST["idUser"];

$sql = "DELETE FROM Lieu WHERE LongitudeLieu = :long AND LatitudeLieu = :lat AND IdUser = :idUser";
try {
    $cmd = $pdo->prepare($sql);
    $cmd->bindParam(':long', $long, PDO::PARAM_STR);
    $cmd->bindParam(':lat', $lat, PDO::PARAM_STR);
    $cmd->bindParam(':idUser', $idUser, PDO::PARAM_INT);
    $cmd->execute();
} catch (PDOException $e) {
    echo utf8_encode("Echec de insert : " . $e->getMessage() . "\n");
    die();
}

exit;
