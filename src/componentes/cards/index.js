import './cards.css'

const cards = (props) => {
    return(
        <div className='card'>
            <div className='top-card' style={{backgroundColor: props.corFundo}}></div>
            <img className='img-card' src={props.imagem} alt={props.nome}/>
            <h4 className='titulo-cards'>{props.nome}</h4>
            <p className='texto-cards'> {props.cargo} </p>
        </div>
    )
}

export default cards;