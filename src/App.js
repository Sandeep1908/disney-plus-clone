import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {selectUserName} from './features/user/userSlice';
import {useSelector} from 'react-redux';

function App() {
  const username=useSelector(selectUserName);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          {!username ? 
              <Route exact path="/">
                <Login />
              </Route>
            :
            <Route exact path="/">
              <Home />
            </Route>
          }

          <Route exact path="/detail::id">
            <Detail />
          </Route>



        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
