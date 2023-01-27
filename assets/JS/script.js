// Environment Variables

var environment = "P"; // Sets environment to Testing or Production
var forceHour = 17; // for testing forces the time to what is contained in the variable

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
            console.log("9am");
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
            console.log("10am");
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
            console.log("11am");
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
            console.log("12am");
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
            console.log("1pm");
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
            console.log("2pm");
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
            console.log("3pm");
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
            console.log("4pm");
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
            console.log("5pm");
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
            console.log("Not Between 9am - 5pm e.g. NEXT DAY");
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

