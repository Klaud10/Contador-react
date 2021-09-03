import React, {Fragment, useState} from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const Lista = () => {

    const [arrayNumero, setarrayNumero] = useState([0]);
    
    const [numero, setNumero] = useState(1)
    
    const agregarElemento = () => {
        
        setNumero(numero + 1);

        setarrayNumero([...arrayNumero, numero])
    }  
    
    const quitarElemento = () => {
        
        setNumero(numero - 1);

        setarrayNumero([...arrayNumero, numero])
    }  

    return ( 
        <Fragment>
            <Container fixed>
                <div className="container mt-5">
                    <h2>Lista</h2>
                    <ul>Lista Desordenada</ul>
                    <Button variant="outlined" color="primary" onClick={agregarElemento}>
                        Agregar
                    </Button>
                    
                    <Button variant="outlined" color="secondary" onClick={quitarElemento}>
                        Quitar
                    </Button>
                    {
                        arrayNumero.map((item, index) => 
                            <li key={index}>{item} </li>
                        )
                    }
                </div>
            </Container>
        </Fragment>
     );
}
 
export default Lista;