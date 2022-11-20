import "./style.css";
import { useState } from "react";
import { Toast } from "../Toast";

export const Form = ({ listTransactions, typeList, addTransaction }) => {
  const [formData, setFormData] = useState({
    description: "",
    type: typeList[0].value,
    value: "",
  });
  const [toast, setToast] = useState(false);

  function submit(event) {
    event.preventDefault();
    const exist = listTransactions.some((transactions) => {
      return transactions.description === formData.description;
    });
    if (exist) {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } else {
      addTransaction(formData);
      setFormData({
        description: "",
        type: formData.type,
        value: "",
      });
    }
  }

  return (
    <form onSubmit={submit} className="FormContainer container">
      <label className="body font_inter">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        maxLength={20}
        required
        value={formData.description}
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
        className="input font_inter headline"
      />
      <p className="body font_inter">Ex: Compra de roupas</p>
      <div>
        <div className="ContainerValue">
          <label className="body font_inter">Valor</label>
          <input
            type="number"
            placeholder="1"
            required
            value={formData.value}
            onChange={(event) =>
              setFormData({ ...formData, value: Number(event.target.value) })
            }
            className="font_inter headline"
          />
          <span className="font_inter headline">R$</span>
        </div>
        <div className="ContainerType">
          <p className="body font_inter">Tipo de valor</p>
          <select
            required
            defaultValue={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
            className="body font_inter"
          >
            {typeList.map((type, index) => {
              return (
                <option key={index} value={type.value}>
                  {type.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {toast && <Toast />}
      <button type="submit" className="headline font_inter">
        Inserir valor
      </button>
    </form>
  );
};
