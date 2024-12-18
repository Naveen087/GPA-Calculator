var gradepoint1;
var gradepoint2;
var gradepoint3;
var gradepoint4;
var gradepoint5;
var gradepoint6;
var gradepoint7;
var gradepoint8;

//Credit points

const credit15 = 1.5;
const credit2 = 2;
const credit3 = 3;
const credit4 = 4;

//We Have 3 Sub (with 3 credits) + 2 Sub (with 4 credits) + 1 sub (with 2credits) + 2 sub (with 1.5 credits)

//Total Credit Points for 4th Semester

const totalCredits = 22;

const sub1 = document.getElementById("aiml");
const sub2 = document.getElementById("toc");
const sub3 = document.getElementById("dbms");
const sub4 = document.getElementById("we");
const sub5 = document.getElementById("ios");
const sub6 = document.getElementById("evss");
const sub7 = document.getElementById("osl");
const sub8 = document.getElementById("dbmsl");

let result = document.getElementById("display");
let calculate = document.getElementById("calculate");

sub1.onchange = function selected1() {
  var selected1 = sub1.value;

  switch (true) {
    case selected1 == "O":
      gradepoint1 = 10 * credit4;
      break;

    case selected1 == "A+":
      gradepoint1 = 9 * credit4;
      break;

    case selected1 == "A":
      gradepoint1 = 8 * credit4;
      break;

    case selected1 == "B+":
      gradepoint1 = 7 * credit4;
      break;

    case selected1 == "B":
      gradepoint1 = 6 * credit4;
      break;

    case selected1 == "C":
      gradepoint1 = 5 * credit4;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub2.onchange = function selected2() {
  var selected2 = sub2.value;

  switch (true) {
    case selected2 == "O":
      gradepoint2 = 10 * credit3;
      break;

    case selected2 == "A+":
      gradepoint2 = 9 * credit3;
      break;

    case selected2 == "A":
      gradepoint2 = 8 * credit3;
      break;

    case selected2 == "B+":
      gradepoint2 = 7 * credit3;
      break;

    case selected2 == "B":
      gradepoint2 = 6 * credit3;
      break;

    case selected2 == "C":
      gradepoint2 = 5 * credit3;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub3.onchange = function selected3() {
  var selected3 = sub3.value;

  switch (true) {
    case selected3 == "O":
      gradepoint3 = 10 * credit3;
      break;

    case selected3 == "A+":
      gradepoint3 = 9 * credit3;
      break;

    case selected3 == "A":
      gradepoint3 = 8 * credit3;
      break;

    case selected3 == "B+":
      gradepoint3 = 7 * credit3;
      break;

    case selected3 == "B":
      gradepoint3 = 6 * credit3;
      break;

    case selected3 == "C":
      gradepoint3 = 5 * credit3;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub4.onchange = function selected4() {
  var selected4 = sub4.value;

  switch (true) {
    case selected4 == "O":
      gradepoint4 = 10 * credit4;
      break;

    case selected4 == "A+":
      gradepoint4 = 9 * credit4;
      break;

    case selected4 == "A":
      gradepoint4 = 8 * credit4;
      break;

    case selected4 == "B+":
      gradepoint4 = 7 * credit4;
      break;

    case selected4 == "B":
      gradepoint4 = 6 * credit4;
      break;

    case selected4 == "C":
      gradepoint4 = 5 * credit4;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub5.onchange = function selected5() {
  var selected5 = sub5.value;

  switch (true) {
    case selected5 == "O":
      gradepoint5 = 10 * credit3;
      break;

    case selected5 == "A+":
      gradepoint5 = 9 * credit3;
      break;

    case selected5 == "A":
      gradepoint5 = 8 * credit3;
      break;

    case selected5 == "B+":
      gradepoint5 = 7 * credit3;
      break;

    case selected5 == "B":
      gradepoint5 = 6 * credit3;
      break;

    case selected5 == "C":
      gradepoint5 = 5 * credit3;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub6.onchange = function selected6() {
  var selected6 = sub6.value;

  switch (true) {
    case selected6 == "O":
      gradepoint6 = 10 * credit2;
      break;

    case selected6 == "A+":
      gradepoint6 = 9 * credit2;
      break;

    case selected6 == "A":
      gradepoint6 = 8 * credit2;
      break;

    case selected6 == "B+":
      gradepoint6 = 7 * credit2;
      break;

    case selected6 == "B":
      gradepoint6 = 6 * credit2;
      break;

    case selected6 == "C":
      gradepoint6 = 5 * credit2;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub7.onchange = function selected7() {
  var selected7 = sub7.value;

  switch (true) {
    case selected7 == "O":
      gradepoint7 = 10 * credit15;
      break;

    case selected7 == "A+":
      gradepoint7 = 9 * credit15;
      break;

    case selected7 == "A":
      gradepoint7 = 8 * credit15;
      break;

    case selected7 == "B+":
      gradepoint7 = 7 * credit15;
      break;

    case selected7 == "B":
      gradepoint7 = 6 * credit15;
      break;

    case selected7 == "C":
      gradepoint7 = 5 * credit15;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

sub8.onchange = function selected8() {
  var selected8 = sub8.value;

  switch (true) {
    case selected8 == "O":
      gradepoint8 = 10 * credit15;
      break;

    case selected8 == "A+":
      gradepoint8 = 9 * credit15;
      break;

    case selected8 == "A":
      gradepoint8 = 8 * credit15;
      break;

    case selected8 == "B+":
      gradepoint8 = 7 * credit15;
      break;

    case selected8 == "B":
      gradepoint8 = 6 * credit15;
      break;

    case selected8 == "C":
      gradepoint8 = 5 * credit15;
      break;

    default:
      window.alert("Please Select a grade");
  }
};

calculate.onclick = function calculate() {
  let totalSubjects =
    gradepoint1 +
    gradepoint2 +
    gradepoint3 +
    gradepoint4 +
    gradepoint5 +
    gradepoint6 +
    gradepoint7 +
    gradepoint8;
  let gpa = (totalSubjects / totalCredits).toFixed(3);

  if (isNaN(totalSubjects)) {
    window.alert("Choose a Grade for All Subjects");
  } else {
    result.textContent = ` Your GPA is ${gpa} `;
  }
};
