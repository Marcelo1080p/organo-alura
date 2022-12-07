import React, { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          nome="Nome"
          placeholder="Digite seu nome"
          value={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          nome="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          nome="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          value={time} 
          obrigatorio={true} 
          label="Time" 
          itens={times} 
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
