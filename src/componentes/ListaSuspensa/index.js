import '../ListaSuspensa'
import'../Formulario'

const ListaSuspensa = (props) =>{
   
    
    return(
        <div>
            <label className='Label-itens' htmlFor={props.id}>{props.label}</label>
            <select valor={props.valor} onChange={evento => props.aoAlterar(evento.target.value)} className='Input-itens' id={props.id}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option id={props.id} key={item}>{item}</option>
                    
                })}
                
            </select>
        </div>
    )
}
export default ListaSuspensa;