// nakreslenie menu --------------------------------------------------------------------------------------

function drawMenu() {

    menuBtn_01 = new btn(195, 445, 80, 140); //vytvorenie objektov tlačidiel
    menuBtn_02 = new btn(195, 445, 200, 260);
    menuBtn_03 = new btn(195, 445, 290, 360);
  
    gameArea.clear(); //vyčistenie canvas
    gameArea.context.drawImage(
      //nakreslenie obrázku
      menu01,
      0,
      0,
      gameArea.canvas.width,
      gameArea.canvas.height
    );
  }