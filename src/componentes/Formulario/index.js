import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

    
    
const Formulario = (props) =>{
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log(nome, cargo, imagem, time )
        props.aoColaboradoresCadrastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
    }
    
    

    return(
        <section className='Container__cria-card'>
            <form onSubmit={aoSalvar} className='campo-card'>
                <h2 className='Titulo__cria-card'>
                    Preencha os dados para criar o card do colaborador.
                </h2>

                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                type='text' 
                placeholder='Digite seu nome'  
                id="campo-nome-card"
                valor={nome}
                aoAlterar={valor => setNome(valor)}
                />

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                type='text' 
                placeholder='Digite seu cargo' 
                id="campo-Cargo-card"
                valor={cargo}
                aoAlterar={valor => setCargo(valor)}
                />

                <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                type='text' 
                placeholder='Informe o endereço da imagem' 
                id="campo-Imagem-card"
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
                />

                <ListaSuspensa
                
                itens={props.times}
                valor={time}
                aoAlterar={ valor => setTime(valor)}
                id="campo-Time-card" 
                label="Time"
                />

            
                <Botao children={"Criar card"}/>
                
                
            </form>
        </section>
    )
}

export default Formulario;