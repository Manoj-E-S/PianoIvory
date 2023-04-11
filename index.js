// Description: This is the main file for the project. It contains the code for the piano and the code for the buttons.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions to handle when white keys are clicked (mousedown), and when they are not clicked (mouseup)

function handleKeyClick(btn) {
  btn.classList.add('white-pressed');
  switch (btn.textContent) {
    case "s":
      var note = new Audio("sounds/C.wav");
      note.play();
      break;

    case "d":
      var note = new Audio("sounds/D.wav");
      note.play();
      break;

    case "f":
      var note = new Audio("sounds/E.wav");
      note.play();
      break;

    case "g":
      var note = new Audio("sounds/F.wav");
      note.play();
      break;

    case "h":
      var note = new Audio("sounds/G.wav");
      note.play();
      break;

    case "j":
      var note = new Audio("sounds/A.wav");
      note.play();
      break;

    case "k":
      var note = new Audio("sounds/B.wav");
      note.play();
      break;

    case "l":
      var note = new Audio("sounds/Chigh.wav");
      note.play();
      break;

    default:
      console.log("no white key");
      break;
  }
}

function handleNoKeyClick(btn) {
  btn.classList.remove('white-pressed');
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions to handle when black keys are clicked (mousedown), and when they are not clicked (mouseup)

function handleBlackKeyClick(btn) {
  btn.classList.add('black-pressed');
  switch (btn.textContent) {
    case "e":
      var note = new Audio("sounds/Cs.wav");
      note.play();
      break;

    case "r":
      var note = new Audio("sounds/Ds.wav");
      note.play();
      break;

    case "y":
      var note = new Audio("sounds/Fs.wav");
      note.play();
      break;

    case "u":
      var note = new Audio("sounds/Gs.wav");
      note.play();
      break;

    case "i":
      var note = new Audio("sounds/As.wav");
      note.play();
      break;

    default:
      console.log("no black key");
      break;
  }
}

function handleNoBlackKeyClick(btn) {
  btn.classList.remove('black-pressed');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////// Event Listeners for the buttons ////////////////////////////////////////////

whiteKeys = document.querySelectorAll('.key');
blackKeys = document.querySelectorAll('.black-key');


// Event listeners for the keys being clicked (mousedown) and not clicked (mouseup)

for (var i = 0; i < whiteKeys.length; i++) {
  whiteKeys[i].addEventListener('mousedown', function () {
    handleKeyClick(this);
  });
  whiteKeys[i].addEventListener('mouseup', function () {
    handleNoKeyClick(this);
  });
}

for (var i = 0; i < blackKeys.length; i++) {
  blackKeys[i].addEventListener('mousedown', function () {
    handleBlackKeyClick(this);
  });
  blackKeys[i].addEventListener('mouseup', function () {
    handleNoBlackKeyClick(this);
  });
}


// Event listeners for the keys being clicked (keydown) and not clicked (keyup) using the keyboard

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "s":
      document.querySelector(".s").classList.add('white-pressed');
      var note = new Audio("sounds/C.wav");
      note.play();
      break;

    case "d":
      document.querySelector(".d").classList.add('white-pressed');
      var note = new Audio("sounds/D.wav");
      note.play();
      break;

    case "f":
      document.querySelector(".f").classList.add('white-pressed');
      var note = new Audio("sounds/E.wav");
      note.play();
      break;

    case "g":
      document.querySelector(".g").classList.add('white-pressed');
      var note = new Audio("sounds/F.wav");
      note.play();
      break;

    case "h":
      document.querySelector(".h").classList.add('white-pressed');
      var note = new Audio("sounds/G.wav");
      note.play();
      break;

    case "j":
      document.querySelector(".j").classList.add('white-pressed');
      var note = new Audio("sounds/A.wav");
      note.play();
      break;

    case "k":
      document.querySelector(".k").classList.add('white-pressed');
      var note = new Audio("sounds/B.wav");
      note.play();
      break;

    case "l":
      document.querySelector(".l").classList.add('white-pressed');
      var note = new Audio("sounds/Chigh.wav");
      note.play();
      break;

    case "e":
      document.querySelector(".e").classList.add('black-pressed');
      var note = new Audio("sounds/Cs.wav");
      note.play();
      break;

    case "r":
      document.querySelector(".r").classList.add('black-pressed');
      var note = new Audio("sounds/Ds.wav");
      note.play();
      break;

    case "y":
      document.querySelector(".y").classList.add('black-pressed');
      var note = new Audio("sounds/Fs.wav");
      note.play();
      break;

    case "u":
      document.querySelector(".u").classList.add('black-pressed');
      var note = new Audio("sounds/Gs.wav");
      note.play();
      break;

    case "i":
      document.querySelector(".i").classList.add('black-pressed');
      var note = new Audio("sounds/As.wav");
      note.play();
      break;

    default:
      console.log("no keyboard key");
      break;
  }
});

document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case "s":
      document.querySelector(".s").classList.remove('white-pressed');
      break;

    case "d":
      document.querySelector(".d").classList.remove('white-pressed');
      break;

    case "f":
      document.querySelector(".f").classList.remove('white-pressed');
      break;

    case "g":
      document.querySelector(".g").classList.remove('white-pressed');
      break;

    case "h":
      document.querySelector(".h").classList.remove('white-pressed');
      break;

    case "j":
      document.querySelector(".j").classList.remove('white-pressed');
      break;

    case "k":
      document.querySelector(".k").classList.remove('white-pressed');
      break;

    case "l":
      document.querySelector(".l").classList.remove('white-pressed');
      break;

    case "e":
      document.querySelector(".e").classList.remove('black-pressed');
      break;

    case "r":
      document.querySelector(".r").classList.remove('black-pressed');
      break;

    case "y":
      document.querySelector(".y").classList.remove('black-pressed');
      break;

    case "u":
      document.querySelector(".u").classList.remove('black-pressed');
      break;

    case "i":
      document.querySelector(".i").classList.remove('black-pressed');
      break;

    default:
      console.log("no keyboard key");
      break;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////