var time = moment().format('HH'); // variables
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeCount = 0;
var timeIDcounter = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a')); // sets date and time on page

for (timeCount; timeCount < hoursArray.length; timeCount++) { // for loop that sets past, present, and future classes to text boxes
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
    // saves the value of the text box into a variable called reminder  and saves that into it's parent which in this case is going to be  #calendar 9 -17
    // the getItem runs in line 21 to save and load the text value of each text box

    var reminder = $(this).siblings("textarea").val();
    var parent = $(this).parent().attr("id");
    localStorage.setItem(parent, reminder);
}
