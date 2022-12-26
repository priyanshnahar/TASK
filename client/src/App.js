import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, deleteCount} from "./redux/action";

import "./App.css";

function App() {
  const [inputData, setInputData] = useState(" ");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <body>
      <div class="container">
        <h1>TO DO LIST</h1>
        <div id="newtask">
          <input
            type="text"
            placeholder="Task to be done.."
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            >
            Add
          </button>
        </div>

        <div className="tasks">
          {list.map((elem) => {
            return(
              <div key = {elem.id}>
              <h3>{elem.data}</h3>
              <button
                onClick={() => dispatch(deleteCount(elem.id),)}
              >
                Delete
              </button>
            </div>
            )
          })}
        </div>
      </div>
    </body>
  );
}

export default App;
