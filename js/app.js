// hacer el temporizador
// var timeleft = 120;
// var downloadTimer = setInterval(function(){
//timeleft--;
//document.getElementById("timer").textContent = timeleft;
//if(timeleft <= 0)
//    clearInterval(downloadTimer);
//},1000);


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


$(document).ready(function(){
  cambiaColor('h1.main-titulo');
})
