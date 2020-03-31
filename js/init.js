// premenne
var mouseX;
var mouseY;
var fps = 60;
var redrawInterval;
var frameNo = 0;
var score = [{ date: null, score: null, gameMode: null }];
var myScore = 0;
var diff = 5;
var myStorage = window.localStorage;
var lives = 3;
var soundMode = "menu";
var audio;
var mode;
var sec = 0;
var count = 0;
var done = 0;

// inicializačná funkcia --------------------------------------------------------------------------------------

function init() {
    // nacitanie assetov
    preloadAssets();
    // mouse click
    window.addEventListener("click", mouseClicked);
    // canvas
    gameArea.createCanvas();
    // draw menu
    setTimeout(drawMenu, 400);
}

//prednačítnie všetkých obrázkov --------------------------------------------------------------------------------

function preloadAssets() {
    // pozadie 02
    this.background02_01 = new Image(); //vytvorenie objektu "obrázok"
    this.background02_01.src = "../assets/pictures/bg/bg02_01.png"; //pridanie objektu cestu k súboru
    this.background02_02 = new Image();
    this.background02_02.src = "../assets/pictures/bg/bg02_02.png";
    this.background02_03 = new Image();
    this.background02_03.src = "../assets/pictures/bg/bg02_03.png";
  
    // pozadie 01
    this.background01_01 = new Image();
    this.background01_01.src = "../assets/pictures/bg/bg01_01.png";
    this.background01_02 = new Image();
    this.background01_02.src = "../assets/pictures/bg/bg01_02.png";
    this.background01_03 = new Image();
    this.background01_03.src = "../assets/pictures/bg/bg01_03.png";
  
    // menu
    this.menu01 = new Image();
    this.menu01.src = "../assets/pictures/bg/menu01.png";
    this.menu02 = new Image();
    this.menu02.src = "../assets/pictures/bg/menu02.png";
  
    // chapadielka
    this.chapadlo01 = new Image();
    this.chapadlo01.src = "../assets/pictures/octo/chapadlo01.PNG";
    this.chapadlo02 = new Image();
    this.chapadlo02.src = "../assets/pictures/octo/chapadlo02.PNG";
    this.chapadlo03 = new Image();
    this.chapadlo03.src = "../assets/pictures/octo/chapadlo03.PNG";
  
    // chobotnica
    this.octo01 = new Image();
    this.octo01.src = "../assets/pictures/octo/octo01.PNG";
    this.octo02 = new Image();
    this.octo02.src = "../assets/pictures/octo/octo02.PNG";
    this.octo03 = new Image();
    this.octo03.src = "../assets/pictures/octo/octo03.png";
  
    // lodka
    this.boat01 = new Image();
    this.boat01.src = "../assets/pictures/boat/boat01.PNG";
    this.boat02 = new Image();
    this.boat02.src = "../assets/pictures/boat/boat02.PNG";
  
    // zivoty
    this.lives01 = new Image();
    this.lives01.src = "../assets/pictures/lives/lives01.png";
    this.lives02 = new Image();
    this.lives02.src = "../assets/pictures/lives/lives02.png";
    this.lives03 = new Image();
    this.lives03.src = "../assets/pictures/lives/lives03.png";
  
    // pena
    this.imgPena = new Image();
    this.imgPena.src = "../assets/pictures/particles/pena.png";
  }