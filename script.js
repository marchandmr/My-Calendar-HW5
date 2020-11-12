var saveEl = document.querySelector(".fas fa-clock");
var time = moment().format('HH');
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeCount = 0;
var timeIDcounter = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

for (timeCount; timeCount < hoursArray.length; timeCount++) {
    var timeSlot = $("#timeSlot-" + timeIDcounter[timeCount]);
    if (hoursArray[timeCount] == time) {
        timeSlot.addClass("present");

    }
    else if (hoursArray[timeCount] < time) {
        timeSlot.addClass("past");

    }
    else if (hoursArray[timeCount] > time) {
        timeSlot.addClass("future");
    }

}

$(".save").on("click", saveData)

function saveData() {

    var reminder = $(this).siblings("textarea").val();
    var parent = $(this).parent().attr("id");
    localStorage.setItem(parent, reminder);
    console.log(parent);
    console.log(reminder);
}

$("#calendarOne textarea").val(localStorage.getItem("calendarOne"));
$("#calendarTwo textarea").val(localStorage.getItem("calendarTwo"));
$("#calendarThree textarea").val(localStorage.getItem("calendarThree"));
$("#calendarFour textarea").val(localStorage.getItem("calendarFour"));
$("#calendarFive textarea").val(localStorage.getItem("calendarFive"));
$("#calendarSix textarea").val(localStorage.getItem("calendarSix"));
$("#calendarSeven textarea").val(localStorage.getItem("calendarSeven"));
$("#calendarEight textarea").val(localStorage.getItem("calendarEight"));
$("#calendarNine textarea").val(localStorage.getItem("calendarNine"));