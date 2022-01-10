import React from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CreatePage from "../pages/CreatePage.js/CreatePage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ListPage />
      </Route>
      <Route exact path="/animal/:id">
        <DetailsPage />
      </Route>
      <Route exact path="/create">
        <CreatePage/>
      </Route>
    </Switch>
  );
};

export default Router;
