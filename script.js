const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }
  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").innerHTML = `${Math.round(
    value * 100
  )}<span class="perc">&nbsp;%</span>`;
}

setGaugeValue(gaugeElement, 0.73);