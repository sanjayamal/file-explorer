import "./App.css";
import Explorer from "./components/explorer/Explorer";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Explorer />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
