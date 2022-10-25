/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = 'e35ca5623af73c61e78b08a4d03a4462';
  var lat = '29.301348';
  var lon = '-94.797699';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

changeTheme(d.current.weather[0].description);
$('.tips p').html(printTips(d.current.weather[0].description));


  // current forecast //
$('.current-day').html(displayDay(0));  
$('.current-humidity .number').html(d.current.humidity);
$('.current-temp .number').html(convertTemp (d.current.temp));
$('.current-des').html(d.current.weather[0].description);

  // forecast for day 1//
  $('.extended-forecast ul li:nth-child(2) .day').html(displayDay(1));
  $('.extended-forecast ul li:nth-child(2) .high').html(convertTemp (d.daily[1].temp.max));
  $('.extended-forecast ul li:nth-child(2) .low').html(convertTemp (d.daily[1].temp.min));
  $('.extended-forecast ul li:nth-child(2) .humidity').html(d.daily[1].humidity);
  $('.extended-forecast ul li:nth-child(2) .icon').html( printGraphic(d.daily[1].weather[0].description) );

  $('.extended-forecast ul li:nth-child(3) .day').html(displayDay(2));
  $('.extended-forecast ul li:nth-child(3) .high').html(convertTemp (d.daily[2].temp.max));
  $('.extended-forecast ul li:nth-child(3) .low').html(convertTemp (d.daily[2].temp.min));
  $('.extended-forecast ul li:nth-child(3) .humidity').html(d.daily[2].humidity);
  $('.extended-forecast ul li:nth-child(3) .icon').html( printGraphic(d.daily[2].weather[0].description) );

  $('.extended-forecast ul li:nth-child(4) .day').html(displayDay(3));
  $('.extended-forecast ul li:nth-child(4) .high').html(convertTemp (d.daily[3].temp.max));
  $('.extended-forecast ul li:nth-child(4) .low').html(convertTemp (d.daily[3].temp.min));
  $('.extended-forecast ul li:nth-child(4) .humidity').html(d.daily[3].humidity);
  $('.extended-forecast ul li:nth-child(4) .icon').html( printGraphic(d.daily[3].weather[0].description) );

  $('.extended-forecast ul li:nth-child(5) .day').html(displayDay(4));
  $('.extended-forecast ul li:nth-child(5) .high').html(convertTemp (d.daily[4].temp.max));
  $('.extended-forecast ul li:nth-child(5) .low').html(convertTemp (d.daily[4].temp.min));
  $('.extended-forecast ul li:nth-child(5) .humidity').html(d.daily[4].humidity);
  $('.extended-forecast ul li:nth-child(5) .icon').html( printGraphic(d.daily[4].weather[0].description) );

  $('.extended-forecast ul li:nth-child(6) .day').html(displayDay(5));
  $('.extended-forecast ul li:nth-child(6) .high').html(convertTemp (d.daily[5].temp.max));
  $('.extended-forecast ul li:nth-child(6) .low').html(convertTemp (d.daily[5].temp.min));
  $('.extended-forecast ul li:nth-child(6) .humidity').html(d.daily[5].humidity);
  $('.extended-forecast ul li:nth-child(6) .icon').html( printGraphic(d.daily[5].weather[0].description) );

  $('.extended-forecast ul li:nth-child(7) .day').html(displayDay(6));
  $('.extended-forecast ul li:nth-child(7) .high').html(convertTemp (d.daily[6].temp.max));
  $('.extended-forecast ul li:nth-child(7) .low').html(convertTemp (d.daily[6].temp.min));
  $('.extended-forecast ul li:nth-child(7) .humidity').html(d.daily[6].humidity);
  $('.extended-forecast ul li:nth-child(7) .icon').html( printGraphic(d.daily[6].weather[0].description) );
}


/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}

/* --------------------------------------------------
   Handle opening page transion
   -------------------------------------------------- */

$('.enter').click(function(){
  $('.cover').addClass('slide');
})

