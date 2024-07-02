import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <h1>Hello, Developer!</h1>
    </Provider>
  );
}

export default App;
