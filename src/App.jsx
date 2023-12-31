import { useState } from 'react'
import { Button, Typography, Box, Input, TextField } from '@mui/material'
import './App.css'

function App() {

  const [corte, setCorte] = useState ('')
  const [result, setResult] = useState ("")

  const [not1, setNot1] = useState(0)
  const [not2, setNot2] = useState(0)
  const [not3, setNot3] = useState(0)

  const [restante2, setRestante2] = useState(0)
  const [restante3, setRestante3] = useState(0)

  const [notaFinal, setNotaFinal] = useState(0)

  function mostrar1corte(){
    setNot1(0)
    setNot2(0)
    setNot3(0)
    setRestante2(0)
    setRestante3(0)
    setNotaFinal(0)
    setCorte('1')
    setResult('')
    if(corte == '1'){
      setCorte('')
    }
  }

  function mostrar2cortes(){
    setNot1(0)
    setNot2(0)
    setNot3(0)
    setRestante2(0)
    setRestante3(0)
    setNotaFinal(0)
    setCorte('2')
    setResult('')
    if(corte == '2'){
      setCorte('')
    }
  }

  function mostrar3cortes(){
    setNot1(0)
    setNot2(0)
    setNot3(0)
    setRestante2(0)
    setRestante3(0)
    setNotaFinal(0)
    setCorte('3')
    setResult('')
    if(corte == '3'){
      setCorte('')
    }
  }

  function calcular1(){
    setResult('1')
    setRestante2( (9.6 - not1 * 0.3) / 0.3 )
  }

  function calcular2(){
    setResult('2')
    setRestante3( (9.6 - ( not1*0.3 + not2*0.3 )) / 0.4 )
    setNotaFinal( not1*0.3 + not2*0.3 )
  }

  function calcular3(){
    setResult('3')
    setNotaFinal((not1*0.3)+(not2*0.3)+(not3*0.4))
  }

  return (
    <>
      <Box 
        textAlign={'center'}
      >
        <Typography
          variant = 'h3'
          component = 'h1'
        >
          ¿Cuantos cortes has culminado?
        </Typography> 

        <Button
          sx = {{ m: 2 }}
          variant = 'contained'
          onClick={ () => { mostrar1corte() } }
        >
          1 corte
        </Button>
        
        <Button
          sx = {{ m: 2 }}
          variant = 'contained'
          onClick = {() => { mostrar2cortes() }} 
        >
          2 cortes
        </Button>
          
        <Button
          sx = {{ m: 2 }}
          variant = 'contained'
          onClick = {() => { mostrar3cortes() }}
        >
          3 cortes
        </Button>
      </Box>

      <Box
        textAlign={'center'}
      >
        { corte == 1 && 
          <form>
          <TextField
            type='number'
            label='nota del primer corte'
            sx={{ m: 1 }}
            size='small'
            onChange={ (e) => { setNot1(parseFloat(e.target.value)) } }
          />

          <br></br>

          <Button
            sx={{ m: 1 }}
            variant='contained'
            onClick={ () => { calcular1() } }
          >
            Calcular
          </Button>

          </form>
        }

        { corte == 2 && 
          <form>
            <TextField 
              type='number'
              label='Nota del primer corte'
              sx={{ m: 1 }}
              size='small'
              onChange={ (e) => {setNot1(parseFloat(e.target.value))} }
            />

            <br></br>

            <TextField
              type='number'
              label='Nota del segundo corte'
              sx={{ m: 1 }}
              size='small'
              onChange={ (e) => {setNot2(parseFloat(e.target.value))} }
            />

            <br></br>

            <Button
              sx = {{ m: 2 }}
              variant='contained'
              onClick={() => { calcular2() }}
            >
              Calcular
            </Button>

          </form>
        }

        { corte == 3 && 
          <form>
            <TextField
              name='corte1'
              type='number'
              label='Nota del primer corte'
              sx={{ m: 1 }}
              size='small'
              onChange={(e) => setNot1(parseFloat(e.target.value))}
            />

            <br></br>

            <TextField
              name='corte2'
              type='number'
              label='Nota del segundo corte'
              sx={{ m: 1 }}
              size='small'
              onChange={(e) => setNot2(parseFloat(e.target.value))}
            />

            <br></br>

            <TextField 
              name='corte3'
              type='number'
              label='Nota del tercer corte'
              sx={{ m: 1 }}
              size='small'
              onChange={(e) => setNot3(parseFloat(e.target.value))}
            />

            <br></br>

            <Button
              sx={{ m: 2 }}
              variant='contained'
              onClick={() => { calcular3() }}
            >
              Calcular
            </Button>

          </form>
        }
      </Box>

      <Box textAlign={ 'center' } >
        { result == '1' && restante2 > 20 &&
          <Typography>
            Si tu nota en el primer corte fue de { not1.toFixed(2) }<br></br>
            no hay forma en que puedas aprobar con solo dos cortes
          </Typography>
        }
        
        { result == '1' && restante2 <= 20 &&
          <Typography>
            Si tu nota en el primer corte fue de { not1.toFixed(2) }<br></br>
            Necesitaras una nota de al menos { restante2.toFixed(2) }
          </Typography>
        }
        
        { result == '2' && notaFinal < 9.6 &&
          <Typography>
            Su nota acumulada con dos cortes es de { notaFinal.toFixed(2) } puntos<br></br>
            Necesitas por lo menos { (9.6 - notaFinal).toFixed(2) } puntos en tu nota definitiva para aprobar<br></br>
            Necesitas por lo menos { restante3.toFixed(2) } en el tercer corte para aprobar
          </Typography>
        }

        { result == '2' && notaFinal >= 9.6 &&
          <Typography>
            Su nota acumulada con dos cortes es de { notaFinal.toFixed(2) } puntos<br></br>
            Felicidades, ya has aprobado
          </Typography>
        }

        { result == '3' && notaFinal >= 9.6 && 
          <Typography>
            Felicitaciones, aprobaste la materia con una nota final de { notaFinal.toFixed(2) }
          </Typography>
        }

        { result == '3' && notaFinal < 9.6 && 
          <Typography>
            Lo sentimos, { notaFinal.toFixed(2) } no es una nota suficiente para aprobar
          </Typography>
        }
      </Box>

    </>

  )



}
export default App