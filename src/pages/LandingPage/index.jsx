import "./style.css";
import logo from "../../assets/logo.png";
import image from "../../assets/image.svg";

export const LandingPage = ({ setLogin }) => {
  return (
    <div className="LandingPage">
      <div className="MainContainer container">
        <div className="PresentationContainer">
          <img src={logo} alt="Logo NuKenzie" className="Logo" />
          <h1 className="title_1 font_nunito">
            Centralize o controle das suas finanças
          </h1>
          <p className="headline font_nunito">de forma rápida e segura</p>
          <button
            type="button"
            onClick={() => setLogin(true)}
            className="headline font_inter"
          >
            Iniciar
          </button>
        </div>
        <div className="ContainerImage">
          <img src={image} alt="Imagem NuKenzie" />
        </div>
      </div>
    </div>
  );
};
