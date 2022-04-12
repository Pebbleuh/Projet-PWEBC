<?php
// Voir appel dans map.js

require('connectDB.php');

$idUser = $_POST["idUser"];

$sql = "SELECT * FROM Lieu WHERE IdUser = :idUser";
try {
    $cmd = $pdo->prepare($sql);
    $cmd->bindParam(':idUser', $idUser, PDO::PARAM_INT);
    $cmd->execute();
    echo json_encode($cmd->fetchAll(PDO::FETCH_ASSOC)); // Récupéré par la fonction de callback en JS
} catch (PDOException $e) {
    echo utf8_encode("Echec de insert : " . $e->getMessage() . "\n");
    die();
}

exit;
