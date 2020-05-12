import React from "react";
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from "../components";

const IndexPage = () => (
      <Loader>
            <Home />
      </Loader>
)

export default IndexPage
