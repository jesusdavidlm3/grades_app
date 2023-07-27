import { useState } from 'react'
import { Button, Typography, Box, Input, TextField } from '@mui/material'
import './App.css'

function App() {

  const [corte, setCorte] = useState (0)
  const [result, setResult] = useState ("")

  const [not1, setNot1] = useState(0)
  const [not2, setNot2] = useState(0)
  const [not3, setNot3] = useState(0)

  const [restante2, setRestante2] = useState(0)
  const [restante3, setRestante3] = useState(0)

  const [notaFinal, setNotaFinal] = useState(0)
  const [aprobado, setAprobado] = useState(false)

  function mostrar1corte(){
    setNot1(0)
    setNot2(0)
    setNot3(0)
    setCorte('1')
  }

  function mostrar2cortes(){
    setNot1(0)
    setNot2(0)
    setNot3(0)
    setCorte('2')
  }

  function mostrar3cortes(){
    setNot1(0)
    setNot2(0)
    setNot3(0)
    setCorte(3)
  }

  function calcular1(){
    setResult('1')
  }

  function calcular2(){
    setResult('2')
    setRestante3(9.6 - (0.3 * not1) + (0.3 * not2))
  }

  function calcular3(){
    setResult('3')
    setNotaFinal((not1*0.3)+(not2*0.3)+(not3*0.4))
    if(notaFinal > 9.6){
      setAprobado(true)
    }
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
          onClick={() => { mostrar1corte() }}
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
    </>
  )

{ corte == 1 &&
  <>
    <form>
      <TextField 
        type='number'
        label='Nota del primer corte'
        sx={{ m: 1 }}
        size='small'
        onChange={ (e) => {setNot1(parseInt(e.target.value))} }
      />
      
      <br></br>

      <Button
        sx = {{ m: 2 }}
        variant='contained'
        onClick={() => { calcular1() }}
      >
        Calcular
      </Button>
    </form>
  </>
}

{ corte == 2 && 
  <>
    <form>
      <TextField 
        type='number'
        label='Nota del primer corte'
        sx={{ m: 1 }}
        size='small'
        onChange={ (e) => {setNot1(parseInt(e.target.value))} }
      />

      <br></br>

      <TextField
        type='number'
        label='Nota del segundo corte'
        sx={{ m: 1 }}
        size='small'
        onChange={ (e) => {setNot1(parseInt(e.target.value))} }
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
  </>
}

{ corte == 3 && 
  <>
    <form>
      <TextField
        name='corte1'
        type='number'
        label='Nota del primer corte'
        sx={{ m: 1 }}
        size='small'
        onChange={(e) => setNot1(parseInt(e.target.value))}
      />

      <br></br>

      <TextField
        name='corte2'
        type='number'
        label='Nota del segundo corte'
        sx={{ m: 1 }}
        size='small'
        onChange={(e) => setNot2(parseInt(e.target.value))}
      />

      <br></br>

      <TextField 
        name='corte3'
        type='number'
        label='Nota del tercer corte'
        sx={{ m: 1 }}
        size='small'
        onChange={(e) => setNot3(parseInt(e.target.value))}
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

    <Typography>
      Tu nota en el primer corte es {not1}<br></br>
      Tu nota en el Segundo corte es {not2}<br></br>
      Tu nota en el tercer corte es {not3}<br></br>
    </Typography>
  </>
}


{ result == "1" &&
  <>
    <Box> 
    </Box>
  </>  
}

{ result == "2" &&
  <>
    <Box> 
      Su nota minima neceraria para aprobar en el tercer corte es: {{ restante3 }}
    </Box>
  </>
}

{ result == "3" &&
  <>
    <Box> 
      Su nota minima neceraria para aprobar en el tercer corte es: {{ notaFinal }}
    </Box>
  </>
}
}
export default App