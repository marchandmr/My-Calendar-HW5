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
    $("#calendar" + timeIDcounter[timeCount] + " textarea").val(localStorage.getItem("calendar" + timeIDcounter[timeCount]));
}

$(".save").on("click", saveData)

function saveData() {

    var reminder = $(this).siblings("textarea").val();
    var parent = $(this).parent().attr("id");
    localStorage.setItem(parent, reminder);
}
