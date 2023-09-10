let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
}
nextSequence();
// $(`#${gamePattern}`).fadeIn(100).fadeOut(100).fadeIn(100);

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
 playSound(userChosenColour);
 animatePress(userChosenColour);
});


function playSound(name) {

    let sound = new Audio(`./sounds/${name}.mp3`);
    sound.play();
    
}

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed")

    setTimeout(() => {
      $(`#${currentColour}`).removeClass("pressed")
    }, 100);
}