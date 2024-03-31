import './CampoTexto.css';
const CampoTexto = (props) =>{

    
    
    
    const aoDigitar = (evento) =>{
       props.aoAlterar(evento.target.value)
    }
    return(
        
        <div>
            <label
            htmlFor={props.id} 
            className='Label-itens'> 
            {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} type={props.type} required={props.obrigatorio} placeholder={props.placeholder} id={props.id} className='Input-itens'/>
        </div>
    )
}

export default CampoTexto;