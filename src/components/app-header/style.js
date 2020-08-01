import styled from 'styled-components'
export const HeaderWrapper = styled.header`
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    width: 1100px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    justify-content: space-between;
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
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`