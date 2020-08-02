import styled from 'styled-components'
export const HeaderWrapper = styled.header`
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
    display: flex;
      .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        a {
          display: block;
          height: 100%;
        }
      }
      .router {
        display: flex;
        line-height: 70px;
        .router-item {
          position: relative;
          a {
            display: block;
            color: #ccc;
            padding: 0 20px;
            text-decoration-line: none;
          }
          &:last-of-type {
            position: relative;
            &::after {
              position: absolute;
              content: '';
              top: 11px;
              right: -13px;
              background-image: url(${require('assets/img/sprite_01.png')});
              background-position: -190px 0;
              width: 30px;
              height: 25px;
            }
          }
          &:hover a, .active {
            background-color: #1b1a1a;
            color: white;
          }
          .active .icon {
            position: absolute;
            background-position: -225px 1px;
            bottom: 0;
            left: 50%;
            margin-left: -6px;
            width: 12px;
            height: 7px;
          }
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .search {
        box-sizing: border-box;
        width: 158px;
        height: 32px;
        margin-top: 19px;
        background-color: white;
        background-position: 0 -99px;
        border-radius: 20px;
        line-height: 32px;
        padding-left: 30px;
        input {
          width: 110px;
          font-size: 12px;
          border: none;
          background-color: transparent;
        }
      }
      .creator-center {
        color: #ccc;
        line-height: 70px;
        padding: 0 15px;
        span {
          padding: 5px 15px;
          border: 1px solid #ccc;
          border-radius: 15px;
          &:hover {
            color: white;
            border-color: white;
          }
        }
      }
      .login-link {
        padding: 0 10px;
        line-height: 70px;
        a {
          font-size: 12px;
          color: #ccc;
          font-weight: 500;
        }
      }
    }
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`