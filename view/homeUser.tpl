<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Accueil</title>

		<!--CSS-->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
		/>
		<link rel="stylesheet" href="style/navbar.css" />

		<!--jQuery-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	</head>

	<body>
		<!-- <section class="section"> -->

		<!-- <div class="container"> -->
		<header>
			<!-- <script id="replace_with_navbar" type="module" src="script/navbar.js" defer ></script> -->
			<?php require("view/navbarUser.html");?>
		</header>

		<section class="hero is-medium is-fullwidth video is-fullheight">
			<!-- <div class="hero-head"> -->

			<!-- </div> -->
			<div class="hero-video">
				<video id="videoIntro" playsinline autoplay muted loop>
					<source src="images/video_intro.mp4" type="video/mp4" />
				</video>
			</div>
			<div class="hero-body">
				<div class="block container has-text-centered">
					<div class="textIntro">
						<h2 class="textAccueil title is-2 has-text-white">
							Bienvenue ! Vous pouvez à présent accéder à votre carte.
						</h2>
					</div>
					<br /><br />
					<button
						id="mapAccess"
						class="button is-normal is-responsive is-info is-rounded is-medium"
					>
						<a
							id="value"
							href="index.php?controle=map&action=showMap"
							style="color: white"
							>Cliquez-ici !</a
						>
					</button>
				</div>
			</div>
		</section>

		<!-- </div> -->

		<!-- <div class="container is-fluid is-max-desktop">
    <video id="background-video" preload="true" autoplay loop muted>
      <source src="../images/video_intro.mp4" type="video/mp4">
    </video>
  </div>

  <div class="container has-text-centered" id="content">
    <h2 class="title is-2">Une carte pratique et lisible pour visualiser le monde.</h2>
    <button class="button is-normal is-responsive is-info is-rounded is-medium"> Cliquez-ici !</button>
  </div> -->

		<section class="section">
			<div class="columns">
				<div class="column is-narrow is-offset-1" style="width: 600px">
					<p class="title is-2 is-spaced" style="margin-top: 10%">
						Une carte personnalisée à souhait
					</p>

					<p class="subtitle is-4">
						Notre carte est personnalisée et permet d'ajouter vos lieux favoris.
						Vous pouvez également personnaliser la couleur et le style de votre
						carte.
					</p>
				</div>

				<div class="column is-offset-1">
					<figure class="image is-fullwidth">
						<img src="images/image2.jpg" />
					</figure>
				</div>
			</div>
		</section>

		<footer class="footer">
			<div class="content has-text-centered">
				<img
					id="logo"
					src="images/Logo (3).png"
					href="home.html"
					width="128"
					height="128"
				/>
				<p>
					<strong>© 2022 Map'r.</strong>
				</p>
			</div>
		</footer>

		<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script> -->
		<script src="script/home.js"></script>
	</body>
</html>
