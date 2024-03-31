import './Botao.css'

const Botao = (props) =>{
    return(
        
        <button id='botao__cria-card'>
            {props.children}
        </button>
        
    )
}

export default Botao;