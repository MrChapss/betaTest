// INITIALIZE THE QUESTIONS, USER INPUT, SUBMITBTN
const ezQuestions = document.getElementById("ezQuestions"),
userInputs = document.getElementById("userInputs"),

// INITIALIZE THE ID'S IN HTML TO CHANGE THE IMAGES
boyAlive = document.getElementById("boyChar"),
girlAlive = document.getElementById("girlChar"),
deadBoyImg = document.createElement('img'),
deadGirlImg = document.createElement('img');
deadBoyImg.src = 'images/girldead-removebg-preview.png';
deadGirlImg.src = 'images/boydead-removebg-preview.png';

//HEIGHT AND WIDTH OF THE CHARACTERS WHEN BECOMING DEAD
deadBoyImg.style.height = '190px';
deadBoyImg.style.width = '230px';
deadBoyImg.style.margin = '130px 180px 0';
deadGirlImg.style.height ='190px';
deadGirlImg.style.width = '230px';
deadGirlImg.style.margin = '130px 180px 0';

// #1 question and choices
const choice1a = document.getElementById("choice1a"),
choice1b = document.getElementById("choice1b"),
choice1c = document.getElementById("choice1c");
ezQuestions.textContent = "What is the capital of France?";
choice1a.textContent = "Berlin";
choice1b.textContent = "Madrid";
choice1c.textContent = "Paris";

//THE ENTER KEY WILL DO "SUBMIT BUTTON" THAT MATCHES CORRECT ANSWER
userInputs.addEventListener("keydown", function(event) {
  if (event.key === 'Enter'){
    if (userInputs.value === "Paris") {
      girlAlive.parentNode.replaceChild(deadBoyImg, girlAlive);
  } else {
      boyAlive.parentNode.replaceChild(deadGirlImg, boyAlive);
  }
  }
});  

// YOU NEED TO ADD ONCHANGE EVENT AND LINK IT INTO IF ELSE
// MATAPOS KO 'TO BUKAS