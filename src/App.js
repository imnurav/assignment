import "./App.css";
import Navbar from "./Components/Navbar";
import Boxes from "./Components/Boxes";

function App() {
  return (
    <div className="App p-2 bodyDiv mt-2">
      <Navbar />
      <div className="mt-3">

      <Boxes />
      </ div>
    </div>
  );
}

export default App;
