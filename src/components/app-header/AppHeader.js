import React, { memo } from "react";

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

export default memo(function AppHeader(props) {
  return (
    <HeaderWrapper>
      <div className="content">
        <h1 className="logo sprite_01">
          <a href="#/"></a>
        </h1>
        <div>
          <NavLink to='/'>发现音乐</NavLink>
          <NavLink to='/my'>我的音乐</NavLink>
          <NavLink to='/friends'>朋友</NavLink>
          <NavLink to='/download'>下载客户端</NavLink>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})