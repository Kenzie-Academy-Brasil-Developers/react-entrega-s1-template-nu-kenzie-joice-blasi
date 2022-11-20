import { useState } from "react";
import "./style.css";

export const Categories = ({ typeList, setFilter }) => {
  const [liSelected, setLiSelected] = useState("todos");

  return (
    <div className="CategoriesContainer container">
      <h3 className="title_3 font_nunito">Resumo financeiro</h3>
      <ul>
        <li
          onClick={() => {
            setFilter("todos");
            setLiSelected("todos");
          }}
          value="todos"
          className={
            liSelected === "todos"
              ? "headline font_nunito LiSelected"
              : "headline font_nunito"
          }
        >
          Todos
        </li>
        {typeList.map((type, index) => {
          return (
            <li
              key={index}
              value={type.value}
              onClick={() => {
                setFilter(type.value);
                setLiSelected(type.value);
              }}
              className={
                liSelected === type.value
                  ? "headline font_nunito LiSelected"
                  : "headline font_nunito"
              }
            >
              {type.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
