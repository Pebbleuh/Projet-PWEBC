<?php

function showMap()
{
    if (isset($_SESSION["profil"])) {
        require "view/map.html";
    } else {
        header("Location: index.php");
    }
}
