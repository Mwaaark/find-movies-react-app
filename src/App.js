import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";

import Movies from "./pages/Movies";
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
          <Movies />
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
