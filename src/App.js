import "./App.css";
import { React } from "react";
import { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { typeData, transactions } from "../src/data";

function App() {
  const [login, setLogin] = useState(false);
  const [typeList, setTypeList] = useState(typeData);
  const [listTransactions, setListTransactions] = useState(transactions);
  const [filter, setFilter] = useState("todos");

  const filteredTransactions = listTransactions.filter((transaction) => {
    return filter === "todos" ? true : transaction.type === filter;
  });

  function addTransaction(transactionData) {
    setListTransactions([...listTransactions, transactionData]);
  }

  function removeTransaction(transactionRemove) {
    const newList = listTransactions.filter((transaction) => {
      return transaction.description !== transactionRemove;
    });
    setListTransactions(newList);
  }

  return (
    <div className="App">
      {login ? (
        <HomePage
          setLogin={setLogin}
          typeList={typeList}
          listTransactions={filteredTransactions}
          setListTransactions={setListTransactions}
          addTransaction={addTransaction}
          removeTransaction={removeTransaction}
          setFilter={setFilter}
        />
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
