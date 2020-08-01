import React, {memo} from "react";
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from "./router";
import AppHeader from "components/app-header/AppHeader";
import AppFooter from "components/app-footer/AppFooter";

export default memo(function App(props) {
  return (
    <HashRouter>
      <AppHeader/>
      { renderRoutes(routes) }
      <AppFooter/>
    </HashRouter>
  )
})