const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    // Use bmi for comparison and display in alert
    if (bmi < 18.6) {
      alert("Underweight: Less than 18.6");
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      alert("Normal Range: 18.6 to 24.9");
    } else {
      alert("Overweight: Greater than 24.9");
    }
  }
});
