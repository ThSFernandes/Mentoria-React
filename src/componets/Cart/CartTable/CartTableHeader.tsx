export function CartTableHeader(): React.ReactElement {
  return (
    <div className="cabecalho-carrinho">
      <span className="coluna-cabecalho coluna-produto">PRODUTO</span>
      <span className="coluna-cabecalho coluna-qtd">QTD</span>
      <span className="coluna-cabecalho coluna-preco">PREÇO</span>
    </div>
  );
}
