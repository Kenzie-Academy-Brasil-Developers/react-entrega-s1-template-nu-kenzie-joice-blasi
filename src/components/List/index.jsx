import "./style.css";
import { Card } from "./Card";

export const List = ({ listTransactions, removeTransaction }) => {
  return (
    <ul className="ContainerList container">
      {listTransactions.map((transaction, index) => {
        return (
          <Card
            key={index}
            transaction={transaction}
            removeTransaction={removeTransaction}
          />
        );
      })}
    </ul>
  );
};
