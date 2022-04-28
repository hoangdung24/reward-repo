import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Benefit from "./component/Benefit";
import BrandName from "./component/BrandName";
import News from "./component/News";
import SignUp from "./component/SignUp";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefit />
      {/* <BrandName /> */}
      <News />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
