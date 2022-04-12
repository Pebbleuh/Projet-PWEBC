<?php

function identification($pseudo, $password)
{
	require('connectDB.php');

	$sql = "SELECT * FROM UTILISATEUR
	WHERE LoginUser = :pseudo AND PasswordUser = :password";
	try {
		$cmd = $pdo->prepare($sql);
		$cmd->bindParam(':pseudo', $pseudo, PDO::PARAM_STR);
		$cmd->bindParam(':password', $password, PDO::PARAM_STR);
		$bool = $cmd->execute();

		if ($bool) {
			$res = $cmd->fetchAll(PDO::FETCH_ASSOC); // tableau d'enregistrements
			$_SESSION["profil"] = $res[0];
		}
	} catch (PDOException $e) {
		echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
		die(); // On arrête tout.
	}

	return count($res) > 0;
}

function inscription($nom, $prenom, $pseudo, $mdp)
{
	require('connectDB.php');

	// $mdpCrypt = md5($mdp);
	$mdpCrypt = $mdp;

	$sql = 'INSERT INTO UTILISATEUR VALUES (DEFAULT, :nom, :prenom, :pseudo, :mdp)';

	try {
		$cmd = $pdo->prepare($sql);
		$cmd->bindParam(':nom', $nom, PDO::PARAM_STR);
		$cmd->bindParam(':prenom', $prenom, PDO::PARAM_STR);
		$cmd->bindParam(':pseudo', $pseudo, PDO::PARAM_STR);
		$cmd->bindParam(':mdp', $mdpCrypt, PDO::PARAM_STR);

		$bool = $cmd->execute();

		return $bool;
	} catch (Exception $e) {
		echo utf8_encode("Echec de insert : " . $e->getMessage() . "\n");
		die(); // On arrête tout.
	}

	return false;
}
