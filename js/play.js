// spustenie obnovovacieho intervalu -----------------------------------------------------------------------

function play() {

    delete menuBtn_01;
    delete menuBtn_02;
    delete menuBtn_03;

    // mod 01
    if (mode == 1) {
        fps = 60;
        scoreText = new txt(480, 100, "25px", "black", "0");
        
        chapadielko1 = new chapadlo(100, 200, 200);
        chapadielko1Btn = new btn(125, 175, 200, 400);
    
        chapadielko2 = new chapadlo(200, 200, 200);
        chapadielko2Btn = new btn(225, 275, 200, 400);
    
        chapadielko3 = new chapadlo(300, 200, 200);
        chapadielko3Btn = new btn(325, 375, 200, 400);
    
        chapadielko4 = new chapadlo(400, 200, 200);
        chapadielko4Btn = new btn(425, 475, 200, 400);
    
        redrawInterval = setInterval(updateGameAreaPlay1, 1000 / fps);
    }
  
    // mód 02
    if (mode == 2) {
        fps = 3;
        sec = 60;
        scoreTextMode02 = new txt(500, 20, "25px", "black", "0");
        timeLeft = new txt(10, 20, "25px", "black", "0");
        
        chapadielko1 = new chapadlo(30, 180, 200);
        pena1 = new pena(68, 370, 36, 30);
    
        chapadielko2 = new chapadlo(200, 140, 200);
        pena2 = new pena(235, 320, 36, 30);
    
        chapadielko3 = new chapadlo(320, 140, 200);
        pena3 = new pena(355, 315, 36, 30);
    
        chapadielko4 = new chapadlo(460, 180, 200);
        pena4 = new pena(500, 360, 36, 30);
    
        chapadielko5 = new chapadlo(100, 80, 125);
    
        chapadielko6 = new chapadlo(175, 120, 125);
    
        chapadielko7 = new chapadlo(300, 80, 125);
    
        chapadielko8 = new chapadlo(500, 80, 125);
    
        chapadielko9 = new chapadlo(220, 25, 90);
        chapadielko9.width = 60;
    
        redrawInterval = setInterval(updateGameAreaPlay2, 1000 / fps);
    }
  }

//funkcia mod 01 -------------------------------------------------------------------------------------------------

function updateGameAreaPlay1() {

    frameNo += 1;
  
    // zvysovanie narocnosti
    if (myScore != 0 && myScore % 5 == 0) {
        diff += 1 / 120;
    }
  
    if (frameNo > 60) {
        frameNo = 0;
        myScore += 1;
    } //počítanie čísla snímku
    gameArea.clear(); //čistenie canvas
  
    // lodka
    if (frameNo <= 30) {
      boat.drawMe(1);
    }
    if (frameNo > 30) {
      boat.drawMe(2);
    }
  
    switch (
      true //prehrávanie animácie
    ) {
      // pozadie + chapadla
        case frameNo <= 15:
            gameArea.context.drawImage(
                background01_01,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );

            chapadielko1.drawMe(1);
            chapadielko2.drawMe(2);
            chapadielko3.drawMe(3);
            chapadielko4.drawMe(2);
            break;


        case frameNo <= 30:
            gameArea.context.drawImage(
                background01_02,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );

            chapadielko1.drawMe(2);
            chapadielko2.drawMe(3);
            chapadielko3.drawMe(2);
            chapadielko4.drawMe(1);
            break;


        case frameNo <= 45:
            gameArea.context.drawImage(
                background01_03,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );

            chapadielko1.drawMe(3);
            chapadielko2.drawMe(2);
            chapadielko3.drawMe(1);
            chapadielko4.drawMe(2);
            break;


        // pohyb v tomto case
        case frameNo <= 60:
            gameArea.context.drawImage(
                background01_02,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );
  
            // pohyb chapadiel
            var random = Math.floor(Math.random() * 20);
            chapadielko1.drawMe(2);
            chapadielko2.drawMe(1);
            chapadielko3.drawMe(2);
            chapadielko4.drawMe(3);

            // chapadlo 01
            if (chapadielko1.Y >= 0 && random == 0) {
            chapadielko1.height += 1 * diff;
            chapadielko1.Y -= 1 * diff;
            chapadielko1Btn.yT = chapadielko1.Y;
                // chytilo lod
                if (chapadielko1.Y < 0) {
                    lives -= 1;
                    chapadielko1.Y = 200;
                    chapadielko1.height = 200;
                    chapadielko2.Y = 200;
                    chapadielko2.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko4.Y = 200;
                    chapadielko4.height = 200;
                }
            }

            // chapadlo 02
            if (chapadielko2.Y >= 0 && random == 1) {
            chapadielko2.height += 1 * diff;
            chapadielko2.Y -= 1 * diff;
            chapadielko2Btn.yT = chapadielko2.Y;
                // chytilo lod
                if (chapadielko2.Y < 0) {
                    lives -= 1;
                    chapadielko1.Y = 200;
                    chapadielko1.height = 200;
                    chapadielko2.Y = 200;
                    chapadielko2.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko4.Y = 200;
                    chapadielko4.height = 200;
                }
            }

            // chapadlo 03
            if (chapadielko3.Y >= 0 && random == 2) {
            chapadielko3.height += 1 * diff;
            chapadielko3.Y -= 1 * diff;
            chapadielko3Btn.yT = chapadielko3.Y;
                // chytilo lod
                if (chapadielko3.Y < 0) {
                    lives -= 1;
                    chapadielko1.Y = 200;
                    chapadielko1.height = 200;
                    chapadielko2.Y = 200;
                    chapadielko2.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko4.Y = 200;
                    chapadielko4.height = 200;
                }
            }

            // chapadlo 04
            if (chapadielko1.Y >= 0 && random == 3) {
            chapadielko4.height += 1 * diff;
            chapadielko4.Y -= 1 * diff;
            chapadielko4Btn.yT = chapadielko4.Y;
                // chytilo lod
                if (chapadielko4.Y < 0) {
                    lives -= 1;
                    chapadielko1.Y = 200;
                    chapadielko1.height = 200;
                    chapadielko2.Y = 200;
                    chapadielko2.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko3.Y = 200;
                    chapadielko3.height = 200;
                    chapadielko4.Y = 200;
                    chapadielko4.height = 200;
                }
            }

        break;
    }
  
    // zivoty
    if (lives == 3) {
      live.drawMe(1);
    }
    if (lives == 2) {
      live.drawMe(2);
    }
    if (lives == 1) {
      live.drawMe(3);
    }
  
    // chobotnica
    //gameArea.context.drawImage(octo03, 60, 235, 460, 240);
    gameArea.context.drawImage(octo03, 0, 0, 613, 434);

    // skore
    scoreText.text = "Score: " + myScore;
    scoreText.drawMe();
  
    // game over
    if (lives <= 0) {
      clearInterval(redrawInterval);
  
      // odstranenie objektov
      delete btn;
      delete chapadlo;
      delete kolieska;
      delete lodka;

      // endscreen
      lives = 3;
      drawEndScreen();
    }
}

