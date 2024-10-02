document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hämta värden från formuläret och konvertera till flyttal
    const ph = parseFloat(document.getElementById('phValue').value);
    const moisture = parseFloat(document.getElementById('moistureValue').value);
    const soilColor = document.getElementById('soilColor').value; // Hämta det valda värdet från dropdown-listan

    // Validera pH-värdet (måste vara mellan 0 och 14)
    if (ph < 1 || ph > 14) {
        alert("pH-värdet måste vara mellan 1 och 14.");
        return; // Avbryt om värdet är utanför gränserna
    }

    // Validera fuktighetsprocenten (måste vara mellan 0 och 100)
    if (moisture < 0 || moisture > 100) {
        alert("Fuktighetsprocenten måste vara mellan 0 och 100.");
        return; // Avbryt om värdet är utanför gränserna
    }

    // Skapa en tom array för output
    let output = [];

    // Lägg till "morot" och "vete" om pH-värdet är mindre än 7, annars "potatis" och "rödbeta"
    if (ph < 7) {
        output.push("morot");
        output.push("vete");
    } else {
        output.push("potatis");
        output.push("rödbeta");
    }

    // testningar för mer specifika värden
    if (ph < 5 && ph > 2) {
        output.push("majs");
    }
    if (ph > 8 && ph < 11) {
        output.push("havre");
    }

    // Om fuktigheten är över 30 %, ta bort "morot" och "rödbeta" från arrayen
    if (moisture > 30) {
        output = output.filter(item => item !== "morot");
        output = output.filter(item => item !== "rödbeta");
    }

    if (soilColor == "Svart") {
        output = output.filter(item => item !== "rödbeta");
    }

    // Visa resultatet på sidan
    const resultDiv = document.getElementById('result');
    if (output.length > 0) {
        resultDiv.textContent = "Din mest optimala gröda är: " + output.join(", ");
    }
});
