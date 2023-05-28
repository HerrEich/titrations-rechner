let vol_naoh = (document.getElementById('vol_naoh').value);
const ergebnis_feld = document.getElementById('ergebnis');
const m_zitronensaeure_feld = document.getElementById('m_zitronensäure');
m_zitronensäure
const v_energy = 10
const c_naoh = 0.001
const mol_gewicht_zitronensaeure = 192.13
const dissoziationsgrad_zitronensaeure = 0.8

function calculate(){
    let vol_naoh = (document.getElementById('vol_naoh').value)
    let c_zitronensaeure = 0.333 * ((c_naoh * vol_naoh) / v_energy);

    let pH = (-Math.log10(c_zitronensaeure * dissoziationsgrad_zitronensaeure)).toFixed(4);
    ergebnis_feld.textContent = "Der Energy-Drink hat einen pH-Wert von: " + pH;
}

const startwert = document.getElementById('startwert');
const zielwert = document.getElementById('zielwert');
const ergebnis_verbrauch = document.getElementById('ergebnis_verbrauch');

function calculate_verbrauch(){
    let ergebnis = zielwert.value - startwert.value;
    ergebnis_verbrauch.textContent = "Vebrauchtes Volumen von Natronlauge (NaOH) in ml: " + ergebnis;

}