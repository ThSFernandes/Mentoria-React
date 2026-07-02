export function CartTableHeader(): React.ReactElement {
  return (
    <thead>
      <tr className="linha-cabecalho">
        <th className="coluna-cabecalho">PRODUTO</th>
        <th className="coluna-cabecalho coluna-qtd">QTD</th>
        <th className="coluna-cabecalho coluna-preco">PREÇO</th>
      </tr>
    </thead>
  );
}
