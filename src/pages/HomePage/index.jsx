import "./style.css";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/TotalMoney";
import { Categories } from "../../components/Categories";
import { List } from "../../components/List";
import { NoCard } from "../../components/NoCard";

export const HomePage = ({
  setLogin,
  typeList,
  listTransactions,
  setListTransactions,
  addTransaction,
  removeTransaction,
  setFilter,
}) => {
  return (
    <div className="HomePage">
      <Header setLogin={setLogin} />
      <div className="CompleteContainer container">
        <div className="ContainerLeft">
          <Form
            listTransactions={listTransactions}
            typeList={typeList}
            addTransaction={addTransaction}
            removeTransaction={removeTransaction}
          />
          {listTransactions.length ? (
            <TotalMoney listTransactions={listTransactions} />
          ) : (
            ""
          )}
        </div>
        <div className="ContainerRight">
          <Categories typeList={typeList} setFilter={setFilter} />
          {listTransactions.length ? (
            <List
              listTransactions={listTransactions}
              removeTransaction={removeTransaction}
            />
          ) : (
            <NoCard />
          )}
        </div>
      </div>
    </div>
  );
};
