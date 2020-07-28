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


// 3 valida si se eliminan dulces en columna

function validacionColumna(){
  for (var n = 0; n < 7; n++){
    var contando = 0;
    var dulcePosicion =[];
    var dulceAdicionalPosicion = [];
    var columnaDulce = columnasDulces(n);
    var comparaValor = columnaDulce.eq(0);
    var gap = false;
    for (var i = 1; i < columnaDulce.length; i++){
      var sscompara = comparaValor.attr('src');
      var ssdulce = columnaDulce.eq(i).attr('src');

      if (sscompara != ssdulce){
        if (dulcePosicion.length >= 3){
          gap = true;
        }else {
          dulcePosicion = [];
        }
        contando = 0;
      }else {
        if (contando == 0){
          if (!gap){
            dulcePosicion.push(i-1);
          }else {
            dulceAdicionalPosicion.push(i-1);
          }
        }
        if (!gap){
          dulcePosicion.push(i);
        }else {
          dulceAdicionalPosicion.push(i);
        }
        contando += 1;
      }
        comparaValor = columnaDulce.eq(i);
    }
    if (dulceAdicionalPosicion.length > 2 ){
      dulcePosicion = $.merge(dulcePosicion, dulceAdicionalPosicion);
    }
    if (dulcePosicion.length <= 2){
      dulcePosicion = [];
    }
    cuentaDulce = dulcePosicion.length;
    if (cuentaDulce >= 3){
      eliminaColumnaDulce(dulcePosicion, columnaDulce);
      fijaPuntaje(cuentaDulce);
    }
  }
}
 function eliminaColumnaDulce(dulcePosicion, columnaDulce){
   for(var i = 0;i < dulcePosicion.length;i++){
     columnaDulce.eq(dulcePosicion[i].addClass('delete'))
   }
 }

// valida si se eliminan dulces en filas

function validafila(){
  for (var n = 0; n < 6; n++){
    var contando = 0;
    var dulcePosicion =[];
    var dulceAdicionalPosicion = [];
    var filaDulce = filaDulces(n);
    var comparaValor = filaDulce[0];
    var gap = false;
    for (var i = 1; i < filaDulce.length; i++){
      var sscompara = comparaValor.attr('src');
      var ssdulce = filaDulce[i].attr('src');

      if (sscompara != ssdulce){
        if (dulcePosicion.length >= 3){
          gap = true;
        }else {
          dulcePosicion = [];
        }
        contando = 0;
      }else {
        if (contando == 0){
          if (!gap){
            dulcePosicion.push(i-1);
          }else {
            dulceAdicionalPosicion.push(i-1);
          }
        }
        if (!gap){
          dulcePosicion.push(i);
        }else {
          dulceAdicionalPosicion.push(i);
        }
        contando += 1;
      }
        comparaValor = filaDulce[i];
    }
    if (dulceAdicionalPosicion.length > 2 ){
      dulcePosicion = $.merge(dulcePosicion, dulceAdicionalPosicion);
    }
    if (dulcePosicion.length <= 2){
      dulcePosicion = [];
    }
    cuentaDulce = dulcePosicion.length;
    if (cuentaDulce >= 3){
      eliminafila(dulcePosicion, filaDulce);
      fijaPuntaje(cuentaDulce);
    }
  }
}
 function eliminafila(dulcePosicion,filaDulce){
   for(var i=0;i < dulcePosicion.length;i++){
     filaDulce[dulcePosicion[i]].addClass('delete');
   }
 }


 // puntiacion

 function fijaPuntaje(cuentaDulce){
   var puntaje = Number($('#score-text').text());
   switch (cuentaDulce){
    case 3:
      puntaje += 25;
      break;
    case 4:
      puntaje += 50;
      break;
    case 5:
  		puntaje += 75;
  		break;
  	case 6:
  		puntaje += 100;
  		break;
  	case 7:
  		puntaje += 200;
   }
   $('#score-text').text(puntaje);
 }


 // dulces en pantalla

 function  chekeatablero(){
   llenatablero();
 }

 function llenatablero(){
   var top = 6;
   var columna = $('[class^="col-"]');

   columna.each(function(){
     var dulces = $(this).children().length;
     var agrega = top - dulces;
     for (var i = 0; i < agrega; i++){
       var tipodulce = numeroRandom(1,5);
       if (i === 0 && dulces < 1){
         	$(this).append('<img src="image/' + tipodulce + '.png" class="element"></img>');
       }else {
         	$(this).find('img:eq(0)').before('<img src="image/' + tipodulce + '.png" class="element"></img>');
       }
     }
   });
   anadirEventoDulce();
   validaciones();
 }

 // Si hay dulces que borrar
 function validaciones() {
 	validacionColumna();
 	validafila();
 	// Si hay dulces que borrar
 	if ($('img.delete').length !== 0) {
 		eliminadulces();
 	}
 }
