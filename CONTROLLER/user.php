<?php

function login()
{
	$login = isset($_POST['login']) ? ($_POST['login']) : '';
	$password = isset($_POST['password']) ? ($_POST['password']) : '';
	$msg = "";

	if (count($_POST) == 0)
		require("./view/login.tpl");
	else {
		if ($login == '' || $password == '') {
			$msg = "Paramètre(s) manquant(s)...";
			require("./view/login.tpl");
		} else {
			require("./model/userDB.php");
			if (identification($login, $password)) {
				// $_SESSION['profil'] = $profil;
				require("./view/homeUser.tpl");
			} else {
				$msg = "Nom d'utilisateur ou mot de passe incorrect.";
				require("./view/login.tpl");
			}
		}
	}
}

function signin()
{
	$nom = isset($_POST['NomUser']) ? ($_POST['NomUser']) : '';
	$prenom = isset($_POST['PrenomUser']) ? ($_POST['PrenomUser']) : '';
	$pseudo = isset($_POST['LoginUser']) ? ($_POST['LoginUser']) : '';
	$mdp = isset($_POST['PasswordUser']) ? ($_POST['PasswordUser']) : '';
	$cgu = isset($_POST['CGU']) ? ($_POST['CGU']) : '';

	$msg = "";

	if (count($_POST) == 0) {
		require("./view/signin.tpl");
	} else {
		if ($nom == '' || $prenom == '' || $pseudo == '' || $mdp == '') {
			$msg = "Paramètre(s) manquant(s)...";
			require("./view/signin.tpl");
		} elseif (!$cgu) {
			$msg = "Vous devez accepter nos conditions d'utilisation.";
			require("./view/signin.tpl");
		} else {
			require("./model/userDB.php");

			if (inscription($nom, $prenom, $pseudo, $mdp)) {
				identification($pseudo, $mdp); // pour initialiser $_SESSION avec tous les champs
				require("./view/homeUser.tpl");
			} else {
				$msg = "Utilisateur déjà inscrit !";
				require("./view/signin.tpl");
			}
		}
	}
}

function deconnexion()
{
	session_destroy();
	header("Location: index.php");
}

function accueil()
{
	require("./view/home.tpl");
}

function accueilUser()
{
	require("./view/homeUser.tpl");
}

