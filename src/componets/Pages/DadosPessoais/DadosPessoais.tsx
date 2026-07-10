import { useEffect, useState } from "react";
import "./dados-pessoais.scss";

// deixar o card genérico para qualquer parte
export function DadosPessoais(): React.ReactElement {
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("nome alterado");
  }, [nome, setNome]);

  return (
    <div className="dados-pessoais-container">
      <div className="container-formulario">
        <h1 className="title-formulario"> Formulário</h1>

        <form className="formulario">
          {/* input controlado quando quero validar as informações*/}
          <input
            className="campo-formulario"
            type="text"
            name="nome"
            placeholder="nome"
            onBlur={(event) => {
              console.log("value", event.target.value);
              const campoNome = event.target.value;
              setNome(campoNome);
            }}
          />
          <p>{nome}</p>
          <input
            className="campo-formulario"
            type="number"
            name="telefone"
            placeholder="telefone"
          />
          <input
            className="campo-formulario"
            type="text"
            name="cep"
            id=""
            placeholder="CEP"
          />
          <select className="campo-formulario" name="estado" id="">
            <option>Estado</option>
          </select>

          <select className="campo-formulario" name="cidade" id="">
            <option>Cidade</option>
          </select>
          <button className="btn-submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
