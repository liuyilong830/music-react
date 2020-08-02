import React, { memo } from "react";

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'
import {localData} from '../../common/local-data'

export default memo(function AppHeader(props) {

  const renderLink = (item, index) => {
    if (index < 3 || index === localData.length-1) {
      return (
        <NavLink to={item.to} exact>
          {item.title}
          <i className='icon sprite_01'></i>
        </NavLink>
      )
    } else {
      return <a href="#/">{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="left">
          <h1 className="logo sprite_01">
            <a href="#/">&nbsp;</a>
          </h1>
          <div className='router'>
            {
              localData.map((item, index) => {
                return (
                  <div className="router-item" key={item.title}>
                    {renderLink(item, index)}
                  </div>
                )
              })
            }
            {/*<NavLink to='/'>发现音乐</NavLink>
            <NavLink to='/my'>我的音乐</NavLink>
            <NavLink to='/shop'>商城</NavLink>
            <NavLink to='/musicman'>音乐人</NavLink>
            <NavLink to='/friends'>朋友</NavLink>
            <NavLink to='/download'>下载客户端</NavLink>*/}
          </div>
        </div>
        <div className="right">
          <div className="search sprite_01">
            <span>
              <input type="text" placeholder='音乐/视频/电台/用户'/>
            </span>
          </div>
          <div className="creator-center">
            <span>创作中心</span>
          </div>
          <h2 className='login-link'>
            <a href="#/">登录</a>
          </h2>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})