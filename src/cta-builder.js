import React from "react";
import ReactDOM from "react-dom";
import CtaBuilder from "./containers/CtaBuilder.jsx";
import "./styles/styles.scss";
import '@simonwep/pickr/dist/themes/monolith.min.css';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {gtmId: 'GTM-NDQ8P2'}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<CtaBuilder />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
