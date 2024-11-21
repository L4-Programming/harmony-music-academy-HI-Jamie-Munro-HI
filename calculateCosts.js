export function calculateCosts(data) {

  const levelCost = {
    basic: 12.25,
    advanced: 15.5,
  };

  let costPerHour = levelCost[data.userLevel];
  let totalCost = (costPerHour * data.userHours).toFixed(2);

  const output = {
    totalCost,
    userEmail: data.userEmail,
    userHours: data.userHours,
    userLevel: data.userLevel
  }

  return output;
}

