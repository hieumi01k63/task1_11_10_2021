import "./App.css";
import Action from "./pages/action/action";
import ActionDetail from "./pages/actionDetail/ActionDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <main className="App">
          <Route path="/" exact>
            <Action />
          </Route>
          <Route path="/detail">
            <ActionDetail />
          </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
