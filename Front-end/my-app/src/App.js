import { Header } from "./components/Header";
import { Route, Switch } from "react-router-dom";

import { Main } from "./components/Main";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={AddUser} path="/add" />
        <Route component={EditUser} path="/edit/:id" />
      </Switch>

      <GlobalStyle />
    </>
  );
}

export default App;
