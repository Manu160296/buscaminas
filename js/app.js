window.onload= function (){
  var BOMB='*';
      BLANK='';
      SHOW='v';
      bombs=2;
var colors = {red:'red',  green: 'green', lightgray:'lightgray',  gray:'gray',  darkgray:'7a7575'};
var text ={winner: 'Ganaste!!!', loser: 'Perdiste!!!'}
var matrixOrigin= [ [1,1,1,BLANK],
                    [1,BOMB,1,BLANK],
                    [1,1,2,1],
                    [BLANK,BLANK,1,BOMB]  ]

var matrixView=  [ [BLANK,BLANK,BLANK],
                   [BLANK,BLANK,BLANK],
                   [BLANK,BLANK,BLANK],
                   [BLANK,BLANK,BLANK] ]

var board = document.querySelector('.board-js');
    info = document.querySelector('.info-js');
    buttonStart= document.querySelector('.button-start-js');
    buttonReset = document.querySelector('.button-reset-js');
    buttonReset.addEventListener('click',reset);
    buttonStart.addEventListener('click',start);

    function start() {
      reset();
  board.addEventListener('click',displayCell);
  board.addEventListener('mouseOver',cellMouseOver);
  board.addEventListener('mouseout',cellMouseOut);
    }

    function cellMouseOver(event) {
      event.target.style.background=colors.darkgray;
    }

    function cellMouseOut(event) {
      event.target.style.background=colors.gray;
    }

    function reset () {
      info.textContent= BLANK;
      var cells=document.querySelectorAll('td');

      for (var i = 0; i < cells.length; i++) {
        cells[i].textContent= BLANK;
        cells[i].style.background=colors.gray;
      }

      for (var i = 0; i < matrixView.length; i++) {
        for (var j = 0; j < matrixView.length; j++) {
          matrixView[i][j]=BLANK;
        }
      }
    }

    function displayCell(event) {
        if( event.target.matches('td') ){
          var value = getMatrixValue(event);

          if(value !==SHOW)
        }
    }
}
