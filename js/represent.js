var intro,
    icon,
    icon_img,
    current_icon = "",
    icon_names = [
  "agender",
  "androgynous",
  "bisexual_female",
  "bisexual_male",
  "gay",
  "heterosexual",
  "intersex",
  "lesbian",
  "male",
  "neutrois",
  "non_binary",
  "other_gender",
  "questioning",
  "transexual",
  "woman"
];

function init(){ 
  intro = document.getElementById("intro");
  icon = document.getElementById("icon");
  icon_img = document.getElementById("icon_img");

  intro.onclick = new_game;
}

function new_game(){
  intro.setAttribute("style", "display:none");
  icon.setAttribute("style", "display:block");

  draw_random_icon();
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw_random_icon(){
  var n = getRandomInt(0, icon_names.length - 1);
  current_icon = icon_names[n];
  icon_img.setAttribute("src", "images/SVG/" + current_icon + ".svg");
}
