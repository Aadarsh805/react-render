import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/Immutable state/ObjectUseState";
import ArrayUseState from "./components/Immutable state/ArrayUseState";
import ArrayUseState from "./components/Parent Child/Parent";

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
