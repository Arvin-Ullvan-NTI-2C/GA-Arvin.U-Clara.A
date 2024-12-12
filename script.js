if (window.location.pathname === '/index.html') {
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Hämta värden från formuläret och konvertera till flyttal
        const ph = parseFloat(document.getElementById('phValue').value);
        const temp = parseFloat(document.getElementById('tempValue').value);
        // const moisture = parseFloat(document.getElementById('moistureValue').value);
        // const soilColor = document.getElementById('soilColor').value; 
        const jordstruktur = document.getElementById('jordstruktur').value;

        // Validera pH-värdet (måste vara mellan 1 och 14)
        if (ph < 1 || ph > 14) {
            alert("pH-värdet måste vara mellan 1 och 14.");
            return; // Avbryt om värdet är utanför gränserna
        }

        // Validera fuktighetsprocenten (måste vara mellan 0 och 100)
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
        
            while (y < grodor[i].temp.length) {
                if (grodor[i].temp[y] !== temp) {
                counter += 1
                }

                if (counter == grodor[i].temp.length){
                    output = output.filter( item => item !== grodor[i].namn);
                }
                y += 1
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


        // Visa resultatet på sidan
        const resultDiv = document.getElementById('result');

        if (output.length > 0)
    
            resultDiv.textContent = "Din mest optimala gröda är: " + output.join(", ") + ". Lyckligt Odlande!";
        else 
            resultDiv.textContent = "Du har ingen gröda som passar din jord till det bästa, gå flrst till vår sida 'Grödor' där du kan se alla värdena på de grödor u vill plantera, och sedan gå till 'Ändra värden' där vi beskriver hur du kan ändra värdena på din jord så at tde matchar med din valda gröda. Lyckligt Odlande!"
        
    });
} else if (window.location.pathname === '/rev_kalk.html') {

    document.getElementById('dataForm2').addEventListener('submit', function(event) {
        event.preventDefault();

        // Hämta värdet från formuläret
        const groda = document.getElementById('groda').value;

        // Definiera alla grödor som objekt
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



        // (Fortfarande alla andra grödor här...)

        let alla_grodor = [potatis, vete, korn, raps, morot, kål, råg, sockerbeta, majs, bönor, kärlselleri, tomater, havre];
        let output = [];

        // Loopa igenom alla grödor och hitta den valda
        for (let i = 0; i < alla_grodor.length; i++) {
            if (alla_grodor[i].namn == groda) {
                const grodaData = alla_grodor[i];
                
                function formatRange(range) {
                    return range[0] + " - " + range[range.length - 1];
                }
        
                output.push(`
                    ${grodaData.namn} behöver dessa värden: <br>
                    PH: ${formatRange(grodaData.ph)} <br>
                    Temperatur: ${formatRange(grodaData.temp)} °C <br>
                    Jordstruktur: ${grodaData.jordstruktur.join(', ')} <br>
                `);
                //  Jordfuktighet: ${formatRange(grodaData.moisture)} % <br>
                // Jordfärg: ${grodaData.soilColor.join(', ')} <br>
                // detta var inuti output innan
            }
        }
        

        // Visa resultatet i result2 div
        const resultDiv = document.getElementById('result2');
        resultDiv.innerHTML = output.join("<br>");
    });
}
