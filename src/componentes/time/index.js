
import Cards from '../cards';
import './Time.css'


const time = (props) => {

    const cssSection = {
        backgroundColor: props.corPrimaria
        
    }
    const cssH3 = {
        borderColor: props.corSecundaria
    }
    return(
        (props.colaboradores.length > 0) ? <section className='container__card' style={cssSection}>
            <h3 className='titulo-card' style={cssH3}>{props.nome}</h3>
            <div className='container__time-cards'>
            {props.colaboradores.map(colaborador => <Cards corFundo={props.corSecundaria} nome={colaborador.nome} key={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}   
            
            </div>
            
        </section>
        : ''
    );
}

export default time;