/*jshint esversion: 6 */

/*
 * Event-Handler-Funktion für den Button "Begrüße mich!".
 */ 
function sageHallo() {

    let nameEingegeben = $("#inputName").val();
    //let nameEingegeben = jQuery("#inputName").val();                 // Langform für jQuery-Funktion
    //let nameEingegeben = document.getElementById("inputName").value; // ohne jQuery, mit DOM
        
    nameEingegeben = nameEingegeben.trim();
    console.log(`Name eingegeben: "${nameEingegeben}"`);

    if (nameEingegeben.length === 0) {

        alert("Fehler: Kein Name eingegeben!");

    } else {
        
        $("#ergebnis").text("Hallo " + nameEingegeben + "!");
    }
}


/*
 * Event-Handler für den Lösch-Button
 */
function loeschen() {
    $("#inputName").val("");
    $("#ergebnis").text("");
}
