
//https://www.npmjs.com/package/weather-js
//npm install weather-js
var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode (or user input variable)
// degreeType: F or C
 
weather.find({search: 'helsinki', degreeType: "C"}, function(err, result) {
  if(err) console.log(err);
 
  //console.log(JSON.stringify(result, null, 2));
  var forecast = result[0].forecast;
for (let i = 2; i < 5; i++) {
    weather = forecast[i].skytextday;
    day =  forecast[i].day;
    low = forecast[i].low;
    high = forecast[i].high;
console.log("Weather:" +weather+" " + day+" päivä:"+high+" yö:"+low)
}



});
