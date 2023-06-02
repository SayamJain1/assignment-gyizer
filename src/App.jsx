import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [titleInput, setTitleInput] = useState("");
  const [editTodoTitle, setEditTodoTitle] = useState("");

  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updatedList = todoList.map((item) =>
        item.id === editId
          ? { ...item, titleInput: editTodoTitle, input: editInput }
          : item
      );

      setTodoList(updatedList);
      setEditId(null);
      setEditTodoTitle("");
      setEditInput("");
    } else {
      setTodoList((prevList) => [
        ...prevList,
        { titleInput, input, id: uuidv4() },
      ]);
      setTitleInput("");
      setInput("");
    }
  };
  return (
    <div className="app">
      <Header />
      <div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={editId ? editTodoTitle : titleInput}
              onChange={(e) => {
                if (editId) {
                  setEditTodoTitle(e.target.value);
                } else {
                  setTitleInput(e.target.value);
                }
              }}
              required
            />
            <input
              type="text"
              placeholder="Descreption"
              value={editId ? editInput : input}
              onChange={(e) => {
                if (editId) {
                  setEditInput(e.target.value);
                } else {
                  setInput(e.target.value);
                }
              }}
              required
            />
          </div>
          <div>
            <button type="submit" className="submit_btn">
              {editId ? "Update" : "+"}
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {todoList.length ? (
          todoList.map((item) => (
            <TodoList
              key={item.id}
              item={item}
              todoList={todoList}
              setTodoList={setTodoList}
              setEditId={setEditId}
              setEditTodoTitle={setEditTodoTitle}
              setEditInput={setEditInput}
            />
          ))
        ) : (
          <div className="no_task_container">
            <p className="noTask">NO TASK</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
