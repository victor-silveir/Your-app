import { createGlobalStyle, ThemProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-font-smooth: antialiased;
      font-family: 'Libre Baskerville', serif;
    }
    body {
      width: 100%;
      height: 100vh;
      background-color: #312E38;
      color: #ffffff;
      
    }
    svg, img {
      width: 100%;
    }
    input:focus{
      outline: none;
    }
`


function MyApp({ Component, pageProps }) {
  return (
    <GlobalStyle>
      <Component {...pageProps} />
    </GlobalStyle>
  );
};

export default MyApp
