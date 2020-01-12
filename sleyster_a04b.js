/* Heather Sleyster
sleyster_a03c.js
INFO 2124
Thoendel
01/09/2020
*/

const firstName = "Heather";
let weight = "148.5";
let height = "5 Feet";
let heightInInches = parseInt(height, 10) * 12;
let age = "40";
const marsGravity = 0.38;
const inchesToMeters = 2.54;
let heightInMeters = heightInInches * inchesToMeters;
let ageInDays = Number(age) * 365;
let ageInMarsYears = ageInDays / 687;
let weightOnMars = parseFloat(weight, 10) * marsGravity;
String(weightOnMars);
let message = `Hello there, ${ firstName }! On Earth you weigh ${ weight } pounds.
But, since gravity is weaker on Mars, you would only weigh ${ weightOnMars } pounds there! \n
 \n
 Neat huh? Want to know what else is neat? \n
 
 Mars takes longer to rotate around the sun as does Earth. This means the Mars year is actually \n
 longer than our "terran" year. So although you are ${ age } years old on Earth, you're only \n
 ${ ageInMarsYears } years old on Mars. \n
 
 Did you know, the European Space Agency requires potential astronauts to measure between \n
 153 and 190 cm? Just in case you ever decided to move to Europe and wanted to become \n
 an astronaut, your height in metric is ${ heightInMeters } cm.`;

 console.log(message);

