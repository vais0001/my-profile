const grade = document.getElementsByClassName("grade");
const credits = document.getElementsByClassName("credits");
const value = document.getElementById("nbsa-value");

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

if (studyYear[0].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[0].credits);
}

if (studyYear[1].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[1].credits);
}

if (studyYear[2].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[2].credits);
}

if (studyYear[3].grade1 >= 5.5 && studyYear[3].grade2 >= 5.5) {
    creditsAmount += parseFloat(studyYear[3].credits);
}

if (studyYear[4].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[4].credits);
}

if (studyYear[5].grade1 >= 5.5 && studyYear[5].grade2 >= 5.5 && studyYear[5].grade3 >= 5.5) {
    creditsAmount += parseFloat(studyYear[5].credits);
}

if (studyYear[6].grade1 >= 5.5 && studyYear[6].grade2 >= 5.5 && studyYear[6].grade3 >= 5.5) {
    creditsAmount += parseFloat(studyYear[6].credits);
}

if (studyYear[7].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[7].credits);
}

if (studyYear[8].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[8].credits);
}

if (studyYear[9].grade >= 5.5) {
    creditsAmount += parseFloat(studyYear[9].credits);
}

percentage = (creditsAmount * 100)/60;
value.style.width = percentage + "%";