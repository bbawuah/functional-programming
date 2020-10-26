import React, { Fragment, FunctionComponent } from "react";

import { Container } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FunctionComponent = (props) => (
  <Fragment>
    <Header />
    <Container>{props.children}</Container>
    <Footer />
  </Fragment>
);

export default Layout;
