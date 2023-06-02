export default function DeleteModal({
  item,
  setOpenWindow,
  setTodoList,
  todoList,
  setInfo,
}) {
  const handleDelete = (id) => {
    const updatedTodos = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodos);
    setOpenWindow(false);
  };
  const handleNo = () => {
    setOpenWindow(false);
    setInfo(false);
  };
  return (
    <>
      <div className="modal_blur" onClick={() => setOpenWindow(false)}></div>
      <div className="delete_window">
        <p>Delete this task?</p>
        <div className="btns_wrapper">
          <button onClick={() => handleDelete(item.id)}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      </div>
    </>
  );
}
