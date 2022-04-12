<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Inscription</title>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
		/>
		<link rel="stylesheet" href="style/navbar.css" />

		<script
			src="https://kit.fontawesome.com/f0cb48158b.js"
			crossorigin="anonymous"
		></script>
	</head>
	<body>
		<header>
			<?php require("view/navbar.tpl");?>
		</header>

		<section class="section">
			<form class="box" action="index.php?controle=user&action=signin" method="post">
				<div class="column is-half is-offset-one-quarter">
					<h1 class="title">Inscription</h1>

					<div class="field">
						<label for="NomUser" class="label">Nom</label>
						<div class="control has-icons-left">
							<input
								id="NomUser"
								name="NomUser"
								class="input"
								type="text"
								placeholder="Nom"
							/>
							<span class="icon is-small is-left">
								<i class="fa-solid fa-id-card"></i>
							</span>
						</div>
					</div>

					<div class="field">
						<label for="PrenomUser" class="label">Prénom</label>
						<div class="control has-icons-left">
							<input
								id="PrenomUser"
								name="PrenomUser"
								class="input"
								type="text"
								placeholder="Prénom"
							/>
							<span class="icon is-small is-left">
								<i class="fa-solid fa-id-card"></i>
							</span>
						</div>
					</div>

					<div class="field">
						<label for="LoginUser" class="label">Pseudo</label>
						<div class="control has-icons-left">
							<input
								class="input"
								id="LoginUser"
								name="LoginUser"
								type="text"
								placeholder="Pseudo"
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-user"></i>
							</span>
						</div>
					</div>

					<div class="field">
						<label for="PasswordUser" class="label">Mot de passe</label>
						<div class="control has-icons-left">
							<input
								class="input"
								id="PasswordUser"
								name="PasswordUser"
								type="password"
								placeholder="Mot de passe"
							/>
							<span class="icon is-small is-left">
								<i class="fa-solid fa-lock"></i>
							</span>
						</div>
					</div>

					<div class="field">
						<div class="control">
							<label for="CGU" class="checkbox">
								<input id="CGU" name="CGU" type="checkbox" />
								J'ai lu et j'accepte les
								<a href="#">conditions d'utilisation.</a>
							</label>
						</div>
					</div>

					<div class="field is-grouped">
						<div class="control">
							<input
								type="submit"
								class="button is-success"
								value="S'inscrire"
							/>
						</div>
						<div class="control">
							<button class="button is-link is-light">
								<a href="index.php">Annuler</a>
							</button>
						</div>
					</div>

					<div>
						<p class="has-text-danger"><?php echo $msg; ?></p>
					</div>
				</div>
			</form>
		</section>
	</body>
</html>
