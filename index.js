window.onload = function () {
  const estBtnEl = document.getElementById('estimateCost');
  estBtnEl.onclick = onEstBtnClick;

  // uncomment these for stretch goals
  // document.getElementById('under25_yes').onchange = on25OptionChange;
  // document.getElementById('under25_no').onchange = on25OptionChange;

  // setDisabledPropertyForOptions(true);
  // document.getElementById('pickupDate').onchange = onDaysOrDateChange;
  // document.getElementById('numberOfDays').onchange = onDaysOrDateChange;
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

function on25OptionChange() {
  const row = document.getElementById('under25SurchargeRow');
  if (document.getElementById('under25_yes').checked) {
    row.style.display = 'table-row';
  } else {
    row.style.display = 'none';
  }
}

function onDaysOrDateChange() {
  const dateEl = document.getElementById('pickupDate');
  const daysEl = document.getElementById('numberOfDays');

  if (dateEl.value === '' || daysEl.value === '') {
    setDisabledPropertyForOptions(true);
  } else {
    setDisabledPropertyForOptions(false);
  }
}

function setDisabledPropertyForOptions(isDisabled) {
  document.getElementById('tollTag').disabled = isDisabled;
  document.getElementById('gps').disabled = isDisabled;
  document.getElementById('roadsideAssistance').disabled = isDisabled;
  document.getElementById('under25_yes').disabled = isDisabled;
  document.getElementById('under25_no').disabled = isDisabled;
}
