import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

const Todo = lazy(() => import("./components/pages/Todo"));
const Home = lazy(() => import("./components/HomePage"));
const Graph = lazy(() => import("./components/pages/Charts"));
const Tutoriels = lazy(() => import("./components/pages/Tutoriels"));
const UnknownPage = lazy(() => import("./components/pages/UnkownPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/taches" component={Todo} />
        <Route exact path="/resultats" component={Graph} />
        <Route exact path="/aide" component={Tutoriels} />
        <Route path="*" component={UnknownPage} />
      </Switch>
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
