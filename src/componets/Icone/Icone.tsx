import shoppingCart from "../../assets/images/ShoppingCart.svg";

const icons = { shoppingCart };

//  | posso usar o pipe para quando tiver mais de um 
type nameIcon =  "shoppingCart";

interface IconeProps {
  name: nameIcon;
  size?: string;
}

export function Icone({name, size}: IconeProps): React.ReactElement {
  return (
    <img src={icons[name]} width={size} alt="carrinho de compras" />
  );
}
