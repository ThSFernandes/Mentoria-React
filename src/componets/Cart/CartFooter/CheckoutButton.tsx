import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "@tanstack/react-router";

export function CheckoutButton(): React.ReactElement {
  const { listaProdutos, setListaProdutos } = useContext(CartContext);
  const carrinhoVazio = listaProdutos.length === 0;

  const nanigate = useNavigate();

  const finalizarPedido = (): void => {
    // if (carrinhoVazio) {
    //   return;
    // }

    // setListaProdutos([]);
    nanigate({ to: "/dados-pessoais" });
  };

  return (
    <button
      type="button"
      className="btn-finalizar"
      onClick={finalizarPedido}
      disabled={carrinhoVazio}
    >
      FINALIZAR PEDIDO
    </button>
  );
}
