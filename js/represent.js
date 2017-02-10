const DELAY = 1000;

var score,
    game_is_running = false,
    intro,
    icon,
    icon_img,
    result_correct,
    result_incorrect,
    gameover,
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
  "transgender",
  "female"
];

function init(){ 
  intro = document.getElementById("intro");
  icon = document.getElementById("icon");
  icon_img = document.getElementById("icon_img");
  result_correct = document.getElementById("result_correct");
  result_incorrect = document.getElementById("result_incorrect");
  gameover = document.getElementById("gameover");

  intro.onclick = new_game;
  gameover.onclick = function(){
    gameover.setAttribute("style", "display:none");
    intro.setAttribute("style", "display:block");
  }
}

function new_game(){
  intro.setAttribute("style", "display:none");
  icon.setAttribute("style", "display:block");

  score = 0;
  random_icons = [];
  while (random_icons.length < icon_names.length){
    var n = getRandomInt(0, icon_names.length - 1);
    if (!(icon_names[n] in random_icons)){
      random_icons.push(icon_names[n]);
    }
  }
  current_icon = -1;

  game_is_running = true;
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
  if (!game_is_running) return;

  if (button.getAttribute("id") == random_icons[current_icon]){
    correct_answer();
  } else {
    incorrect_answer();
  }

  next_round();
}

function game_over(){
  game_is_running = false;
  icon.setAttribute("style", "display:none");
  result_incorrect.setAttribute("style", "display:none");
  result_correct.setAttribute("style", "display:none");
  gameover.setAttribute("style", "display:block");
}

function next_round(){
  if (current_icon == icon_names.length - 1){
    window.setTimeout(game_over, DELAY);
  } else {
    display_next_icon();
    window.setTimeout(function(){
      result_correct.setAttribute("style", "display:none");
      result_incorrect.setAttribute("style", "display:none");
      icon.setAttribute("style", "display:block")
    }, DELAY);
  }
}

function correct_answer(){
  score++;
  icon.setAttribute("style", "display:none");
  result_correct.setAttribute("style", "display:block");
}


function incorrect_answer(){
  icon.setAttribute("style", "display:none");
  result_incorrect.setAttribute("style", "display:block");
}
