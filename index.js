function calculateAverage() {
    const num1 = document.getElementById('verbrauch1').value;
    const num2 = document.getElementById('verbrauch2').value;
    const num3 = document.getElementById('verbrauch3').value;
  
    let average = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;

    if(isNaN(average)){
      console.log("HI!")
      document.getElementById('result').innerHTML = `<p class="keine_eintragung">Du hast noch keine Werte eingetragen!</p>`
    }
    else{
      document.getElementById('result').innerHTML = `<p> Durchschnittlich verbrauchtes Volumen (Natronlauge): <span> ${average.toFixed(6)} ml</span></p>`;
    }
  }

let c_h_ions
function calculateHIons(){
  const c_natronlauge = document.getElementById('c_natronlauge').value
  const v_natronlauge = document.getElementById('v_natronlauge').value
  const v_energy = document.getElementById('v_energy').value

  c_h_ions = ((c_natronlauge * v_natronlauge) / v_energy).toFixed(6)

  if(isNaN(c_h_ions)){
    document.getElementById('keine_eintragung').textContent = `Du hast noch keine Werte eingetragen!`
  }
  else{
    document.getElementById('keine_eintragung').textContent = ``
    document.getElementById('c_h_ions').innerHTML = `<p class="c_h_ions_result">${c_h_ions} mol/ml</p>`
    document.getElementById('ergebnis_h_ions').textContent = `Konzentration (Wasserstoff-Ionen): ${c_h_ions} mol/ml`
  }
  
}

function calculatepH(){
  let pH = (-Math.log10(c_h_ions)).toFixed(6);
  if (isNaN(pH)){
    document.getElementById('ph_result').textContent = `Du hast keine Werte oben eingetragen!`
  }
  else{
    document.getElementById('ph_result').textContent = `Der pH-Wert des Energydrinks ist: ${pH}`
  }
}
