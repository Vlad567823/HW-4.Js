
let text1 = "Заповнений";
let text2 = "";

if (text1 != "" && text2 != "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

let num1 = 5;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

let text = "Це мова програмування JavaScript";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

let number = 19;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}


let name = "Анна";
let email = "anna@.";
let password = "chump1488";

if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}