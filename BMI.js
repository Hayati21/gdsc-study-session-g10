// calculate the BMI of aperson
function calculateBmi(height , mass){
    const Bmi = mass/(height**2);
    return Bmi
}
const height =prompt('what is your height');
const mass =prompt('what is your mass' );

_BMI = calculateBmi(height, mass)
console.log(_BMI);