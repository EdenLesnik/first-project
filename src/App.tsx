// C O M P O N E N T
import Header from "./components/Layout/Header/Header";
import FooterP from "./components/Layout/Footer/FooterP";
import Cards from "./components/Cards/Cards";
import Login from "./components/Login/Login";
import Register from "./components/Sign Up/Register";

//P A G E S
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import ProfilePage from "./Pages/Profile/Profile";

// O T H E R
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
     <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <FooterP />
      </Provider>
    </>
  );
};

export default App;
