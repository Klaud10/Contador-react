import React, {useState, Fragment} from 'react';

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
            <h3>Contador BJ={numero}</h3>
            <button onClick={aumentar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </Fragment>
    );
}
 
export default Contador;