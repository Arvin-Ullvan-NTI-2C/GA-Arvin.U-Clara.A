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

    
    var vete = {
        ph: 5,
        moisture: [30],
        namn: "vete",
        soilColor: "Ljusbrun"
    }

    var morot = {
        ph: 5,
        moisture: [30],
        namn: "morot",
        soilColor: "Ljusbrun"
    }

    var potatis = {
        ph: 6,
        moisture: [60, 65, 70, 75, 80],
        namn: "potatis",
        soilColor: "Ljusbrun"
    }

    var rodbeta = {
        ph: 5,
        moisture: [30],
        namn: "rödbeta",
        soilColor: "Svart"
    }

    var majs = {
        ph: 5,
        moisture: [35],
        namn: "majs",
        soilColor: "Ljusbrun"
    }

    var havre = {
        ph: 6,
        moisture: [30],
        namn: "havre",
        soilColor: "Ljusbrun"
    }

    let output = [];
    let grodor = [vete, morot, potatis, rodbeta, majs, havre];
    grodor.forEach((element) => output.push(element.namn));


    for (let i = 0; i < grodor.length; i++) {
        let y = 0;
        if (grodor[i].ph !== ph) {
            output = output.filter( item => item !== grodor[i].namn);
        }
        
        while (y < grodor[i].length) {
            if (grodor[i].moisture[y] !== moisture) {
                output = output.filter( item => item !== grodor[i].namn);
            }
            y += 1
        }

        if (grodor[i].soilColor !== soilColor) {
            output = output.filter( item => item !== grodor[i].namn);
        }
    }


    // Visa resultatet på sidan
    const resultDiv = document.getElementById('result');
    if (output.length > 0) {
        resultDiv.textContent = "Din mest optimala gröda är: " + output.join(", ");
    }
});
