// objekt tlačidlo --------------------------------------------------------------------------------------

function btn(xLeft, xRight, yTop, yBottom) {

    this.xL = xLeft;
    this.xR = xRight;
    this.yT = yTop;
    this.yB = yBottom;
    this.height = this.yB - this.yT;
    this.width = this.xR - this.xL;

    this.drawMe = function() {
      // funkcia na vykreslenie v canvas
      gameArea.context.strokeStyle = "red";
      gameArea.context.beginPath();
      gameArea.context.rect(this.xL, this.yT, this.width, this.height);
      gameArea.context.stroke();
    };
}
  
// funkcia na overenie kliknutia na tlačidlo
btn.prototype.clicked = function() {
    if (
      this.xL <= mouseX &&
      mouseX <= this.xR &&
      this.yT <= mouseY &&
      mouseY <= this.yB
    ) {
      return true;
    }
};

// funkcia text ----------------------------------------------------------------------------------------

function txt(x, y, size, color, text) {

    this.X = x;
    this.Y = y;
    this.size = size;
    this.color = color;
    this.text = text;

    this.drawMe = function() {
      gameArea.context.font = this.size + " AR";
      gameArea.context.fillStyle = color;
      gameArea.context.fillText(this.text, this.X, this.Y);
    };
  }

// objekt pre chapadielko --------------------------------------------------------------------------------

function chapadlo(x, y, scale) {

    this.X = x;
    this.Y = y;
    this.visible = 0;
    this.width = scale / 2;
    this.height = scale;

    this.drawMe = function(version) {
      switch (true) {
        // animacia
        case version == 1:
          gameArea.context.drawImage(
            chapadlo01,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;

        case version == 2:
          gameArea.context.drawImage(
            chapadlo02,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;

        case version == 3:
          gameArea.context.drawImage(
            chapadlo03,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;
      }
    };
}
  
// objekt pre zivoty --------------------------------------------------------------------------------

  function kolieska() {

    this.X = 475;
    this.Y = 5;
    this.width = 130;
    this.height = 40;

    this.drawMe = function(version) {
      switch (true) {
        // ubudanie zivotov
        case version == 1:
          gameArea.context.drawImage(
            lives03,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;

        case version == 2:
          gameArea.context.drawImage(
            lives02,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;

        case version == 3:
          gameArea.context.drawImage(
            lives01,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;
      }
    };
  }
  
// objekt pre lodku --------------------------------------------------------------------------------

function lodka() {

    this.X = 0;
    this.Y = 0;
    this.width = 613.9;
    this.height = 434;

    this.drawMe = function(version) {
      switch (true) {
        // animacia
        case version == 1:
          gameArea.context.drawImage(
            boat01,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;

        case version == 2:
          gameArea.context.drawImage(
            boat02,
            this.X,
            this.Y,
            this.width,
            this.height
          );
          break;
      }
    };
}
  
// objekt pre penu --------------------------------------------------------------------------------

function pena(x, y, width, height) {

    this.X = x;
    this.Y = y;
    this.width = width;
    this.height = height;
    
    this.drawMe = function() {
      gameArea.context.drawImage(
        imgPena,
        this.X,
        this.Y,
        this.width,
        this.height
      );
    };
  }