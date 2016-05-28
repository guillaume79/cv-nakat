$(document).ready(function(){



  var monsterContainer = $('#monster-container');
  var monsterSprites = $('#monster-sprites');

  var background = $('#background');
  background = {
    x: parseFloat(background.css('top')),
    y: parseFloat(background.css('left')),
    height: parseFloat(background.css('height')),
    width: parseFloat(background.css('width')),
  };
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
    var stonePosition = {
      x: parseFloat(stone.css('left')),
      y: parseFloat(stone.css('top')),
      height: parseFloat(stone.css('height')),
      width: parseFloat(stone.css('width')),
      point:100,
    };

      var stone1Position = {
        x: parseFloat(stone1.css('left')),
        y: parseFloat(stone1.css('top')),
        height: parseFloat(stone1.css('height')),
        width: parseFloat(stone1.css('width')),
        point:100,
      };

      var stone2Position = {
        x: parseFloat(stone2.css('left')),
        y: parseFloat(stone2.css('top')),
        height: parseFloat(stone2.css('height')),
        width: parseFloat(stone2.css('width')),
        point:100,
      };

    var stone3Position = {
      x: parseFloat(stone3.css('left')),
      y: parseFloat(stone3.css('top')),
      height: parseFloat(stone3.css('height')),
      width: parseFloat(stone3.css('width')),
      point:100,
    };

    var stone4Position = {
      x: parseFloat(stone4.css('left')),
      y: parseFloat(stone4.css('top')),
      height: parseFloat(stone4.css('height')),
      width: parseFloat(stone4.css('width')),
      point:100,
    };

    var stone5Position = {
      x: parseFloat(stone5.css('left')),
      y: parseFloat(stone5.css('top')),
      height: parseFloat(stone5.css('height')),
      width: parseFloat(stone5.css('width')),
      point:100,
    };

    var stone6Position = {
      x: parseFloat(stone6.css('left')),
      y: parseFloat(stone6.css('top')),
      height: parseFloat(stone6.css('height')),
      width: parseFloat(stone6.css('width')),
      point:100,
    };

    var stone7Position = {
      x: parseFloat(stone7.css('left')),
      y: parseFloat(stone7.css('top')),
      height: parseFloat(stone7.css('height')),
      width: parseFloat(stone7.css('width')),
      point:100,
    };

    // ************FIREBALLS ******************
    var fireBall = $('#fireBall');
    var fireBall1 = $('#fireBall1');
    var fireBall2 = $('#fireBall2');
    // var fireBall3 = $('#fireBall3');

// ***************FIREBALLS POSITION**************
    var fireBallPosition = {
      x: parseFloat(fireBall.css('left')),
      y: parseFloat(fireBall.css('top')),
      height: parseFloat(fireBall.css('height')),
      width: parseFloat(fireBall.css('width')),
    };


    var fireBall1Position = {
      x: parseFloat(fireBall1.css('left')),
      y: parseFloat(fireBall1.css('top')),
      height: parseFloat(fireBall1.css('height')),
      width: parseFloat(fireBall1.css('width')),
    };

    var fireBall2Position = {
      x: parseFloat(fireBall2.css('left')),
      y: parseFloat(fireBall2.css('top')),
      height: parseFloat(fireBall2.css('height')),
      width: parseFloat(fireBall2.css('width')),
    };
    //
    // var fireBall3Position = {
    //   x: parseFloat(fireBall3.css('left')),
    //   y: parseFloat(fireBall3.css('top')),
    //   height: parseFloat(fireBall3.css('height')),
    //   width: parseFloat(fireBall3.css('width')),
    // };

// ******************MONSTER*********************
//
  var monsterPosition;
  $(window).keydown(function(event){
    monsterPosition = {
      x: parseFloat(monsterContainer.css('left')),
      y: parseFloat(monsterContainer.css('top')),
      height: parseFloat(monsterContainer.css('height')),
      width: parseFloat(monsterContainer.css('width')),
    };

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

  //   setInterval(function() {
  //     if (isCollision(fireBallPosition, monsterPosition)) {
  //       alert('salut');
  //   }
  // },20);



//*****************FIREBALLS/MONSTER COLLISION**********
    // var collision = isCollision(stone3Position, monsterPosition);
    //
    // if(collision === true) {
    //   stone3.css('opacity', 0 );
    // }

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


  setInterval(function() {

    console.log($('#fireBall').css('left') + ' / ' + $('#fireBall').css('top'));
    console.log($('#fireBall1').css('left') + ' / ' + $('#fireBall1').css('top'));
    console.log('***');
  }, 200);

      setInterval(function() {
        $('#fireBall').animate({"top": "1000"}, 2100,function() {
          $("#fireBall").css({"top": "-200px"})});
      }, 2900 );


      setInterval(function() {
          $('#fireBall1').animate({"top": "1000"}, 1800,function() {
              $("#fireBall1").css({"top": "-200px"})});
     }, 2200 );


      setInterval(function() {
          $('#fireBall2').animate({"top": "1000"}, 2000,function(){
              $("#fireBall2").css({"top": "-200px"})});
     }, 1400 );


      setInterval(function() {
        $("#monster-sprites").animate({'left': "0px"},
        0, function(){
          $("#monster-sprites").css({"left": "-96px"})});
      }, 600 );

      // var sample = document.getElementById("music")[0];
      // sample.play();
});
