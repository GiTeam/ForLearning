

var date = new Date(2013, 10, 20, 23, 3, 0, 0); //задаем дату мес€ц с 0

var now = new Date();

var dateDifferenceMS = ( date.getTime() - now.getTime() );

if ( dateDifferenceMS > 0 ) 
{
	setInterval(step, 1000);
}

var $timer = $(".timer");
var $timerDay = $timer.find(".days>p"); 
var $timerHour = $timer.find(".hours>p");
var $timerMinute = $timer.find(".minutes>p");
var $timerSecond = $timer.find(".seconds>p");


function step() 
{
	now = new Date();

	dateDifferenceMS = (date.getTime() - now.getTime());

	
	var currentDay = Math.floor(dateDifferenceMS/86400000);
	var currentHour = Math.floor((dateDifferenceMS - (currentDay*86400000))/3600000);
	var currentMinute = Math.floor((dateDifferenceMS - (currentDay*86400000) - (currentHour*3600000))/60000);
	var currentSecond = Math.floor(dateDifferenceMS/1000 - (currentDay*86400) - (currentHour*3600) - (currentMinute*60));


	$timerDay.text(currentDay);
	$timerHour.text(currentHour);
	$timerMinute.text(currentMinute);
	$timerSecond.text(currentSecond);

}