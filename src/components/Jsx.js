import React, { Fragment } from 'react'

const Jsx = () => {

    // const saludo = 'Hola JSX'
    const temperatura = 21;

    return ( 
        <Fragment>
            <div className="container mt-5">
                <h1>Hola JSX</h1>
                <h2>Frío o calor?</h2>
                <h4>
                    {temperatura > 20 ? 'Calor' : 'Frio'};
                </h4>
            </div>
        </Fragment>
    );
}
 
export default Jsx;

