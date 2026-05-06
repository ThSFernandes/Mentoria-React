import "./header.scss";
import textoLogo from "../../assets/images/ROCKETSHOES.svg";
import shape from "../../assets/images/Shape.svg";


export function Header(): React.ReactElement {
  return (
    <div className="header">
      <div className="header-logo-container">
        <div className="logo-area">
          <img src={textoLogo} alt="rocketshoes" />
          <img src={shape} alt="Tênis" />
        </div>
        
      </div>
    </div>
  );
}
