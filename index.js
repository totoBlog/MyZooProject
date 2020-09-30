// jshint esversion: 6

for (let i = 0; i < document.querySelectorAll(".text").length; i++) {
document.querySelectorAll(".text")[i].addEventListener("click", function() {

    const buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {

    case "d":
      var soundDog = new Audio('sound/dog.mp3');
      soundDog.play();
      break;

    case "c":
      var soundCat = new Audio('sound/cat.mp3');
      soundCat.play();
      break;

    case "h":
      var soundHorse = new Audio('sound/horse.mp3');
      soundHorse.play();
      break;

    case "e":
      var soundElephant = new Audio("sound/elephant.mp3");
      soundElephant.play();
      break;

    case "s":
      var soundSheep = new Audio("sound/sheep.mp3");
      soundSheep.play();
      break;

    case "?":
      var soundAnonymous = new Audio("sound/anonymous.mp3");
      soundAnonymous.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
