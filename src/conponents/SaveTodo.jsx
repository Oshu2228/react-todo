import React from "react";

export const SaveTodo = (props) => {
  const { todos, onClickBackSave, disabled } = props;
  return (
    <div className="save-area">
      <p className="title">保留中のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                disabled={disabled}
                onClick={() => onClickBackSave(index)}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
