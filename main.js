let yearInput = document.getElementById("yearInput");
let monthInput = document.getElementById("monthInput");
let dayInput = document.getElementById("dayInput");
let dateNow = new Date();
let currentYear = dateNow.getFullYear();
let currentMonth = dateNow.getMonth() + 1;
let currentDay = dateNow.getDate();
let days;
let months;
let years;
let countM;
let countY;
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("mouseover", () => {
  submitBtn.style.backgroundColor = " hsl(259, 100%, 65%)";
});
submitBtn.addEventListener("mouseout", () => {
  submitBtn.style.backgroundColor = "hsl(0, 0%, 8%)";
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  countM = 0;
  countY = 0;
  let yearOfBirth = +yearInput.value;
  let monthOfBirth = +monthInput.value;
  let dayOfBirth = +dayInput.value;

  // validateDate(day, month, year);
  if (validateDate(dayOfBirth, monthOfBirth, yearOfBirth) == true) {
    getMonths(monthOfBirth, currentMonth);
    getDays(currentDay, dayOfBirth);
    getMonths(monthOfBirth, currentMonth);
    getYears(currentYear, yearOfBirth);
  }
});

function validateDate(day, month, year) {
  let spanOne = document.getElementById("spanOne");
  let spanTow = document.getElementById("spanTow");
  let spanThree = document.getElementById("spanThree");
  let wordDay = document.getElementById("wordDay");
  let wordMonth = document.getElementById("wordMonth");
  let wordYear = document.getElementById("wordYear");

  try {
    if (day == 0 || day == "" || day > 31) {
      dayInput.style.borderColor = "hsl(0, 100%, 67%)";
      wordDay.style.color = "hsl(0, 100%, 67%)";
      spanOne.innerText = "Invalid day";
      throw "Must be a valid day";
    }
    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    wordDay.style.color = "hsl(0, 0%, 86%)";
    spanOne.innerText = "";

    if (month == "" || month > 12 || month < 1) {
      monthInput.style.borderColor = "hsl(0, 100%, 67%)";
      wordMonth.style.color = "hsl(0, 100%, 67%)";
      spanTow.innerText = "Invalid month";
      throw "Invalid month";
    }
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    wordMonth.style.color = "hsl(0, 0%, 86%)";
    spanTow.innerText = "";

    if (year == "") {
      yearInput.style.borderColor = "hsl(0, 100%, 67%)";
      wordYear.style.color = "hsl(0, 100%, 67%)";
      spanThree.innerText = "Invalid year";
      throw "Invalid year";
    }
    yearInput.style.borderColor = "hsl(0, 0%, 86%)";
    wordYear.style.color = "hsl(0, 0%, 86%)";
    spanThree.innerText = "";

    if (year > currentYear) {
      spanThree.innerText = "Must be in the past";
      throw "Must be in the past";
    }
    spanThree.innerText = "";

    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      if (day > 31) {
        spanOne.innerText = "Invalid day";
        throw "Invalid day";
      }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day > 30) {
        spanOne.innerText = "Invalid day";
        throw "Invalid day";
      }
    } else if (month == 2) {
      if (day > 29) {
        spanOne.innerText = "Invalid day";
        throw "Invalid day";
      }
    }
    spanOne.innerText = "";

    return true;
  } catch (err) {
    console.log(err);
  }
}
function getYears(currentYear, yearOfBirth) {
  let spanYear = document.getElementById("spanYear");
  years = currentYear - yearOfBirth;
  console.log(countY);
  if (+monthInput.value > currentMonth) {
    countY -= 1;
  }
  spanYear.innerText = years + countY + ` `;
  return console.log(years + countY);
}

function getMonths(monthOfBirth, currentMonth) {
  let spanMonth = document.getElementById("spanMonth");
  months = monthOfBirth - currentMonth;

  if (months == 0) {
    months = 0;
    countY += 1;
    spanMonth.innerText = months + countM + ` `;
    return console.log(months + countM);
  } else if (months > 0) {
    spanMonth.innerText = 12 - months + countM + ` `;
    return console.log(12 - months + countM);
  } else if (months < 0) {
    spanMonth.innerText = months * -1 + countM + ` `;
    return console.log(months * -1 + countM);
  }
}

function getDays(currentDay, dayOfBirth) {
  let spanDay = document.getElementById("spanDay");
  days = currentDay - dayOfBirth;
  let month = +monthInput.value;
  if (days == 0 && months == 0) {
    days = 0;
    spanDay.innerText = `${days} `;
    return console.log(days);
  } else if (days == 0 && months > 0) {
    days = 0;
    countM += 1;
    spanDay.innerText = `${days} `;
    return console.log(days);
  } else if (days > 0) {
    spanDay.innerText = `${days} `;
    return console.log(days);
  } else if (days < 0) {
    countM -= 1;
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      spanDay.innerText = 31 - days * -1 + ` `;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      spanDay.innerText = 30 - days * -1 + ` `;
    } else if (month == 2) {
      spanDay.innerText = 29 - days * -1 + ` `;
    }

    return console.log(30 - days * -1);
  }
}
