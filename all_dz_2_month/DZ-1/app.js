let month = prompt("Введите месяц вашего рождения");
let day = prompt("Введите день вашего рождения");

if ((month === "январь" && day >= 20) || (month === "февраль" && day <= 18)) {
  console.log("Ваш знак зодиака - Водолей");
} else if ((month === "февраль" && day >= 19) || (month === "март" && day <= 20)) {
  console.log("Ваш знак зодиака - Рыба");
} else if ((month === "март" && day >= 21) || (month === "апрель" && day <= 19)) {
  console.log("Ваш знак зодиака - Овен");
} else if ((month === "апрель" && day >= 20) || (month === "май" && day <= 20)) {
  console.log("Ваш знак зодиака - Телец");
} else if ((month === "май" && day >= 21) || (month === "июнь" && day <= 21)) {
  console.log("Ваш знак зодиака - Близнецы");
} else if ((month === "июнь" && day >= 22) || (month === "июль" && day <= 22)) {
  console.log("Ваш знак зодиака - Рак");
} else if ((month === "июль" && day >= 23) || (month === "август" && day <= 22)) {
  console.log("Ваш знак зодиака - Лев");
} else if ((month === "август" && day >= 23) || (month === "сентябрь" && day <= 22)) {
  console.log("Ваш знак зодиака - Дева");
} else if ((month === "сентябрь" && day >= 23) || (month === "октябрь" && day <= 22)) {
  console.log("Ваш знак зодиака - Весы");
} else if ((month === "октябрь" && day >= 23) || (month === "ноябрь" && day <= 21)) {
  console.log("Ваш знак зодиака - Скорпион");
} else if ((month === "ноябрь" && day >= 22) || (month === "декабрь" && day <= 21)) {
  console.log("Ваш знак зодиака - Стрелец");
} else if ((month === "декабрь" && day >= 22) || (month === "январь" && day <= 19)) {
  console.log("Ваш знак зодиака - Козерог");
} else {
  console.log("Вы ввели некорректные данные");
}
