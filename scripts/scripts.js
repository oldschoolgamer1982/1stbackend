var name = window.prompt ('Digite seu nome')  
        
while (name.length == 0 || name == 'null' || /[0-9]/g.test(name)) {            
    window.alert (`Você deve digitar um nome`)
    name = window.prompt ('Digite seu nome')  
    
    } 

     
   



var hoje = new Date()
var hojeano = hoje.getFullYear()
var hojemes = hoje.getMonth()
var hojedia = hoje.getDate()   
var hora = hoje.getHours()  
var htxt = window.document.querySelector ('div#htxt')
var radsex = window.document.getElementsByName ('radsex')
var escola = window.document.getElementById ('escola')

var nac = ''
var gen = ''



 

 


if (hora<12) {
    htxt.innerHTML = `Bom dia ${name}, favor preencher os dados abaixo:`
} 
else if (hora <= 18) {
    htxt.innerHTML = `Boa tarde ${name},  favor preencher os dados abaixo:`
}
else {
    htxt.innerHTML = `Boa noite ${name},  favor preencher os dados abaixo:`
}

function calcular() {

    if (radsex[0].checked) {
    gen = 'homem'}
 else if (radsex[1].checked){
    gen = 'mulher'}
    


        

    var nascimento  = window.document.querySelector ('input#nasc')
    var pais = window.document.getElementById ('pais')

    if ((pais.value.toUpperCase()) == 'BRASIL') {
    nac = 'brasileira'
} else {
    nac = 'estrangeira'
}



if (nascimento.value.length == 0 || pais.value.length == 0) {window.alert (`[ERRO] Preencha todos os dados`)}

    else{
    var nasc = new Date(nascimento.value)
    var nascano = nasc.getFullYear()
    var nascmes = nasc.getMonth()        
    var nascdia = nasc.getDate()                                             
    var anos = hojeano - nascano            
    
    if (nascano > hojeano || nascano == hojeano && nascmes > hojemes || nascano == hojeano && nascmes == hojemes && hojedia <= nascdia || hojeano > nascano+120) {
        window.alert (`[ERRO] Data de nascimento inválida`)
    } else{
        if (nascmes > hojemes ||  hojemes == nascmes && hojedia <= nascdia) {anos -= 1} 
                        
        htxt.innerHTML= `RESULTADO`
        area.innerHTML = `<p>Detectamos ${gen}, de nacionalidade ${nac}, com ${anos} anos!</p>`
                        
    if (escola.value != 'Analfabeto' && nac == 'brasileira' && anos >= 18 && anos <= 70) {
                area.innerHTML += `<p>O seu voto é obrigatório.</p>`} 

        
        else if (anos < 16 || nac == 'estrangeira') {
            area.innerHTML += `<p>Você não pode votar.</p>`
        }
        else 
        {
            area.innerHTML += `<p>O seu voto é facultativo.</p>`}
    
}
}  
}