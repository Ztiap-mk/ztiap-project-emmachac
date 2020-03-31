// funkcia po kliknutí myšou ----------------------------------------------------------------------------------

function mouseClicked(e) {

    this.mouseX = e.pageX - gameArea.oX;
    this.mouseY = e.pageY - gameArea.oY;
  
    // menu
    if (typeof menuBtn_01 != "undefined" && menuBtn_01.clicked()) {
      mode = 1;
      play();
    }
    if (typeof menuBtn_02 != "undefined" && menuBtn_02.clicked()) {
      mode = 2;
      play();
    }
    if (typeof menuBtn_03 != "undefined" && menuBtn_03.clicked()) {
      setTimeout(drawRules, 200);
    }


    // chapadla v hre - mod 01
    if (typeof chapadielko1Btn != "undefined" && chapadielko1Btn.clicked()) {
      chapadielko1.height = 200;
      chapadielko1.Y = 200;
    }
    if (typeof chapadielko1Btn != "undefined" && chapadielko2Btn.clicked()) {
      chapadielko2.height = 200;
      chapadielko2.Y = 200;
    }
    if (typeof chapadielko1Btn != "undefined" && chapadielko3Btn.clicked()) {
      chapadielko3.height = 200;
      chapadielko3.Y = 200;
    }
    if (typeof chapadielko1Btn != "undefined" && chapadielko4Btn.clicked()) {
      chapadielko4.height = 200;
      chapadielko4.Y = 200;
    }


    // tlačitka endscreen
    if (typeof endBtn_01 != "undefined" && endBtn_01.clicked()) {
      myScore = 0;
      delete btn;
      drawMenu();
    }
    if (typeof endBtn_02 != "undefined" && endBtn_02.clicked()) {
      myScore = 0;
      delete btn;
      play();
    }
  

    // tlačitka mod 02
    if (typeof chapadielko1Btn2 != "undefined" && chapadielko1Btn2.clicked()) {
      chapadielko1.visible = 0;
      myScore++;
      delete chapadielko1Btn2;
    }
    if (typeof chapadielko2Btn2 != "undefined" && chapadielko2Btn2.clicked()) {
      chapadielko2.visible = 0;
      myScore++;
      delete chapadielko2Btn2;
    }
    if (typeof chapadielko3Btn2 != "undefined" && chapadielko3Btn2.clicked()) {
      chapadielko3.visible = 0;
      myScore++;
      delete chapadielko3Btn2;
    }
    if (typeof chapadielko4Btn2 != "undefined" && chapadielko4Btn2.clicked()) {
      chapadielko4.visible = 0;
      myScore++;
      delete chapadielko4Btn2;
    }
    if (typeof chapadielko5Btn2 != "undefined" && chapadielko5Btn2.clicked()) {
      chapadielko5.visible = 0;
      myScore++;
      delete chapadielko5Btn2;
    }
    if (typeof chapadielko6Btn2 != "undefined" && chapadielko6Btn2.clicked()) {
      chapadielko6.visible = 0;
      myScore++;
      delete chapadielko6Btn2;
    }
    if (typeof chapadielko7Btn2 != "undefined" && chapadielko7Btn2.clicked()) {
      chapadielko7.visible = 0;
      myScore++;
      delete chapadielko7Btn2;
    }
    if (typeof chapadielko8Btn2 != "undefined" && chapadielko8Btn2.clicked()) {
      chapadielko8.visible = 0;
      myScore++;
      delete chapadielko8Btn2;
    }
    if (typeof chapadielko9Btn2 != "undefined" && chapadielko9Btn2.clicked()) {
      chapadielko9.visible = 0;
      myScore++;
      delete chapadielko9Btn2;
    }
  
    if (typeof goBackBtn != "undefined" && goBackBtn.clicked()) {
      delete txt;
      delete btn;
      drawMenu();
    }
}