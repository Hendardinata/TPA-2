let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);
  let result = document.getElementById("bmi-output");

  //   const bmi = (weight / ((height * height) / 10000)).toFixed(1);

  if (height && weight) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    console.log(bmi);

    if (bmi < 18.5) {
      result.innerHTML =
        "Your BMI is " + bmi + " which means you are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML =
        "Your BMI is " + bmi + " which means you are Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML =
        "Your BMI is " + bmi + " which means you are Overweight";
    } else {
      result.innerHTML = "Your BMI is " + bmi + " which means you are Obesity";
    }
  }
});
