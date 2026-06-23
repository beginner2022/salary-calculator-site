// SALARY CALCULATOR
function calculateSalary(){
let ctc = parseFloat(document.getElementById("ctc").value);

if(!ctc){
alert("Enter CTC");
return;
}

let tax = ctc * 0.06;   // simplified estimate
let pf = ctc * 0.12;

let monthly = (ctc - tax - pf) / 12;

document.getElementById("result").innerHTML =
`
<b>Monthly In-hand:</b> ₹${monthly.toFixed(0)} <br>
<b>Estimated Tax:</b> ₹${tax.toFixed(0)} <br>
<b>PF:</b> ₹${pf.toFixed(0)}
`;
}

// EMI CALCULATOR (used in emi.html)
function calculateEMI(){
let p = parseFloat(document.getElementById("loan").value);
let r = parseFloat(document.getElementById("rate").value)/12/100;
let n = parseFloat(document.getElementById("months").value);

let emi = (p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

document.getElementById("emiResult").innerHTML =
"Monthly EMI: ₹" + emi.toFixed(0);
}

// TAX CALCULATOR (simple version)
function calculateTax(){
let income = parseFloat(document.getElementById("income").value);

let tax = income * 0.05;

document.getElementById("taxResult").innerHTML =
"Estimated Tax: ₹" + tax.toFixed(0);
}
