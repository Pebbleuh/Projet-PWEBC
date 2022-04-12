<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a
			class="navbar-item-img logoalign"
			href="index.php?controle=user&action=accueil"
		>
			<img class="navlogo" src="images/Logo (3).png" />
		</a>

		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="true"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a href="./index.php?controle=user&action=accueil" class="navbar-item"> Accueil </a>

			<a href="./index.php?controle=user&action=login" class="navbar-item"> Carte </a>

		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a
						class="button btnInscrire"
						href="index.php?controle=user&action=signin"
					>
						<strong>S'inscrire</strong>
					</a>
					<a
						class="button is-light"
						href="index.php?controle=user&action=login"
					>
						Se connecter
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>