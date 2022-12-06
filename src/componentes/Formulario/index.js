import React from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (e) => {
      e.preventDefault()
      console.log("Formulario salvo")
    }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} nome="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} nome="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto obrigatorio={true} nome="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;