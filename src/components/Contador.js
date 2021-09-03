import React, {useState, Fragment} from 'react';
import Button from '@material-ui/core/Button'


const Contador = () => {
    const [numero, setNumero] = useState(0);
    
    const aumentar = () => {
        console.log('me diste un click');
        setNumero(numero + 1);
    }
    
    const restar = () => {
        console.log('me diste un click');
        setNumero(numero - 1);
    }

    return ( 
        <Fragment>
            <div className="container mt-5">
                <h1>Contador BJ={numero}</h1>
                <Button variant="outlined" color="primary" onClick={aumentar}>Sumar</Button>
                <Button variant="outlined" color="secondary" onClick={restar}>Restar</Button>
            </div>
        </Fragment>
    );
}
 
export default Contador;