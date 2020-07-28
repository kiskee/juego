// hacer el temporizador
// var timeleft = 120;
// var downloadTimer = setInterval(function(){
//timeleft--;
//document.getElementById("timer").textContent = timeleft;
//if(timeleft <= 0)
//    clearInterval(downloadTimer);
//},1000);

/**
const myTimer = document.getElementById('timer');


$("#boton").click(function(){
  function startTimer(sec) {
    let myMinutes = Math.floor(sec/60),
        remSeconds = sec%60;
    setInterval(downTime, 1000);
    function downTime () {
        if(sec > 0) {
            sec -= 1;
            myMinutes = Math.floor(sec/60);
            remSeconds = sec%60;
            if(remSeconds < 10){
                myMinutes < 10 ? myTimer.textContent = `0${myMinutes} : 0${remSeconds}` : myTimer.textContent = `${myMinutes} : 0${remSeconds}`;
            } else {
                myMinutes < 10 ? myTimer.textContent = `0${myMinutes} : ${remSeconds}` : myTimer.textContent = `${myMinutes} : ${remSeconds}`;
            }
        } else {
            myTimer.textContent = "Finished";
        }
    }
  }
  startTimer(120);
})
**/


//$( document ).ready(function() {
//  $("#titulo").animate({
//    color:"white",
//  },2000, function(){
//    $("#titulo").animate({
//      color:"yellow";
//    },20000
//)
//  })
//});


function cambiaColor(selector) {
	$(selector).animate({
			opacity: '1',
		}, {
			step: function () {
				$(this).css('color', 'white');
			},
			queue: true
		})
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'yellow');
			},
			queue: true
		}, 600)
		.delay(1000)
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'white');
			},
			queue: true
		})
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'yellow');
				cambiaColor('h1.main-titulo');
			},
			queue: true
		});
}


// punto 2 dulces aleatorios

function numeroRandom(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min))+ min;
}

// filas o columnas de dulces

function conjuntoDulces(arrayType, index){
  var dulceCol1 = $('.col-1').children();
  var dulceCol2 = $('.col-2').children();
  var dulceCol3 = $('.col-3').children();
  var dulceCol4 = $('.col-4').children();
  var dulceCol5 = $('.col-5').children();
  var dulceCol6 = $('.col-6').children();
  var dulceCol7 = $('.col-7').children();

  var columnasDulces = $([dulceCol1,dulceCol2,dulceCol3,dulceCol4,dulceCol5,
  dulceCol6,dulceCol7 ]);

  if (typeof index == 'number'){
    var filaDulces = $([dulceCol1.eq(index), dulceCol2.eq(index), dulceCol3.eq(index),
    dulceCol4.eq(index), dulceCol5.eq(index), dulceCol6.eq(index),dulceCol7.eq(index)]);
  }else {
    index = '';
  }
    if (arrayType==='columns'){
      return columnasDulces;
    }else if (arrayType === 'rows' && index !==''){
      return filaDulces;
    }
}

// filas
function filaDulces(index){
  var filaDulces = giveCandyArrays('columns');
  return filaDulces;
}

//columnas
function columnasDulces(index){
  var columnasDulces = giveCandyArrays('rows', index);
}


// 3 valida si se eliminan dulces

function validacionColumna(){
  for (var n = 0; n < 7; n++){
    var contando = 0;
    var dulcePosicion =[];
    var dulceAdicionalPosicion = [];
    var columnaDulce = columnasDulces(n);
    var comparaValor = columnaDulce.eq(0);
    var gap = false;
    for (var i = 1; i < columnaDulce.length; i++){

    }
  }
}
