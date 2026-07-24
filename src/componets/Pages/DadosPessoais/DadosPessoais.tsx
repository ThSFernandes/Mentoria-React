import { useForm } from "react-hook-form";
import "./dados-pessoais.scss";

interface FormFields {
  nome: string;
  telefone: number;
  cep: string;
  estado: string;
  cidade: string;
}

// deixar o card genérico para qualquer parte
export function DadosPessoais(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: { nome: "Leandro" },
  });

  console.log("formState", errors);
  const enviarFormulario = handleSubmit((data): void => {
    console.log("data", data);
  });

  return (
    <div className="dados-pessoais-container">
      <div className="container-formulario">
        <h1 className="title-formulario"> Formulário</h1>

        {/* //Opções de deixar um campo para ele enviar como array */}
        <form className="formulario" onSubmit={enviarFormulario}>
          <input
            className="campo-formulario"
            type="text"
            placeholder="nome completo"
            {...register("nome", { required: true })}
          />

          <input
            className="campo-formulario"
            type="number"
            placeholder="telefone"
            {...register("telefone")}
          />
          <input
            className="campo-formulario"
            type="text"
            id=""
            placeholder="CEP"
            {...register("cep")}
          />
          <select className="campo-formulario" id="" {...register("estado")}>
            <option value={""}>Selecione</option>
            <option>Estado</option>
          </select>

          <select className="campo-formulario" id="" {...register("cidade")}>
            <option value={""}>Selecione</option>
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
