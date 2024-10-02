def data
    output = []
    puts "Hej, skriv in din data"
    puts "Börja med att skriva in ditt pH-värde:"
    ph = gets.chomp.to_i
    puts "Nu skriv in din vattenfuktighetsprocent:"
    fuktighet = gets.chomp.to_i

    # Lägg till "morot" eller "potatis" beroende på pH-värdet
    if ph < 7
        output << "morot"
    else
        output << "potatis"
    end

    puts "Output innan justering: #{output}"

    # Om fuktigheten är över 30, ta bort alla "morot" från output
    if fuktighet > 30
        output.delete("morot") # Bättre sätt att ta bort alla förekomster
    end

    puts "Slutlig output: #{output}"
    return output
end

data()