//funkcia mod 02 -------------------------------------------------------------------------------------------------

function updateGameAreaPlay2() {

    frameNo += 1;
  
    if (frameNo > 3) {
        frameNo = 0;
        count += 0.5;
        sec--;
    }

    console.log(count);
    gameArea.clear();

    // animacia pozadia
    switch (true) {

        case frameNo == 0:
            gameArea.context.drawImage(
                background02_01,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );
            break;

        case frameNo == 1:
            gameArea.context.drawImage(
                background02_02,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );
            break;

        case frameNo == 2:
            gameArea.context.drawImage(
                background02_03,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );
            break;

        case frameNo == 3:
            gameArea.context.drawImage(
                background02_02,
                0,
                0,
                gameArea.canvas.width,
                gameArea.canvas.height
            );
            done = 0;
            break;
        }

    // narocnost
    if (sec == 60) diff = 2;
    if (sec == 45) diff = 1;
    if (sec == 30) diff = 0.5;

    if (count >= diff && done == 0) {
        chapadielko1.visible = 0;
        chapadielko2.visible = 0;
        chapadielko3.visible = 0;
        chapadielko4.visible = 0;
        chapadielko5.visible = 0;
        chapadielko6.visible = 0;
        chapadielko7.visible = 0;
        chapadielko8.visible = 0;
        chapadielko9.visible = 0;

        var random = Math.floor(Math.random() * 9);
        done = 1;
        count = 0;

        // vyber nahodneho chapadla
        switch (random) {

            case 0:
                chapadielko1.visible = 1;
                chapadielko1Btn2 = new btn(60, 110, 200, 380);
                break;

            case 1:
                chapadielko2.visible = 1;
                chapadielko2Btn2 = new btn(225, 275, 150, 350);
                break;

            case 2:
                chapadielko3.visible = 1;
                chapadielko3Btn2 = new btn(350, 400, 150, 350);
                break;

            case 3:
                chapadielko4.visible = 1;
                chapadielko4Btn2 = new btn(490, 530, 200, 400);
                break;

            case 4:
                chapadielko5.visible = 1;
                chapadielko5Btn2 = new btn(115, 155, 100, 210);
                break;

            case 5:
                chapadielko6.visible = 1;
                chapadielko6Btn2 = new btn(200, 220, 130, 250);
                break;

            case 6:
                chapadielko7.visible = 1;
                chapadielko7Btn2 = new btn(325, 345, 90, 210);
                break;

            case 7:
                chapadielko8.visible = 1;
                chapadielko8Btn2 = new btn(525, 545, 90, 210);
                break;

            case 8:
                chapadielko9.visible = 1;
                chapadielko9Btn2 = new btn(245, 265, 35, 120);
                break;
            }
        }
    
        // vykreslenie vybrateho chapadla
        if (chapadielko1.visible == 1) {
            chapadielko1.drawMe(2);
            pena1.drawMe();
        }
        if (chapadielko2.visible == 1) {
            chapadielko2.drawMe(2);
            pena2.drawMe();
        }
        if (chapadielko3.visible == 1) {
            chapadielko3.drawMe(2);
            pena3.drawMe();
        }
        if (chapadielko4.visible == 1) {
            chapadielko4.drawMe(2);
            pena4.drawMe();
        }
        if (chapadielko5.visible == 1) {
            chapadielko5.drawMe(2);
        }
        if (chapadielko6.visible == 1) {
            chapadielko6.drawMe(2);
        }
        if (chapadielko7.visible == 1) {
            chapadielko7.drawMe(2);
        }
        if (chapadielko8.visible == 1) {
            chapadielko8.drawMe(2);
        }
        if (chapadielko9.visible == 1) {
            chapadielko9.drawMe(2);
    }
  
    scoreTextMode02.text = "Score: " + myScore;
    timeLeft.text = "Time left: " + sec;

    scoreTextMode02.drawMe();
    timeLeft.drawMe();
    scoreTextMode02.drawMe();
    timeLeft.drawMe();
    scoreTextMode02.drawMe();
    timeLeft.drawMe();
    
    // po uplynuti casu
    if (sec <= 0) {
        delete btn;
        delete txt;
        delete chapadlo;
        delete pena;
        clearInterval(redrawInterval);
        drawEndScreen();
    }
}
  