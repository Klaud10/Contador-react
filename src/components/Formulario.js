import React, {Fragment, useState} from 'react'

const Formulario = () => {
    
    const [datos, setDatos] = useState({
       nombre: '',
       apellido: '',
       email:'' 
    });
    
    const handleInputChange = (event) => {
       
        setDatos({
            ...datos,
            [event.target.name] : event.target.value 
        })
    }; 

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido + ' ' + datos.email );
    }; 
    
    return (
        <Fragment> 
        <div className="container">
            <h1 className="mt-5">Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                
                <div className="col-md-3 mt-2">
                    <input 
                        className="form-control" 
                        placeholder="Nombre" 
                        type="texto" 
                        name="nombre"
                        onChange={handleInputChange}/>
                </div>
                
                <div className="col-md-3 mt-2">
                    <input 
                        className="form-control" 
                        placeholder="Apellido" 
                        type="texto" 
                        name="apellido"
                        onChange={handleInputChange}/>
                </div>
                
                <div className="col-md-3 mt-2">
                    <input 
                        className="form-control" 
                        placeholder="Email" 
                        type="email" 
                        name="email"
                        onChange={handleInputChange}/>
                </div>
                
                <div className="col-md-3 mt-2" >
                   <button className="btn btn-primary" type="submit">Enviar</button> 
                </div>
                
            </form>
            <h4>Nombre: {datos.nombre} </h4>
            <h4>Apellidos: {datos.apellido} </h4> 
            <p>E-mail: {datos.email}</p> 
        </div>
        </Fragment>
     );
}
 
export default Formulario;