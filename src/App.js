import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";

import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies" exact>
          <Homepage />
        </Route>
        <Route path="/movies/:movieId" exact>
          <Movie />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}
