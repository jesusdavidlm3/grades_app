import { useState } from 'react'
import { Button, Typography, Box, Input, TextField } from '@mui/material'
import './App.css'

function App() {

  const [corte, setCorte] = useState ("")   //constante utilizada para definir el
                                            //corte segun botones
  return (
    <>
      <Box
        sx = {{ justifyContent: 'center', textAlign: 'center' }}
      >
        <Typography
          variant = 'h3'
          component = 'h1'
        >
          ¿Cuantos cortes has culminado?
        </Typography> 
 
        <Button
          sx = {{ m: 2 }}                         //Establecemos estilos para el boton
          variant = 'contained'
          // onClick = { () => { alert('pulsado 1') } }
          onClick = { () => {setCorte("1")} }     //Establecemos un valor para es estado corte
        >
          1 corte
        </Button>
        
        <Button
          sx = {{ m: 2 }}
          variant = 'contained'
          // onClick = { () => { alert('pulsado 2') } }
          onClick = { () => {setCorte("2")} }
        >
          2 cortes
        </Button>
        
        <Button
          sx = {{ m: 2 }}
          variant = 'contained'
          // onClick={ () => { alert('pulsado 3') } }
          onClick = { () => {setCorte("3")} }
        >
          3 cortes
        </Button>

      </Box>

      <Box
        sx = {{ justifyContent: 'center', textAlign: 'center' }}
      >
  
        { corte == 1 &&               //Renderizado condicional
          <form>
              <label>Por favor ingresa la nota de tu primer corte</label><br></br>
              <TextField /><br></br>
              
              <Button
                type='submit'
                variant='contained'
              >Calcular</Button>
          </form>
        }

        { corte == 2 && 
          <form>
              <label>Por favor ingresa la nota de tu primer corte</label><br></br>
              <TextField /><br></br>

              <label>Por favor ingresa la nota de tu segundo corte</label><br></br>
              <TextField /><br></br>

              <Button
                type='submit'
                variant='contained'
              >Calcular</Button>
          </form>
        }

        { corte == 3 && 
          <form>
              <label>Por favor ingresa la nota de tu primer corte</label><br></br>
              <TextField /><br></br>

              <label>Por favor ingresa la nota de tu segundo corte</label><br></br>
              <TextField /><br></br>

              <label>Por favor ingresa la nota de tu tercer corte</label><br></br>
              <TextField /><br></br>

              <Button
                type='submit'
                variant='contained'
              >Calcular</Button>
          </form>
        }

      </Box>
    </>
  )
}

export default App