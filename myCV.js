$(document).ready(function(){

  var getPosition = function(obj) {
    var positions = {
      x: parseFloat(obj.css('left')),
      y: parseFloat(obj.css('top')),
      height: parseFloat(obj.css('height')),
      width: parseFloat(obj.css('width')),
    };
    return positions;
  }

  // *************************FONCTION COLLISION******************************
  var isCollision = function(obj1, obj2) {
    if(obj1.x < obj2.x + obj2.width &&
     obj1.x + obj1.width > obj2.x &&
     obj1.y < obj2.y + obj2.height &&
     obj1.height + obj1.y > obj2.y) {
      return true;
    }else {
      return false;
    }
  }

  var monsterContainer = $('#monster-container');
  var monsterSprites = $('#monster-sprites');
  var monsterLife = 3;
  var theScore = $('#score');
  theScore.html(monsterLife);

  var background = $('#background');
  background = getPosition(background);
//***********STONES*************************
  var stone = $('#stone');
  var stone1 = $('#stone1');
  var stone2 = $('#stone2');
  var stone3 = $('#stone3');
  var stone4 = $('#stone4');
  var stone5 = $('#stone5');
  var stone6 = $('#stone6');
  var stone7 = $('#stone7');

// **********STONES POSITIONS****************
    var stonePosition = getPosition(stone);
    var stone1Position = getPosition(stone1);
    var stone2Position = getPosition(stone2);
    var stone3Position = getPosition(stone3);
    var stone4Position = getPosition(stone4);
    var stone5Position = getPosition(stone5);
    var stone6Position = getPosition(stone6);
    var stone7Position = getPosition(stone7);

    // ************FIREBALLS ******************
    var fireBall = $('#fireBall');
    var fireBall1 = $('#fireBall1');
    var fireBall2 = $('#fireBall2');


// **************COLLISIONS FIREBALL/MONSTER***********
      var mainInterval = setInterval(function() {
        var monsterPosition = getPosition(monsterContainer);
        var fireBallPosition = getPosition(fireBall);
        var fireBall1Positon = getPosition(fireBall1);
        var fireBall2Positon = getPosition(fireBall2);
        var fireBallTab = [];

        fireBallTab.push(fireBallPosition, fireBall1Positon, fireBall2Positon);
        fireBallTab.forEach(function(fireball) {
                    if (isCollision(fireball, monsterPosition)) {
            // console.log('collisisn ......  ');
            monsterLife = monsterLife -1;
            theScore.html(monsterLife);
            if(monsterLife === 0) {
              monsterContainer.css ('opacity', 0);
              clearInterval(fireBallInterval);
              clearInterval(fireBallInterval1);
              clearInterval(fireBallInterval2);
              clearInterval(mainInterval);
            }else{
              monsterContainer.removeClass('blinko').delay(300).queue(function(next){
                  $(this).addClass('blinko');
                  next();
              });
            }
          }
        });
  },300);


// ******************MONSTER*********************
//
  var monsterPosition;
  $(window).keydown(function(event){
    monsterPosition = getPosition(monsterContainer);

// ****************STONE/MONSTER COLLISION***************
    if (isCollision(stonePosition, monsterPosition)) {
      stone.css('opacity', 0);
    }

    if (isCollision(stone1Position, monsterPosition)) {
      stone1.css('opacity', 0);
    }
    if (isCollision(stone2Position, monsterPosition)) {
      stone2.css('opacity', 0);
    }
    if (isCollision(stone3Position, monsterPosition)) {
      stone3.css('opacity', 0);
    }
    if (isCollision(stone4Position, monsterPosition)) {
      stone4.css('opacity', 0);
    }
    if (isCollision(stone5Position, monsterPosition)) {
      stone5.css('opacity', 0);
    }
    if (isCollision(stone6Position, monsterPosition)) {
      stone6.css('opacity', 0);
    }
    if (isCollision(stone7Position, monsterPosition)) {
      stone7.css('opacity', 0);
    }


//*****************FIREBALLS/MONSTER COLLISION**********
    var code = event.keyCode;
    switch(code){

    //*******************instructions pour GAUCHE  *******************
    case 37:
    var monsterLeft =  parseFloat(monsterContainer.css('left'));
    if(monsterLeft >= 20){
      monsterContainer.css('left', monsterLeft - 5 + 'px');
    }

    var monsterLeftSprites = parseFloat(monsterSprites.css('left'));
    if(monsterLeftSprites == -288) {
        monsterSprites.css('left', '0px');
        monsterSprites.css('top', '-96px');
    }else{
        monsterSprites.css('left', monsterLeftSprites - 96 + 'px');
    }


      break;

      //*******************instructions pour HAUT  ***********
    case 38:
    event.preventDefault();
    var monsterTop = parseFloat(monsterContainer.css('top'));
    if(monsterTop >= 20){
      monsterContainer.css('top', monsterTop - 5 + 'px');
    }

    var monsterLeftSprites = parseFloat(monsterSprites.css('left'));

    if(monsterLeftSprites == -288) {
        monsterSprites.css('left', '0px');
        monsterSprites.css('top', '-287px');
      }
      else{
        monsterSprites.css('left', monsterLeftSprites - 96 + 'px');
      }

      break;

        //*******************instructions pour DROITE  *******************
    case 39:
    var monsterLeft = parseFloat(monsterContainer.css('left'));
    if(monsterLeft <= 1085){
      monsterContainer.css('left', monsterLeft + 5 + 'px');
    }

    var monsterLeftSprites = parseFloat(monsterSprites.css('left'));

    if(monsterLeftSprites == -288) {
        monsterSprites.css('left', '0px');
        monsterSprites.css('top', '-191px');
    }else{
        monsterSprites.css('left', monsterLeftSprites - 96 + 'px');
    }

      break;

        //*******************instructions pour BAS  *******************
    case 40:
    event.preventDefault();
    var monsterTop = parseFloat(monsterContainer.css('top'));
    if(monsterTop <= 685){
      monsterContainer.css('top', monsterTop + 5 + 'px');
    }

    var monsterLeftSprites = parseFloat(monsterSprites.css('left'));

    if(monsterLeftSprites == -288) {
        monsterSprites.css('left', '0px');
        monsterSprites.css('top', '0px');
    }else{
      monsterSprites.css('left', monsterLeftSprites - 96 + 'px');
    }

      break;

    }; // switch

  });


      var fireBallInterval = setInterval(function() {
        $('#fireBall').animate({"top": "1000"}, 2100,function() {
          $("#fireBall").css({"top": "-200px"})});
      }, 2900 );



      var fireBallInterval1 = setInterval(function() {
          $('#fireBall1').animate({"top": "1000"}, 1800,function() {
              $("#fireBall1").css({"top": "-200px"})});
     }, 2200 );


      var fireBallInterval2 = setInterval(function() {
          $('#fireBall2').animate({"top": "1000"}, 2000,function(){
              $("#fireBall2").css({"top": "-200px"})});
     }, 1800 );

      var sample = document.getElementById("music")[0];
      sample.play();
});
