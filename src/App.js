import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/time';
import Footer from './componentes/Footer';


const App = () => {

  const times = [
      
    {
      nome:'Programação',
      corPrimaria:'#D9F7E9',
      corSecundaria:'#57C278'
    },
    {
      nome:'Front-End',
      corPrimaria:'#E8F8FF',
      corSecundaria:'#82CFFA'
    },
    {
      nome:'Data Science',
      corPrimaria:'#F0F8E2',
      corSecundaria:'#A6D157'
    },
    {
      nome:'Devops',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#FAE9F5',
      corSecundaria:'#DB6EBF'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFF5D9',
      corSecundaria:'#FFBA05'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FFEEDF',
      corSecundaria:'#FF8A29'
    }

    ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador ) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  } 


  return (
    
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradoresCadrastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time
        nome={time.nome} 
        colaboradores={colaboradores.filter(caloborador => caloborador.time === time.nome)}
        corPrimaria={time.corPrimaria} 
        key={time.nome}
         corSecundaria={time.corSecundaria}/>)}
        <Footer/>
    </div>

  );
}

export default App;
