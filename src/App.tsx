import { ToastContainer } from 'react-toastify';

import Routes from './Routes';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
