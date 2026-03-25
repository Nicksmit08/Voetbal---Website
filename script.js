function kiesFavoriet(speler) {
    document.getElementById("favorietTekst").innerHTML =
    "⭐ Jouw favoriete speler is: " + speler;
}

function toonBericht(event) {
    event.preventDefault();

    let naam = document.getElementById("naam").value;

    document.getElementById("melding").innerHTML =
    "✅ Bedankt " + naam + "! Je bericht is verzonden.";
}
function kiesFavoriet(speler) {
    document.getElementById("favorietTekst").innerHTML =
    "⭐ Jouw favoriete speler is: " + speler;
}

function verzendBericht(event) {
    event.preventDefault();

    let naam = document.getElementById("naam").value;

    document.getElementById("bevestiging").innerHTML =
    "✅ Bedankt " + naam + "! Je bericht is verzonden.";

    document.querySelector("form").reset();
}