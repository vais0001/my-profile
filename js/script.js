const grade = document.getElementsByClassName("grade");
const credits = document.getElementsByClassName("credits");
const value = document.getElementById("nbsa-value");
const limit = document.getElementById("nbsa-percentage");

let creditsAmount = 0;
let percentage = 0;

let studyYear = [];

studyYear.push({credits: credits[0].innerText, grade: grade[0].innerText});

studyYear.push({credits: credits[1].innerText, grade: grade[1].innerText});

studyYear.push({credits: credits[2].innerText, grade: grade[2].innerText});

studyYear.push({credits: credits[3].innerText, grade1: grade[3].innerText, grade2: grade[4].innerText});

studyYear.push({credits: credits[4].innerText, grade: grade[5].innerText});

studyYear.push({credits: credits[5].innerText, grade1: grade[6].innerText, grade2: grade[7].innerText, grade3: grade[8].innerText});

studyYear.push({credits: credits[6].innerText, grade1: grade[9].innerText, grade2: grade[10].innerText, grade3: grade[11].innerText});

studyYear.push({credits: credits[7].innerText, grade: grade[12].innerText});

studyYear.push({credits: credits[8].innerText, grade: grade[13].innerText});

studyYear.push({credits: credits[9].innerText, grade: grade[14].innerText});

function addCredits (index, studyYear) {
    let amount = 0;
    amount += parseFloat(studyYear[index].credits);
    return amount;
}

if (studyYear[0].grade >= 5.5) {
    creditsAmount += addCredits(0, studyYear)
}

if (studyYear[1].grade >= 5.5) {
    creditsAmount += addCredits(1, studyYear)
}

if (studyYear[2].grade >= 5.5) {
    creditsAmount += addCredits(2, studyYear)
}

if (studyYear[3].grade1 >= 5.5 && studyYear[3].grade2 >= 5.5) {
    creditsAmount += addCredits(3, studyYear)
}

if (studyYear[4].grade >= 5.5) {
    creditsAmount += addCredits(4, studyYear)
}

if (studyYear[5].grade1 >= 5.5 && studyYear[5].grade2 >= 5.5 && studyYear[5].grade3 >= 5.5) {
    creditsAmount += addCredits(5, studyYear)
}

if (studyYear[6].grade1 >= 5.5 && studyYear[6].grade2 >= 5.5 && studyYear[6].grade3 >= 5.5) {
    creditsAmount += addCredits(6, studyYear)
}

if (studyYear[7].grade >= 5.5) {
    creditsAmount += addCredits(7, studyYear)
}

if (studyYear[8].grade >= 5.5) {
    creditsAmount += addCredits(8, studyYear)
}

if (studyYear[9].grade >= 5.5) {
    creditsAmount += addCredits(9, studyYear)
}

percentage = (creditsAmount * 100)/60;
value.style.width = percentage + "%";
if (creditsAmount !== 0 ) {
    value.innerText = creditsAmount + " EC";
}

if (creditsAmount >= 45) {
    value.style.background = "green"
    limit.style.display = "none";
} else {
    value.style.background = "red"
}