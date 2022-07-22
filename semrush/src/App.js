import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomeTop from './Components/HomeTop';
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomeTop />
     <Footer/>
     {/* <Login /> */}
    </div>
  );
}

export default App;
