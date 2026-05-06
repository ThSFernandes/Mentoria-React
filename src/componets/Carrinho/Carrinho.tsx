import shoppingCart from "../../assets/images/ShoppingCart.svg";

// criar um componente de icone ToDo

export function Carrinho(): React.ReactElement {
  return (
    <div className="cart-area">
      <div className="text-are">
        <p className="text-meu-carrinho">Meu carrinho</p>
        <p className="text-quant-carrinho">3 itens</p>
      </div>
      <div className="shopping-cart">
        <img src={shoppingCart} alt="Carrinho de compras" />
      </div>
    </div>
  );
}
