let notaCorte1 = 0
let notaCorte2 = 0
let notaCorte3 = 0

//definir notaCorte1
//definir notaCorte2
//definir notaCorte3

let notaFinal = ( ( notaCorte1 * 0.3 ) + ( notaCorte2 * 0.3 ) + ( notaCorte3 * 0.4 ))

if( notaFinal <= 9.6 ){
    return (`Felicidades, aprobaste con una nota de ${ notaFinal }`)
}else{
    return (`${ notaFinal } no es nota suficiente para aprobar`)
}