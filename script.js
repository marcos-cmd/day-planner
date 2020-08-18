$(document).ready(function () {


    //Current Day Displays at the top
    const currentDayEl = $('#currentDay');
    const today = moment().format('ddd, hA');
    currentDayEl.text(today);
    const now = parseInt(moment().format('HH'));
    console.log(now);

    const todaysHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    var nineAM = $("#9");
    var tenAM = $("#10");
    var elevenAM = $("#11");
    var twelvePM = $("#12");
    var onePM = $("#1");
    var twoPM = $("#2");
    var threePM = $("#3");
    var fourPM = $("#4");
    var fivePM = $("#5");

    $("input").each(function () {
        var name = parseInt($(this).attr("name"));
        console.log(this);
        if (name < now) {
            $(this).css("border", "2px solid black");
        }
        if (name > now) {
            $(this).css("border", " 2px solid green");
        }
        if (name === now) {
            $(this).css("border", "2px solid red");
        }
    })

    $("button").on("click", function () {
        //setting items in tthe local storage
        localStorage.setItem("9AM", nineAM.val())
        localStorage.setItem("10AM", tenAM.val())
        localStorage.setItem("11AM", elevenAM.val())
        localStorage.setItem("12PM", twelvePM.val())
        localStorage.setItem("1PM", onePM.val())
        localStorage.setItem("2PM", twoPM.val())
        localStorage.setItem("3PM", threePM.val())
        localStorage.setItem("4PM", fourPM.val())
        localStorage.setItem("5PM", fivePM.val())
    })

    //getting stored content and sending to the screen
    $("#9").append(localStorage.getItem("9AM"));
    $("#10").append(localStorage.getItem("10AM"));
    $("#11").append(localStorage.getItem("11AM"));
    $("#12").append(localStorage.getItem("12PM"));
    $("#1").append(localStorage.getItem("1PM"));
    $("#2").append(localStorage.getItem("2PM"));
    $("#3").append(localStorage.getItem("3PM"));
    $("#4").append(localStorage.getItem("4PM"));
    $("#5").append(localStorage.getItem("5PM"));


})