import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const sum = listTransactions
    .reduce((acc, currentValue) => {
      if (currentValue.type === "despesa") {
        return (acc -= currentValue.value);
      }
      return (acc += currentValue.value);
    }, 0)
    .toLocaleString("pt-BR");

  return (
    <div className="TotalContainer container">
      <div className="Total">
        <h3 className="title_3 font_nunito">Valor total:</h3>
        <p className="title_3 font_nunito">R$ {sum}</p>
      </div>
      <p className="body font_nunito">O valor se refere ao saldo</p>
    </div>
  );
};
