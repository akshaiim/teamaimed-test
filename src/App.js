import "./App.css";
import { Pricing } from "./components/pricing";
import { Table } from "./components/table";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Pricing />
      <Table />
    </div>
    </div>
  );
}

export default App;
