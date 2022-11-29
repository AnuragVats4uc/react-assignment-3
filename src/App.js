import "./App.css";
import Store from "./context/Store";
import DateTime from "./DateTime";

function App() {
  return (
    <Store>
      <DateTime />
    </Store>
  );
}

export default App;
