window.onload = function () {
  const estBtnEl = document.getElementById('estimateCost');
  estBtnEl.onclick = onEstBtnClick;
};

function onEstBtnClick() {
  const numDays = +document.getElementById('numberOfDays').value;
  const costPerDay = 29.99;

  const baseCost = numDays * costPerDay;

  let extraDailyCost = 0;
  if (document.getElementById('tollTag').checked) {
    extraDailyCost += 3.95;
  }
  if (document.getElementById('gps').checked) {
    extraDailyCost += 2.95;
  }
  if (document.getElementById('roadsideAssistance').checked) {
    extraDailyCost += 2.95;
  }
  const optionsCost = extraDailyCost * numDays;

  let under25surcharge = 0;
  if (document.getElementById('under25_yes').checked) {
    under25surcharge = baseCost * 0.3;
  }

  const totalCost = baseCost + optionsCost + under25surcharge;

  document.getElementById('baseCost').innerHTML = baseCost.toFixed(2);
  document.getElementById('optionsCost').innerHTML = optionsCost.toFixed(2);
  document.getElementById('under25surcharge').innerHTML = under25surcharge.toFixed(2);
  document.getElementById('totalDue').innerHTML = totalCost.toFixed(2);
}
