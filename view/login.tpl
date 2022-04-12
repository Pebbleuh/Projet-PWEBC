<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Connexion</title>

		<!--CSS-->
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

		<h2 class="title is-h2 has-text-centered">Connexion</h2>

		<div class="container">
			<form
				class="box"
				action="index.php?controle=user&action=login"
				method="post"
			>
				<div class="field">
					<p class="control has-icons-left">
						<input
							name="login"
							class="input"
							placeholder="Login"
							value="<?php echo $login ?>"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-user"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<p class="control has-icons-left">
						<input
							name="password"
							class="input"
							type="password"
							placeholder="Mot de passe"
							value="<?php echo $password ?>"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-lock"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<p class="control">
						<input
							type="submit"
							class="button is-success"
							value="Se connecter"
						/>
					</p>
				</div>

				<div>
					<p class="has-text-danger"><?php echo $msg; ?></p>
				</div>
			</form>
		</div>
	</body>
</html>
