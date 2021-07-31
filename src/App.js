import './App.css';
import Graph from "./components/Graph"
function App() {
  return (
    <div>
      <h1>App</h1>
      <Graph count={10000}></Graph>
    </div>
  );
}

export default App;
