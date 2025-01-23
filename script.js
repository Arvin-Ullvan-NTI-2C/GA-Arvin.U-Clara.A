if (window.location.pathname === '/index.html') {
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Hämta värden från formuläret och konvertera till flyttal
        const ph = parseFloat(document.getElementById('phValue').value);
        const temp = parseFloat(document.getElementById('tempValue').value);
        // const moisture = parseFloat(document.getElementById('moistureValue').value);
        // const soilColor = document.getElementById('soilColor').value; 
        const jordstruktur = document.getElementById('jordstruktur').value;
        PhValue = ph
        
        if (ph < 1 || ph > 14) {
            alert("pH-värdet måste vara mellan 1 och 14.");
            return; 
        }

        if (temp < -20 || temp > 40) {
            alert("Ingen planta kan växa i denna temperatur, dubbelkolla så att det stämmer!");
            return;
        }

        const formData = {
            ph: parseFloat(document.getElementById('phValue').value),
            temp: parseFloat(document.getElementById('tempValue').value),
            jordstruktur: document.getElementById('jordstruktur').value
        };


       
        // if (moisture < 0 || moisture > 100) {
        //     alert("Fuktighetsprocenten måste vara mellan 0 och 100.");
        //     return; // Avbryt om värdet är utanför gränserna
        // }

        var vete = {
            ph: [6.0,6.5,7.0,7.5],
            // moisture: [50, 55, 60, 65, 70],
            temp: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            namn: "vete",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Sandig", "Silt"]

        }

        var rag = {
            ph: [5.0,5.5,6.0,6.5,7.0],
            // moisture: [50, 55, 60, 65, 70],
            temp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            namn: "råg",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Lerig"]
        }

        var majs = {
            ph: [5.5,6.0,6.5,7.0],
            // moisture: [60, 65, 70, 75, 80],
            temp: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            namn: "majs",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Sandig","Lerig"]

        }

        var bonor = {
            ph: [6.0,6.5,7.0,7],
            // moisture: [50,55,60,65,70],
            temp: [18,19,20,21,22,23,24,25,26,27,28,29,30],
            namn: "bönor",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam","Lerig","Silt"]

        }

        var karlselleri = {
            ph: [6.5,7.0,7.5],
            // moisture: [60,65,70,75,80],
            temp: [16,17,18,19,20,21],
            namn: "kärlselleri",
            // soilColor: ["Mörkbrun", "Svart"],
            jordstruktur: ["Loam","Sandig","Silt"]

        }

        var morot = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [13,14,15,16,17,18,19,20,21],
            namn: "morot",
            // soilColor: ["Ljusbrun", "Brun"],
            jordstruktur: ["Sandig"]

        }

        var potatis = {
            ph: [6.0,6.5,7.0],
            // moisture: [60, 65, 70, 75, 80],
            temp: [16,17,18,19],
            namn: "potatis",
            // soilColor: ["Ljusbrun", "Brun"],
            jordstruktur: ["Sandig", "Silt"]

        }

        var kal = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [12,13,14,15,16,17,18,19,20,21,22,23],
            namn: "kål",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam"]

        }

        var tomater = {
            ph: [6.0,6.5,7.0],
            // moisture: [60,65,70],
            temp: [18,19,20,21,22,23,24,25,26],
            namn: "tomater",
            // soilColor: ["Brun", "Ljusbrun"],
            jordstruktur: ["Sandig", "Loam"]

        }

        var raps = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            namn: "raps",
            // soilColor: ["Brun, Ljusbrun"],
            jordstruktur: ["Loam", "Lerig"]
        }

        var sockerbeta = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [27,28,29,30,31,32,33],
            namn: "sockerbeta",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam"]

        }

        var havre = {
            ph: [4.5,5.0,5.5,6.0],
            // moisture: [50,55,60,65,70],
            temp: [1,2,3,4,5],
            namn: "havre",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam"]

        }

        var korn = {
            ph: [6.0,6.5,7,7.5,8.0],
            // moisture: [50,55,60, 65, 70],   
            temp: [12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            namn: "korn",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Lerig"]

        }

        

        let grodor = [potatis, vete, raps, morot, kal, rag, sockerbeta, majs, bonor, karlselleri, tomater, havre, korn];
        let output = [];
        grodor.forEach((element) => output.push(element.namn));


        let ph_small_count = 0
        let ph_large_count = 0
        let temp_small_count = 0
        let temp_large_count = 0

        for (let i = 0; i < grodor.length; i++) {
            
            y = 0
            counter = 0
        
            while (y < grodor[i].ph.length) {
                if (grodor[i].ph[y] !== ph) {
                counter += 1
                }

                if (ph >= grodor[i].ph[y]) {
                    ph_small = false
                    ph_small_count = 1
                }
                if (ph <= grodor[i].ph[y]){
                    ph_large = false 
                    ph_large_count = 1
                }
                if (counter == grodor[i].ph.length){
                    output = output.filter( item => item !== grodor[i].namn);
           
                }
                y += 1
            }
            
            if (ph_small_count == 0) {
                ph_small = true
            }

            if (ph_large_count == 0) {
                ph_large = true
            }


            y = 0
            counter = 0
        
            while (y < grodor[i].temp.length) {
                if (grodor[i].temp[y] !== temp) {
                counter += 1
                }

                if (temp >= grodor[i].temp[y]) {
                    temp_small = false
                    temp_small_count = 1
                }
                if (temp <= grodor[i].temp[y]){
                    temp_large = false 
                    temp_large_count = 1
                }

                if (counter == grodor[i].temp.length){
                    output = output.filter( item => item !== grodor[i].namn);
                  
                }
                y += 1
            }

            if (temp_small_count == 0) {
                temp_small = true
            }

            if (temp_large_count == 0) {
                temp_large = true
            }

            // y = 0
            // counter = 0
                
            // while (y < grodor[i].moisture.length) {
            //     if (grodor[i].moisture[y] !== moisture) {
            //     counter += 1
            //     }

            //     if (counter == grodor[i].moisture.length){
            //         output = output.filter( item => item !== grodor[i].namn);
            //     }
            //     y += 1
            // }
            
            // y = 0
            // counter = 0

            // while (y < grodor[i].soilColor.length) {
            //     if (grodor[i].soilColor[y] !== soilColor) {
            //     counter += 1
            //     }

            //     if (counter == grodor[i].soilColor.length){
            //         output = output.filter( item => item !== grodor[i].namn);
            //     }
            //     y += 1
            // }

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


        const resultDiv = document.getElementById('result');
        resultDiv.dataset.formData = JSON.stringify(formData); // Lagrar som JSON-sträng


        if (output.length > 0)
    
            resultDiv.textContent = "Din mest optimala gröda är: " + output.join(", ") + ". Lyckligt Odlande!";
        else if (temp_large == true && ph_large == true){
            resultDiv.textContent = "Din odlingsplats har för högt ph-värde och för hög snitttemperatur för att fungera med grödorna i vår databas!"
        }
        else if (temp_large == true && ph_small == true){
            resultDiv.textContent = "Din odlingsplats har för lågt ph-värde och för hög snitttemperatur för att fungera med grödorna i vår databas!"
        }
        else if (temp_small == true && ph_large == true){
            resultDiv.textContent = "Din odlingsplats har för högt ph-värde och för låg snitttemperatur för att fungera med grödorna i vår databas!"
        }
        else if (temp_small == true && ph_small == true){
            resultDiv.textContent = "Din odlingsplats har för lågt ph-värde och för låg snitttemperatur för att fungera med grödorna i vår databas!"
        }
        else if (ph_small == true){
            resultDiv.textContent = "Din jord har för lågt ph-värde för att fungera med grödorna i vår databas!"
        }
        else if (ph_large == true){
            resultDiv.textContent = "Din jord har för högt ph-värde för att fungera med grödorna i vår databas!"
        }
        else if (temp_small == true){
            resultDiv.textContent = "Din odlingsplats har för låg snitttemperatur för att fungera med grödorna i vår databas!"
        }
        else if (temp_large == true){
            resultDiv.textContent = "Din odlingsplats har för hög snittteemperatur för att fungera med grödorna i vår databas!"
        }
        else 
        resultDiv.textContent = "Dina värden matchar tyvärr inte med någon av våra grödor i vår databas, gå till 'Attributer' för att se vilka egenskaper våra grödor har!"


        resultDiv.dataset.formData = JSON.stringify(formData); // Lagrar som JSON-sträng


       
    });

    document.getElementById('dataForm2').addEventListener('submit', function(event) {
        event.preventDefault();

        

        const groda = document.getElementById('groda').value;

        var vete = {
            ph: [6.0,6.5,7.0,7.5],
            // moisture: [50, 55, 60, 65, 70],
            temp: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            namn: "Vete",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Sandig", "Silt"]

        }

        var råg = {
            ph: [5.0,5.5,6.0,6.5,7.0],
            // moisture: [50, 55, 60, 65, 70],
            temp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            namn: "Råg",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Lerig"]
        }

        var majs = {
            ph: [5.5,6.0,6.5,7.0],
            // moisture: [60, 65, 70, 75, 80],
            temp: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            namn: "Majs",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Sandig","Lerig"]

        }

        var bönor = {
            ph: [6.0,6.5,7.0,7],
            // moisture: [50,55,60,65,70],
            temp: [18,19,20,21,22,23,24,25,26,27,28,29,30],
            namn: "Bönor",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam","Lerig","Silt"]

        }

        var kärlselleri = {
            ph: [6.5,7.0,7.5],
            // moisture: [60,65,70,75,80],
            temp: [16,17,18,19,20,21],
            namn: "Kärlselleri",
            // soilColor: ["Mörkbrun", "Svart"],
            jordstruktur: ["Loam","Sandig","Silt"]

        }

        var morot = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [13,14,15,16,17,18,19,20,21],
            namn: "Morot",
            // soilColor: ["Ljusbrun", "Brun"],
            jordstruktur: ["Sandig"]

        }

        var potatis = {
            ph: [6.0,6.5,7.0],
            // moisture: [60, 65, 70, 75, 80],
            temp: [16,17,18,19],
            namn: "Potatis",
            // soilColor: ["Ljusbrun", "Brun"],
            jordstruktur: ["Sandig", "Silt"]

        }

        var kål = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [12,13,14,15,16,17,18,19,20,21,22,23],
            namn: "Kål",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam"]

        }

        var tomater = {
            ph: [6.0,6.5,7.0],
            // moisture: [60,65,70],
            temp: [18,19,20,21,22,23,24,25,26],
            namn: "Tomater",
            // soilColor: ["Brun", "Ljusbrun"],
            jordstruktur: ["Sandig", "Loam"]

        }

        var raps = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            namn: "Raps",
            // soilColor: ["Brun, Ljusbrun"],
            jordstruktur: ["Loam", "Lerig"]
        }

        var sockerbeta = {
            ph: [6.0,6.5,7.0],
            // moisture: [50,55,60,65,70],
            temp: [27,28,29,30,31,32,33],
            namn: "Sockerbeta",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam"]

        }

        var havre = {
            ph: [4.5,5.0,5.5,6.0],
            // moisture: [50,55,60,65,70],
            temp: [1,2,3,4,5],
            namn: "Havre",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam"]

        }


        var korn = {
            ph: [6.0,6.5,7,7.5],
            // moisture: [50,55,60, 65, 70],   
            temp: [12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            namn: "Korn",
            // soilColor: ["Brun", "Mörkbrun"],
            jordstruktur: ["Loam", "Lerig"]

        }

        
        let alla_grodor = [potatis, vete, korn, raps, morot, kål, råg, sockerbeta, majs, bönor, kärlselleri, tomater, havre];
        let output = [];


        for (let i = 0; i < alla_grodor.length; i++) {
            if (alla_grodor[i].namn == groda) {
                    let grodaData = alla_grodor[i];

                
                function formatRange(range) {
                    return range[0] + " - " + range[range.length - 1];
                }
                
            
                output.push(`
                    ${grodaData.namn} behöver dessa värden: <br>
                    PH: ${formatRange(grodaData.ph)} <br>
                    Temperatur: ${formatRange(grodaData.temp)} °C <br>
                    Jordstruktur: ${grodaData.jordstruktur.join(', ')} <br>
                `);

                const resultDiv = document.getElementById('result');
                const datasetValue = resultDiv.dataset.formData;

                // Kontrollera om dataset.formData finns och är korrekt
                if (datasetValue) {

                    const formData = JSON.parse(datasetValue);
                    const groda = document.getElementById('groda').value;
                    if (formData.ph < grodaData.ph[0]) {
                        output.push("Ditt ph värde är: " + formData.ph + "<br>" + "alltså behöver du höja ditt ph-värde. För att göra detta kan du tillsätta kalk!"+ "<br>")
                    }
                    if (formData.ph > grodaData.ph[(grodaData.ph.length - 1)]) {
                        output.push("Ditt ph värde är: " + formData.ph + "<br>" + "alltså behöver du sänka ditt ph-värde. För att göra detta kan du tillsätta svavel!"+ "<br>")
                    }
                    if (formData.temp < grodaData.temp[0]) {
                        output.push("Din snitt temperatur är: " + formData.temp + "°C" + "<br>" + "alltså behöver du ett varmare klimat. Detta blir svårt att göra om du odlar utomhus," + "<br>" + "men om det är i ett växthus eller inomhus" + "<br>"+ "rekommenderar vi att höja temperaturen på dina element!" + "<br>")
                    }
                    if (formData.temp > grodaData.temp[(grodaData.temp.length - 1)]) {
                        output.push("Din snitt temperatur är: " + formData.temp + "°C" + "<br>" + "alltså behöver du ett kallare klimat. Detta blir svårt att göra om du odlar utomhus," + "<br>" + "men om det är i ett växthus eller inomhus" + "<br>" + "rekommenderar vi att sänka temperaturen på dina element!"+ "<br>")
                    }
                    let count = 0
                    for (let y = 0; y < grodaData.jordstruktur.length; y++) {
                        
                        if (formData.jordstruktur !== grodaData.jordstruktur[y]){
                            count += 1
                        }

                    }
                    if (count == grodaData.jordstruktur.length) {
                        output.push("Din jordstruktur är: " + formData.jordstruktur + "<br>" + "alltså behöver du byta ut din jord!")
                    }

                    console.log('Data från dataset:', formData);
                    console.log('Groda:', groda);

                    // Gör beräkningar med formData
                } else {
                    console.error('Inget giltigt formData finns i dataset.');
                }

                //  Jordfuktighet: ${formatRange(grodaData.moisture)} % <br>
                // Jordfärg: ${grodaData.soilColor.join(', ')} <br>
                // detta var inuti output innan
                
                
            }
        }
        

        // Visa resultatet i result2 div
        

        const resultDiv2 = document.getElementById('result2');
        resultDiv2.innerHTML = output.join("<br>");
        
        
    });
} 
