import "./sytles/reset.css";
import "./sytles/global.scss";
import { Home } from "./pages/Home/Home";

function App(): React.ReactElement {
  return <Home  />;
}

export default App;


// const [productsList, setProductsList] = useState<unknown[]>([]); // retorna 2 parametros

  // const novoProdutoMock = [
  //   {
  //     id: 11,
  //     title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
  //     price: 111.86,
  //     special: false,
  //     image:
  //       "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp",
  //   },
  // ];

  // function adicionarProduto(novoProdutoMock: any): void {
  //   setProductsList([...novoProdutoMock, novoProdutoMock]);
  // }

  // useEffect(() => {
  //   consultarProdutos("cards")
  //     .then((response) => response.json())
  //     .then((data) => setProductsList(data)); //Forma antiga de fazer
  // }, []);
  
