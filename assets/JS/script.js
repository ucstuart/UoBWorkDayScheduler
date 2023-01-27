// Environment Variables

    var environment = "T"; // Sets environment to Testing or Production
    var forceHour = 13; // for testing forces the time to what is contained in the variable

// Set Environment Test / Production Variables. 

    if (environment ==="T") {
        var currentHour = forceHour;
        console.log("Current Hour: "+currentHour);
    } else {
        var currentHour = moment().format('H'); // Get the Current Hour
    }


// Add the Current Time and Date to the Page.

    var currentDayEl = $('#currentDay'); // Access the CurrentDay ID 

    // I have added this IF statement, if the time is > 5pm it displays a message "We are now Planning for Tommorow Now!" in addition to the CURRENT time and Date. OTHERWISE it is between 9am - 5pm and displays JUST the Time and Date.

    if (currentHour > 17 || currentHour < 9) {
        currentDayEl.text ("We are now Planning For Tommorow Now! Current Date & Time: "+moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
    } else {
        currentDayEl.text (moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
    }

    

//

// Work out where we are during the day and alter the CSS to highlight sections differently (Grey Prior, Red Current, Green Future)


    var textarea9El =  $('#9');  // Access 9  am
    var textarea10El = $('#10'); // Access 10 am
    var textarea11El = $('#11'); // Access 11 am
    var textarea12El = $('#12'); // Access 12 am
    var textarea13El = $('#13'); // Access 1  pm
    var textarea14El = $('#14'); // Access 2  pm
    var textarea15El = $('#15'); // Access 3  pm
    var textarea16El = $('#16'); // Access 4  pm
    var textarea17El = $('#17'); // Access 5  pm

    // SWITCH to apply correct CSS formating depending on the CURRENT HOUR

    switch (currentHour) {
        case 9:
            if (environment="T") {console.log("9am")};            
            textarea9El.attr ('class','col-md-10 textarea present'); 
            textarea10El.attr ('class','col-md-10 textarea future');
            textarea11El.attr ('class','col-md-10 textarea future');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 10:
            if (environment="T") {console.log("10am")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea present');
            textarea11El.attr ('class','col-md-10 textarea future');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 11:
            if (environment="T") {console.log("11am")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea present');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 12:
            if (environment="T") {console.log("12am")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea present');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 13:
            if (environment="T") {console.log("1pm")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea present');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 14:
            if (environment="T") {console.log("2pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea present');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 15:
            if (environment="T") {console.log("3pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea past');
            textarea15El.attr ('class','col-md-10 textarea present');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 16:
            if (environment="T") {console.log("4pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea past');
            textarea15El.attr ('class','col-md-10 textarea past');
            textarea16El.attr ('class','col-md-10 textarea present');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 17:
            if (environment="T") {console.log("5pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea past');
            textarea15El.attr ('class','col-md-10 textarea past');
            textarea16El.attr ('class','col-md-10 textarea past');
            textarea17El.attr ('class','col-md-10 textarea present');
            break;
        default:
            if (environment="T") {console.log("Not Between 9am - 5pm e.g. NEXT DAY")}; 
            textarea9El.attr ('class','col-md-10 textarea future');
            textarea10El.attr ('class','col-md-10 textarea future');
            textarea11El.attr ('class','col-md-10 textarea future');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
    }

//


// Access the Text for each Time Slot

    var text9El =  $('#t9');  // Access 9  am
    var text10El = $('#t10'); // Access 10 am
    var text11El = $('#t11'); // Access 11 am
    var text12El = $('#t12'); // Access 12 am
    var text13El = $('#t13'); // Access 1  pm
    var text14El = $('#t14'); // Access 2  pm
    var text15El = $('#t15'); // Access 3  pm
    var text16El = $('#t16'); // Access 4  pm
    var text17El = $('#t17'); // Access 5  pm

localStorage.setItem("9am Text", "Text");

// Get stored text from local storage and display

text9El.text(localStorage.getItem("9am Text"));
text10El.text(localStorage.getItem("10am Text"));
text11El.text(localStorage.getItem("11am Text"));
text12El.text(localStorage.getItem("12am Text"));
text13El.text(localStorage.getItem("1pm Text"));
text14El.text(localStorage.getItem("2pm Text"));
text15El.text(localStorage.getItem("3pm Text"));
text16El.text(localStorage.getItem("4pm Text"));
text17El.text(localStorage.getItem("5pm Text"));


// Adding Reset Functionality

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(event) {
    event.preventDefault();
    // Set the Data to be BLANK
    localStorage.setItem("9am Text", "");
    localStorage.setItem("10am Text", "");
    localStorage.setItem("11am Text", "");
    localStorage.setItem("12am Text", "");
    localStorage.setItem("1pm Text", "");
    localStorage.setItem("2pm Text", "");
    localStorage.setItem("3pm Text", "");
    localStorage.setItem("4pm Text", "");
    localStorage.setItem("5pm Text", "");
    // Get the Data Back
    text9El.text(localStorage.getItem("9am Text"));
    text10El.text(localStorage.getItem("10am Text"));
    text11El.text(localStorage.getItem("11am Text"));
    text12El.text(localStorage.getItem("12am Text"));
    text13El.text(localStorage.getItem("1pm Text"));
    text14El.text(localStorage.getItem("2pm Text"));
    text15El.text(localStorage.getItem("3pm Text"));
    text16El.text(localStorage.getItem("4pm Text"));
    text17El.text(localStorage.getItem("5pm Text"));
})

