document.body.style.backgroundColor = "white";
document.body.style.color = "darkslategrey";

function toggleDarkMode() {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lightslategray";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "darkslategrey";
  }
}

let reloadPage = () => {
  window.location.reload();
};

///////////////////////////////////Funktion för svarshantering////////////////////////////////////////////
let checkAnswers = () => {
  console.log("Nu har du allt klickat.");
  let correctAnswers = 0;
  /////////////////////////////////RadiobuttoNS////////////////////////////////////////////
  for (var i = 1; i <= 9; i++) {
    var radioButtons = document.getElementsByName("q" + i);
    for (var a = 0; a < radioButtons.length; a++) {
      var radio = radioButtons[a];
      if (radio.value == "correct" && radio.checked) {
        correctAnswers++;
      }
    }
  }
  ///////////////////////////////Checkboxes AAAAAAAAAAAAAAAAHHHHHHHHHHHH//////////////////////////////////////////
  var checkBoxes = document.getElementsByName("q10");
  console.log(checkBoxes);

// Alltså det här är en SÅ korkad lösning jag kommer bara inte på ngt annat just nu
// Men den funkar ⊹⋛⋋( ՞ਊ ՞)⋌⋚⊹  ‧͙⁺˚*･༓☾❇☽༓･*˚⁺‧͙❇

  let checkedBox = [];
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      checkedBox.push(checkBoxes[i]);
    }
  }
  let correctCheck=0;
  if (checkedBox.length === 2) {
    for (var i = 0; i < checkedBox.length; i++) {
      if(checkedBox[i].value ==="correct"){
        correctCheck++;
      }
    }
  }
  if(correctCheck===2){
    correctAnswers++;
  }
  /////////////////////////////////CHecka resultatwet////////////////////////////////////////////
  let result = document.getElementById("result");

  if (correctAnswers > 7) {
    result.style.color = "green";
  } else if (correctAnswers > 5) {
    result.style.color = "orange";
  } else {
    result.style.color = "red";
  }
  /////////////////////////////////Skriv ut resultat////////////////////////////////////////////
  result.innerText = `Du fick ${correctAnswers} rätt.`;
  document.getElementById("result-container").style.display = "block";
  //////////////////////Ta bort knappen för resultat/////////////////////////////////
  document.getElementById("check-answers").style.display = "none";
};