import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./container/Login";
import Dashboard from "./container/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
