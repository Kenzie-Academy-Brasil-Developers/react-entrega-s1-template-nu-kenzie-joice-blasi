import "./style.css";
import trash_default from "../../../assets/trash-default.svg";

export const Card = ({ transaction, removeTransaction }) => {
  return (
    <li
      className={
        transaction.type === "entrada"
          ? "CardContainer CardEntry"
          : "CardContainer CardOutput"
      }
    >
      <div>
        <h3 className="title_3 font_nunito">{transaction.description}</h3>
        <div className="ContainerValueDelete">
          <p className="body font_nunito">
            R$ {transaction.value.toLocaleString("pt-br")}
          </p>
          <button onClick={() => removeTransaction(transaction.description)}>
            <img src={trash_default} alt="Excluir" />
          </button>
        </div>
      </div>
      <p className="body font_nunito">{transaction.type}</p>
    </li>
  );
};
