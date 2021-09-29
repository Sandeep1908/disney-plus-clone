import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/detail::id">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
