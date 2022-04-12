var btnAccessMap = $("#mapAccess");
var valeurBtn = $("#value");

$(document).ready(function () {
	// Now to start autoTyping just call the autoType function with the
	// class of outer div
	// The second paramter is the speed between each letter is typed.
	autoType(".textIntro", 50);
});

// S'il existe (si l'utilisateur est connecté)
if (btnAccessMap) {
	btnAccessMap.onclick = function () {
		valeurBtn.innerHTML = "";
		btnAccessMap.className =
			"button is-normal is-responsive is-info is-rounded is-medium is-loading";
	};
}

function autoType(elementClass, typingSpeed) {
	var thhis = $(elementClass);
	thhis.css({
		position: "relative",
		display: "inline-block",
	});
	thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
	thhis = thhis.find(".textAccueil");
	var text = thhis.text().trim().split("");
	var amntOfChars = text.length;
	var newString = "";
	thhis.text("|");
	setTimeout(function () {
		thhis.css("opacity", 1);
		thhis.prev().removeAttr("style");
		thhis.text("");
		for (var i = 0; i < amntOfChars; i++) {
			(function (i, char) {
				setTimeout(function () {
					newString += char;
					thhis.text(newString);
				}, i * typingSpeed);
			})(i + 1, text[i]);
		}
	}, 1500);
}
