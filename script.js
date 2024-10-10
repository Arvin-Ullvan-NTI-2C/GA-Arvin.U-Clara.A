document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hämta värden från formuläret och konvertera till flyttal
    const ph = parseFloat(document.getElementById('phValue').value);
    const moisture = parseFloat(document.getElementById('moistureValue').value);
    const soilColor = document.getElementById('soilColor').value; // Hämta det valda värdet från dropdown-listan
    const jordstruktur = document.getElementById('jordstruktur').value;


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
        ph: [6.0,6.5,7.0,7.5],
        moisture: [50, 55, 60, 65, 70],
        namn: "vete",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var rag = {
        ph: [5.5,6.0,6.5,7.0],
        moisture: [50, 55, 60, 65, 70],
        namn: "råg",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]
    }

    var majs = {
        ph: [6.0,6.5,7.0],
        moisture: [60, 65, 70, 75, 80],
        namn: "majs",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var bonor = {
        ph: [6.0,6.5,7.0,7.5],
        moisture: [50,55,60,65,70],
        namn: "bönor",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var karlselleri = {
        ph: [6.0,6.5,7.0],
        moisture: [60,65,70,75,80],
        namn: "kärlselleri",
        soilColor: ["Mörkbrun", "Svart"],
        jordstruktur: ["Lerig"]

    }

    var morot = {
        ph: [6.0,6.5,7.0],
        moisture: [50,55,60,65,70],
        namn: "morot",
        soilColor: ["Ljusbrun", "Brun"],
        jordstruktur: ["Sandig", "Siltig"]

    }

    var potatis = {
        ph: [5.5,6,6.5],
        moisture: [60, 65, 70, 75, 80],
        namn: "potatis",
        soilColor: ["Ljusbrun", "Brun"],
        jordstruktur: ["Sandig", "Lerig"]

    }

    var kal = {
        ph: [6.0,6.5,7.0,7.5],
        moisture: [50,55,60,65,70],
        namn: "kål",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var tomater = {
        ph: [6.0,6.5,7.0],
        moisture: [60,65,70],
        namn: "tomater",
        soilColor: ["Brun", "Ljusbrun"],
        jordstruktur: ["Granulär"]

    }

    var sockerbeta = {
        ph: [6.0,6.5,7.0],
        moisture: [50,55,60,65,70],
        namn: "sockerbeta",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var rodbeta = {
        ph: [6.0,6.5,7.0],
        moisture: [50,55,60,65,70],
        namn: "rödbeta",
        soilColor: ["Ljusbrun", "Brun"],
        jordstruktur: ["Sandig", "Siltig"]

    }

    var artor = {
        ph: [6.0,6.5,7.0,7.5],
        moisture: [50,55,60,65,70],
        namn: "ärtor",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var havre = {
        ph: [6.0,6.5,7.0],
        moisture: [50,55,60,65,70],
        namn: "havre",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var raps = {
        ph: [6.0,6.5,7.0,7.5],
        moisture: [50,55,60, 65, 70,],
        namn: "raps",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var korn = {
        ph: [6.0,6.5,7.5],
        moisture: [50,55,60, 65, 70],
        namn: "korn",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär", "Krummig"]

    }

    var sallad = {
        ph: [6.0,6.5,7.0],
        moisture: [50,55,60,65,70],
        namn: "sallad",
        soilColor: ["Ljusbrun", "Brun"],
        jordstruktur: ["Granulär"]

    }

    var zucchini = {
        ph: [6.0,6.5,7.0],
        moisture: [60,65,70],
        namn: "zucchini",
        soilColor: ["Brun", "Ljusbrun"],
        jordstruktur: ["Granulär"]

    }

    var kryddor = {
        ph: [6.0,6.5,7.0],
        moisture: [50,55,60],
        namn: "kryddor (tex. basilika, persilja)",
        soilColor: ["Brun", "Mörkbrun"],
        jordstruktur: ["Granulär"]

    }


    let grodor = [potatis, vete, korn, raps, morot, artor, kal, rag, sockerbeta, majs, bonor, karlselleri, tomater, sallad, kryddor, zucchini, rodbeta, havre];
    let output = [];
    grodor.forEach((element) => output.push(element.namn));


    for (let i = 0; i < grodor.length; i++) {
        
        y = 0
        counter = 0
       
        while (y < grodor[i].ph.length) {
            if (grodor[i].ph[y] !== ph) {
               counter += 1
            }

            if (counter == grodor[i].ph.length){
                output = output.filter( item => item !== grodor[i].namn);
            }
            y += 1
        }

        y = 0
        counter = 0
            
        while (y < grodor[i].moisture.length) {
            if (grodor[i].moisture[y] !== moisture) {
               counter += 1
            }

            if (counter == grodor[i].moisture.length){
                output = output.filter( item => item !== grodor[i].namn);
            }
            y += 1
        }
        
        y = 0
        counter = 0

        while (y < grodor[i].soilColor.length) {
            if (grodor[i].soilColor[y] !== soilColor) {
               counter += 1
            }

            if (counter == grodor[i].soilColor.length){
                output = output.filter( item => item !== grodor[i].namn);
            }
            y += 1
        }

        y = 0
        counter = 0
        
        while (y < grodor[i].jordstruktur.length) {
            if (grodor[i].jordstruktur[y] !== jordstruktur) {
               counter += 1
            }

            if (counter == grodor[i].jordstruktur.length){
                output = output.filter( item => item !== grodor[i].namn);
            }
            y += 1
        }
    }


    // Visa resultatet på sidan
    const resultDiv = document.getElementById('result');

    if (output.length > 0)
  
        resultDiv.textContent = "Din mest optimala gröda är: " + output.join(", ") + ". Lyckligt Odlande!";
    else 
        resultDiv.textContent = "Du har ingen gröda som passar din jord till det bästa, gå flrst till vår sida 'Grödor' där du kan se alla värdena på de grödor u vill plantera, och sedan gå till 'Ändra värden' där vi beskriver hur du kan ändra värdena på din jord så at tde matchar med din valda gröda. Lyckligt Odlande!"
    
});
