import '../styles/globals.css';
import Navbar from "../Components/Navbar";
/* import { Provider } from "react-redux"; */


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
