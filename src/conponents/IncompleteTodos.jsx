import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete, onClickSave } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // mapなどのレンダリングを行う際はkeyが必要
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡したい時はそのまま書かず、アロー関数で新しく関数を生成 */}
              <button onClick={() => onClickDelete(index)}>削除</button>
              <button onClick={() => onClickSave(index)}>保留</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
