import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Store from "./redux/store/Store";

export default function App() {
  const [text, setText] = useState("");

  const todoRed = useSelector((state) => state.TodoReducer);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let list = Store.getState()?.TodoReducer.todoList;
    if (text.length) {
      list.push(text);
      dispatch({ type: "Update", payload: list });
      setText("");
    }
  };

  const removeTodoItem = (index) => {
    let list = Store.getState()?.TodoReducer.todoList;
    list.splice(index, 1);
    dispatch({ type: "Update", payload: list });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Todo item</button>
      </form>

      <br />

      <div>
        <h3>To dos</h3>
        {todoRed?.todoList?.map((todoItem, index) => {
          return (
            <>
              <span
                key={`${todoItem}_${index}`}
                onClick={() => removeTodoItem(index)}
                style={{ cursor: "pointer" }}
              >
                {todoItem}
              </span>
              <br />
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
