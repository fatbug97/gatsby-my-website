import background from 'images/background.webp'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyleCountdownPage = createGlobalStyle`
  :root {
    --background: #0b5335;
    --background-box: #28664e;
    --text: #ffffff;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background: linear-gradient(
      225deg,
      rgba(126, 179, 188, 0.52) 0%,
      var(--background) 100%
    ),
    center / cover no-repeat url("${background}");
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CountdownPage = styled.div`
  p {
    margin: 0;
    padding: 0;
  }

  .content {
    max-width: 650px;
  }

  .heading {
    margin-bottom: 46px;
  }

  .title {
    font-family: "Pushster", cursive;
    font-size: 41px;
    color: var(--text);
  }

  .subtitle {
    font-family: "Mulish", sans-serif;
    font-size: 13px;
    color: var(--text);
  }

  .note {
    font-family: "Mulish", sans-serif;
    font-size: 12px;
    color: var(--text);
    line-height: 17px;
  }

  .time {
    min-width: 150px;
  }

  .time:first-child .time-box {
    border-radius: 25px 0 0 25px;
  }

  .time:last-child .time-box {
    border-radius: 0 25px 25px 0;
  }

  .time-box {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 17px 18px 0 var(--background-box);
    height: 127px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .time-value {
    font-family: "Bitter", serif;
    font-size: 48px;
    color: var(--text);
    text-align: center;
  }

  .time-lable {
    font-family: "Mulish", sans-serif;
    font-size: 21px;
    color: var(--text);
    text-align: center;
  }

  .countdown {
    display: flex;
    justify-content: space-around;
    margin-bottom: 27px;
  }

  @media only screen and (max-width: 600px) {
    .countdown {
      flex-direction: column;
      flex-flow: wrap;
    }

    .time-box {
      border-radius: 25px !important;
    }

    .content {
      padding: 10px;
    }
  }
`
