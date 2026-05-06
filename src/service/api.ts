

export async function consultarProdutos(path: string): Promise<any> {
  return  fetch(`http://localhost:3000/${path}`);
}
