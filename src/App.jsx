import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./conponents/inputTodo";
import { IncompleteTodos } from "./conponents/IncompleteTodos";
import { CompleteTodos } from "./conponents/CompleteTodos";
import { SaveTodo } from "./conponents/SaveTodo";

export const App = () => {
  // 追加ボックス
  const [todoText, setTodoText] = useState("");
  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了のTODO
  const [completeTodos, setCompleteTodos] = useState([]);
  // 保留のTODO
  const [saveTodos, setSaveTodos] = useState([]);

  // event.target.valueが実際の入力テキストになる。覚える。
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加する関数
  const onClickAdd = () => {
    if (todoText === "") {
      alert("TODO項目を追加してください");
      return;
    }
    // ...incompleteTodosは["aaaaa", "bbbbb"]、todoTextはテキストボックス内容
    const newTodos = [...incompleteTodos, todoText];
    // console.log(newTodos);
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除する関数
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // index番目から1つ削除する処理
    newTodos.splice(index, 1);
    // 今ある配列
    setIncompleteTodos(newTodos);
  };

  //　完了のTODOに追加する関数
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了のTODOに追加する完了ボタンを押した際の配列を再生成
    const newCompeleTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompeleTodos);
  };

  // 戻すボタンの関数
  const onClickBack = (index) => {
    const newCompeleTodos = [...completeTodos];
    newCompeleTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompeleTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  //保留ボタンの関数
  const onClickSave = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newSaveTodos = [...saveTodos, incompleteTodos[index]];
    setSaveTodos(newSaveTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  //保留か復帰するボタン
  const onClickBackSave = (index) => {
    const newSaveTodos = [...saveTodos];
    newSaveTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, saveTodos[index]];
    setSaveTodos(newSaveTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです。</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickSave={onClickSave}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />

      {/* 保留 */}

      <SaveTodo
        todos={saveTodos}
        onClickBackSave={onClickBackSave}
        disabled={incompleteTodos.length >= 5}
      />
    </>
  );
};
