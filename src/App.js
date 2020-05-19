import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./component/Loader/Loader";
import Header from "./component/Header";
// const Layout = React.lazy(() => import("./container/Layout"));
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Layout from "./container/Layout";
import Login from "./component/Login";
import Home from "./component/Home";
import Register from "./component/Register";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Layout>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Layout>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
