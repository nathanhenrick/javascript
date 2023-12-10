let horas_f = new Date()
let horas = horas_f.getHours()
//console.log('O horário atual é ' + horas) 
if (horas < 12) {
    console.log('Agora são ' + horas + ' horas. Bom dia!')
} else if (horas > 12 && horas < 18) {
    console.log('Agora são ' + horas + ' horas. Boa tarde!') 
} else if (horas > 18) {
    console.log('Agora são ' + horas + ' horas. Boa noite!') 
}