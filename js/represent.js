var intro,
    icon,
    icon_img,
    current_icon,
    random_icons,
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

  random_icons = [];
  while (random_icons.length < icon_names.length){
    var n = getRandomInt(0, icon_names.length - 1);
    if (!(icon_names[n] in random_icons)){
      random_icons.push(icon_names[n]);
    }
  }
  current_icon = -1;

  display_next_icon();
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function display_next_icon(){
  current_icon++;
  var icon_name = random_icons[current_icon];
  icon_img.setAttribute("src", "images/SVG/" + icon_name + ".svg");
}

function answer(button){
  if (button.getAttribute("id") == random_icons[current_icon]){
    correct_answer();
  } else {
    incorrect_answer();
  }
}


function correct_answer(){
  alert("OK");
}


function incorrect_answer(){
  alert("nananinanão!");
}


