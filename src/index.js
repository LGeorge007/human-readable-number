module.exports = function toReadable(number) {
    let hundreds = Math.trunc(number / 100);
    let tens = Math.trunc(number % 100 / 10);
    let units = number % 10;
    let str = "";

    //ZERO
    if (hundreds == 0 && tens == 0 && units == 0) {
      return "zero";
    };

    //hundreds
    switch (hundreds) {
      case 0:
        break;
      case 1:
        str = "one hundred ";
        break;
      case 2:
        str = "two hundred ";
        break;
      case 3:
        str = "three hundred ";
        break;
      case 4:
        str = "four hundred ";
        break;
      case 5:
        str = "five hundred ";
        break;
      case 6:
        str = "six hundred ";
        break;
      case 7:
        str = "seven hundred ";
        break;
      case 8:
        str = "eight hundred ";
        break;
      case 9:
        str = "nine hundred ";
        break;
    };

  if (tens == 1) {
    switch (units) {
      case 0:
        str += "ten";
        break;
      case 1:
        str += "eleven";
        break;
      case 2:
        str += "twelve";
        break;
      case 3:
        str += "thirteen";
        break;
      case 4:
        str += "fourteen";
        break;
      case 5:
        str += "fifteen";
        break;
      case 6:
        str += "sixteen";
        break;
      case 7:
        str += "seventeen";
        break;
      case 8:
        str += "eighteen";
        break;
      case 9:
        str += "nineteen";
        break;
    };
  } else {
    //tens
    switch (tens) {
      case 0:
        break;
      case 1:
          break;
      case 2:
        str += "twenty ";
        break;
      case 3:
        str += "thirty ";
        break;
      case 4:
        str += "forty ";
        break;
      case 5:
        str += "fifty ";
        break;
      case 6:
        str += "sixty ";
        break;
      case 7:
        str += "seventy ";
        break;
      case 8:
        str += "eighty ";
        break;
      case 9:
        str += "ninety ";
        break;
    };
    //units
    switch (units) {
      case 0:
        break;
      case 1:
        str += "one ";
        break;
      case 2:
        str += "two ";
        break;
      case 3:
        str += "three ";
        break;
      case 4:
        str += "four ";
        break;
      case 5:
        str += "five ";
        break;
      case 6:
        str += "six ";
        break;
      case 7:
        str += "seven ";
        break;
      case 8:
        str += "eight ";
        break;
      case 9:
        str += "nine ";
        break;
    };
  };
    return str.trim();
  }
