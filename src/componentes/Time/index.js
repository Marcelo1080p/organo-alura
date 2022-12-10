import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    return (
        <section style={{background: props.corSecundaria }} className="time">
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores.map(colaborador =>
                <Colaborador 
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />
            )}

        </section>
    )
}

export default Time