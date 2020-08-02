import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .footer {
    height: 100%;
    display: flex;
    .ft-ct {
      font-size: 12px;
      flex: 1;
      padding-top: 15px;
      .first {
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        a {
          color: #b5b2b2;
        }
        span {
          padding: 0 15px;
        }
      }
      .second, .contact, .right {
        height: 25px;
        line-height: 25px;
        .sep {
          margin-right: 15px;
        }
        .span {
          color: #7d7979;
        }
      }
    }
    .ft-fr {
      flex: 1;
      margin-top: 33px;
      .f-fr {
        display: flex;
        justify-content: space-evenly;
        & li:nth-of-type(1) a {
          background-position: -60px -456.5px;
        }
        & li:nth-of-type(2) a {
          background-position: -60px -101px;
        }
        & li:nth-of-type(3) a {
          background-position: 0 0;
        }
        & li:nth-of-type(4) a {
          background-position: -60px -50px;
        }
        & li:nth-of-type(5) a {
          background-position: 0 -101px;
        }
        li {
          a {
            display: block;
            width: 50px;
            height: 45px;
            margin: 0 auto;
            background-image: url(${require('@/assets/img/sprite_footer_02.png')});
            background-size: 110px 552px;
          }
          span {
            display: inline-block;
            margin: 5px 5px 0;
            width: 52px;
            height: 14px;
            background-image: url(${require('@/assets/img/sprite_footer_01.png')});
            background-size: 180px 139px;
          }
          .tt-amped {
            width: 72px;
          }
        }
        & li:nth-of-type(1) span {
          background-position: 0 -108px;
        }
        & li:nth-of-type(2) span {
          background-position: 3px -91px;
        }
        & li:nth-of-type(3) span {
          background-position: 0 0;
        }
        & li:nth-of-type(4) span {
          background-position: 4px -54px;
        }
        & li:nth-of-type(5) span {
          background-position: -1px -72px;
        }
      }
    }
  }
`