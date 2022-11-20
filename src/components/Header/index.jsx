import "./style.css";
import logo_header from "../../assets/logo-header.png";

export const Header = ({ setLogin }) => {
  return (
    <div className="ContainerBorder">
      <div className="HeaderContainer container">
        <img src={logo_header} alt="Logo NuKenzie" />
        <button
          type="button"
          onClick={() => setLogin(false)}
          className="headline font_nunito"
        >
          Início
        </button>
      </div>
    </div>
  );
};
