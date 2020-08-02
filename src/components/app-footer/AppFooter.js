import React, { memo, Fragment } from "react";

import {FooterWrapper} from './style'
import {footerLinks, footerImages} from '@/common/local-data'

export default memo(function AppFooter(props) {
  return (
    <FooterWrapper>
      <div className="footer wrap-v2">
        <div className="ft-ct">
          <p className="first">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link}>{item.title}</a>
                    {index !== footerLinks.length-1 && <span>|</span>}
                  </Fragment>
                )
              })
            }
          </p>
          <p className="second">
            <span className="sep span">网易公司版权所有©1997-2020</span>
            <span className="span">杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank"
               rel="noopener noreferrer"
               className="alink s-fc3">浙网文[2018]3506-263号</a>
          </p>
          <p className="contact">
            <span className="sep span">违法和不良信息举报电话：0571-89853516</span>
            <span className="span">举报邮箱：</span><a className="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p className="right s-fc3">
            <span className="sep span">粤B2-20090191-18</span><a
            href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer"
            target="_blank" className="alink s-fc3">工业和信息化部备案管理系统网站</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
               rel="noopener noreferrer" target="_blank" className="alink s-fc3 police-link">
              <span className="police-logo"></span>
              <span className="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        <div className="ft-fr">
          <ul className="f-fr">
            {
              footerImages.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link} target='_blank' rel="noopener noreferrer" className='logonew'> </a>
                    <span className={index === 0 ? 'tt tt-amped' : 'tt'}></span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </FooterWrapper>
  )
})