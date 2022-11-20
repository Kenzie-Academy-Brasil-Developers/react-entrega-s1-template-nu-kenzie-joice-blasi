import "./style.css";
import no_card from "../../assets/no-card.svg";

export const NoCard = () => {
  return (
    <div className="ContainerNoCard container">
      <h3 className="title_2 font_nunito">
        Você ainda não possui nenhum lançamento
      </h3>
      <img src={no_card} alt="Nenhum lançamento" />
    </div>
  );
};
