import { useForm } from "react-hook-form";
import "./dados-pessoais.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Input from "../../Input/input";

const FEATURE_TOGGLE = false;

const schema = z.object({
  nome: z.string(),
  telefone: z.array(z.number()),
  cep: z.string(),
  estado: z.string().optional(),
  cidade: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

// deixar o card genérico para qualquer parte
export function DadosPessoais(): React.ReactElement {
  const { register, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const enviarFormulario = handleSubmit((data): void => {
    console.log("data", data);
  });

  return (
    <div className="dados-pessoais-container">
      <div className="container-formulario">
        <h1 className="title-formulario"> Formulário</h1>

        {/* //Opções de deixar um campo para ele enviar como array */}
        <form className="formulario" onSubmit={enviarFormulario}>
          <Input
            // loading
            label="Nome"
            {...register("nome", { required: true })}
          />

          <input
            className="campo-formulario"
            type="number"
            placeholder="telefone"
            {...register("telefone", { valueAsNumber: true })}
          />
          {/* mapear os arrays
          <input
            className="campo-formulario"
            type="number"
            placeholder="telefone"
            {...register("telefone.casa.2", { valueAsNumber: true })}
          />
          <input
            className="campo-formulario"
            type="number"
            placeholder="telefone"
            {...register("telefone.casa.3", { valueAsNumber: true })}
          /> */}

          <input
            className="campo-formulario"
            type="text"
            id=""
            placeholder="CEP"
            {...register("cep")}
          />
          {FEATURE_TOGGLE && (
            <>
              <select
                className="campo-formulario"
                id=""
                {...register("estado")}
              >
                <option value={""}>Selecione</option>
                <option>Estado</option>
              </select>

              <select
                className="campo-formulario"
                id=""
                {...register("cidade")}
              >
                <option value={""}>Selecione</option>
                <option>Cidade</option>
              </select>
            </>
          )}
          <button className="btn-submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
