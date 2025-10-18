// switch statement.............................

// we want to know the day name through switch statement......

const date = new Date();

console.log(date);

const today = date.getDay();

console.log(today);

switch (today) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("No date found");
}
