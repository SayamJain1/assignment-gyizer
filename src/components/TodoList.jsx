import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function TodoList({
  item,
  todoList,
  setTodoList,
  setEditId,
  setEditTodoTitle,
  setEditInput,
}) {
  const [info, setInfo] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);

  const handleEdit = (id) => {
    const itemToEdit = todoList.find((item) => item.id === id);
    if (itemToEdit) {
      setEditId(id);
      setEditTodoTitle(itemToEdit.titleInput);
      setEditInput(itemToEdit.input);
      setInfo(false);
    }
  };

  return (
    <div className="todoList_wrapper">
      <div>
        <p>{item.titleInput}</p>
        <p>{item.input.substring(0, 16)}...</p>
      </div>
      <div>
        {!info ? (
          <button className="todo_btn" onClick={() => setInfo(true)}>
            i
          </button>
        ) : (
          <div>
            <button className="todo_btn" onClick={() => handleEdit(item.id)}>
              <img src="/public/pen.png" alt="edit" />
            </button>{" "}
            <button className="todo_btn" onClick={() => setOpenWindow(true)}>
              x
            </button>{" "}
          </div>
        )}
      </div>
      {openWindow && (
        <DeleteModal
          item={item}
          setOpenWindow={setOpenWindow}
          setTodoList={setTodoList}
          todoList={todoList}
          setInfo={setInfo}
        />
      )}
    </div>
  );
}
