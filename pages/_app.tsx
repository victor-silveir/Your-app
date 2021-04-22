import { createGlobalStyle } from 'styled-components'
import { AuthProvider, ProtectRoute } from '../src/hooks/AuthHook';


const GlobalStyle = createGlobalStyle`

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-font-smooth: antialiased;
      font-family: 'Arimo', sans-serif;    }
      
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
      border-color: #ff9000;

      &::placeholder {
        color: #ff9000;
      }
    }
    button:focus{
      outline: none;
    }
`

export async function getServerSideProps({ req, res }) {

  const token = req.headers[('authorization')];

  return token
}


function MyApp({ Component, pageProps }) {

  return (
    <>
      <AuthProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp
