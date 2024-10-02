  document.getElementById('dataForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Förhindra formulärets standardbeteende (att ladda om sidan)
            
            // Hämta värden från formuläret
            const ph = parseInt(document.getElementById('phValue').value);
            const moisture = parseInt(document.getElementById('moistureValue').value);

            // Skapa en tom array för output
            let output = [];

            // Lägg till "morot" om pH-värdet är mindre än 7, annars "potatis"
            if (ph < 7) {
                output.push("morot");
                output.push("vete");
            } else {
                output.push("potatis");
                output.push("rödbeta");
            }

            // Om fuktigheten är över 30 %, ta bort "morot" från arrayen
            if (moisture > 30) {
                output = output.filter(item => item !== "morot");
                output = output.filter(item => item !== "rödbeta");

            }

            // Visa resultatet på sidan
            const resultDiv = document.getElementById('result');
            if (output.length > 0) {
                resultDiv.textContent = "Din mest optimala gröda är: " + output.join(", ");
            } else {
                resultDiv.textContent = "Ingen gröda rekommenderas.";
            }
        });