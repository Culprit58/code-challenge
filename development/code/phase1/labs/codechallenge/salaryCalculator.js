// Net Salary Calculator (2025)
// Calculates Net Salary using: PAYE, SHIF, NSSF, and Housing Levy

// PAYE calculation (progressive bands with personal relief)
function calculatePAYE(salary) {
  let tax = 0;

  if (salary <= 24000) tax = salary * 0.1;
  else if (salary <= 32333) tax = 24000 * 0.1 + (salary - 24000) * 0.25;
  else if (salary <= 500000)
    tax = 24000 * 0.1 + 8333 * 0.25 + (salary - 32333) * 0.3;
  else if (salary <= 800000)
    tax =
      24000 * 0.1 +
      8333 * 0.25 +
      (500000 - 32333) * 0.3 +
      (salary - 500000) * 0.325;
  else
    tax =
      24000 * 0.1 +
      8333 * 0.25 +
      (500000 - 32333) * 0.3 +
      300000 * 0.325 +
      (salary - 800000) * 0.35;

  return Math.max(tax - 2400, 0); // subtract personal relief
}

// SHIF = 2.75% of gross salary
const calculateSHIF = (gross) => gross * 0.0275;

// NSSF (6% Tier I up to 8k, 6% Tier II up to 72k)
function calculateNSSF(basic) {
  const tierI = Math.min(basic, 8000) * 0.06;
  const tierII = basic > 8000 ? Math.min(basic - 8000, 64000) * 0.06 : 0;
  return tierI + tierII;
}

// Housing Levy = 1.5% of gross salary
const calculateHousingLevy = (gross) => gross * 0.015;

// Main Net Salary function
function calculateNetSalary(basic, benefits) {
  const gross = basic + benefits;
  const payee = calculatePAYE(gross);
  const shif = calculateSHIF(gross);
  const nssf = calculateNSSF(basic);
  const housingLevy = calculateHousingLevy(gross);
  const net = gross - (payee + shif + nssf + housingLevy);

  return { gross, payee, shif, nssf, housingLevy, net };
}

// testing with random salary values
console.log(calculateNetSalary(80000, 10000));
