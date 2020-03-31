// nakreslenie endscreen --------------------------------------------------------------------------------------

function drawEndScreen() {
    
  endBtn_01 = new btn(45, 290, 300, 365); //vytvorenie objektov tlačidiel
  endBtn_02 = new btn(325, 575, 300, 365);

  scoreTextEndScreen_01 = new txt(100, 200, "50px", "black", "0");
  scoreTextEndScreen_02 = new txt(
    gameArea.canvas.width / 2 - 10,
    250,
    "60px",
    "black",
    "0"
  );

  gameArea.clear(); //vyčistenie canvas
  gameArea.context.drawImage(
    //nakreslenie obrázku
    menu02,
    0,
    0,
    gameArea.canvas.width,
    gameArea.canvas.height
  );

  scoreTextEndScreen_01.text = "Your score was: ";
  scoreTextEndScreen_02.text = myScore;

  scoreTextEndScreen_01.drawMe();
  scoreTextEndScreen_02.drawMe();
}